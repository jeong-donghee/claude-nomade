import { getCities, getCityById, getCitiesWithLikes, getCityLikesCount } from '@/lib/queries/cities'
import { createClient } from '@/utils/supabase/server'
import { mockDbCities, mockCities, mockCityDetail } from '@/__tests__/mocks/fixtures/cities'

// Mock the Supabase client
jest.mock('@/utils/supabase/server')

describe('lib/queries/cities', () => {
  let mockSupabase: any

  beforeEach(() => {
    mockSupabase = {
      from: jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        single: jest.fn(),
      })),
    }
    ;(createClient as jest.Mock).mockResolvedValue(mockSupabase)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getCities', () => {
    test('전체 도시 목록을 반환한다', async () => {
      mockSupabase.from().order().select = jest.fn().mockResolvedValue({
        data: mockDbCities,
        error: null,
      })

      const result = await getCities()

      expect(result).toHaveLength(3)
      expect(result[0].name).toBe('서울')
      expect(mockSupabase.from).toHaveBeenCalledWith('cities')
    })

    test('rank 오름차순으로 정렬된다', async () => {
      const unorderedCities = [mockDbCities[2], mockDbCities[0], mockDbCities[1]]
      mockSupabase.from().select = jest.fn().mockReturnThis()
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: unorderedCities,
        error: null,
      })

      const result = await getCities()

      expect(mockSupabase.from().order).toHaveBeenCalledWith('rank', { ascending: true })
      expect(result).toHaveLength(3)
    })

    test('빈 배열을 정상 처리한다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: [],
        error: null,
      })

      const result = await getCities()

      expect(result).toEqual([])
    })

    test('Supabase 에러 시 Error를 throw한다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: null,
        error: { message: 'Database error' },
      })

      await expect(getCities()).rejects.toThrow('Failed to fetch cities')
    })

    test('반환된 데이터가 CityCard 타입과 일치한다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: [mockDbCities[0]],
        error: null,
      })

      const result = await getCities()

      expect(result[0]).toHaveProperty('nameEn')
      expect(result[0]).toHaveProperty('monthlyCost')
      expect(result[0]).toHaveProperty('recommendRate')
    })

    test('snake_case가 camelCase로 변환된다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: [mockDbCities[0]],
        error: null,
      })

      const result = await getCities()

      expect(result[0].nameEn).toBe('Seoul')
      expect(result[0].monthlyCost).toBe(2500000)
      expect(result[0].internetSpeed).toBe(500)
    })
  })

  describe('getCityById', () => {
    test('존재하는 도시 ID로 상세 정보를 반환한다', async () => {
      mockSupabase.from().select = jest.fn().mockReturnThis()
      mockSupabase.from().eq = jest.fn().mockReturnThis()
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: mockDbCities[0],
        error: null,
      })

      const result = await getCityById(1)

      expect(result).not.toBeNull()
      expect(result?.id).toBe(1)
      expect(result?.name).toBe('서울')
      expect(mockSupabase.from).toHaveBeenCalledWith('cities')
      expect(mockSupabase.from().eq).toHaveBeenCalledWith('id', 1)
    })

    test('city_likes 배열 길이로 좋아요 수를 계산한다', async () => {
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: mockDbCities[0], // city_likes: [{}, {}, {}]
        error: null,
      })

      const result = await getCityById(1)

      expect(result?.likes).toBe(3)
    })

    test('city_likes가 없으면 좋아요 수는 0이다', async () => {
      const cityWithoutLikes = { ...mockDbCities[0], city_likes: [] }
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: cityWithoutLikes,
        error: null,
      })

      const result = await getCityById(1)

      expect(result?.likes).toBe(0)
    })

    test('존재하지 않는 ID 조회 시 null을 반환한다', async () => {
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: null,
        error: { code: 'PGRST116', message: 'Not found' },
      })

      const result = await getCityById(999)

      expect(result).toBeNull()
    })

    test('기타 Supabase 에러 시 Error를 throw한다', async () => {
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: null,
        error: { code: 'OTHER_ERROR', message: 'Database error' },
      })

      await expect(getCityById(1)).rejects.toThrow('Failed to fetch city')
    })

    test('반환 타입이 CityCard & CityDetail과 일치한다', async () => {
      const fullCity = {
        ...mockDbCities[0],
        description: '대한민국의 수도',
        pros: ['교통 편리'],
        cons: ['물가 비쌈'],
      }
      mockSupabase.from().single = jest.fn().mockResolvedValue({
        data: fullCity,
        error: null,
      })

      const result = await getCityById(1)

      expect(result).toHaveProperty('description')
      expect(result).toHaveProperty('pros')
      expect(result).toHaveProperty('cons')
    })
  })

  describe('getCitiesWithLikes', () => {
    test('모든 도시에 좋아요 수가 포함되어 반환된다', async () => {
      mockSupabase.from().select = jest.fn().mockReturnThis()
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: mockDbCities,
        error: null,
      })

      const result = await getCitiesWithLikes()

      expect(result).toHaveLength(3)
      expect(result[0].likes).toBe(3) // 서울
      expect(result[1].likes).toBe(1) // 부산
      expect(result[2].likes).toBe(5) // 제주
    })

    test('city_likes JOIN 쿼리가 정상 작동한다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: mockDbCities,
        error: null,
      })

      await getCitiesWithLikes()

      expect(mockSupabase.from).toHaveBeenCalledWith('cities')
      expect(mockSupabase.from().select).toHaveBeenCalledWith(expect.stringContaining('city_likes'))
    })

    test('좋아요가 없는 도시는 likes: 0이다', async () => {
      const citiesWithoutLikes = mockDbCities.map(city => ({
        ...city,
        city_likes: [],
      }))
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: citiesWithoutLikes,
        error: null,
      })

      const result = await getCitiesWithLikes()

      expect(result.every(city => city.likes === 0)).toBe(true)
    })

    test('rank 오름차순 정렬이 유지된다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: mockDbCities,
        error: null,
      })

      const result = await getCitiesWithLikes()

      expect(mockSupabase.from().order).toHaveBeenCalledWith('rank', { ascending: true })
    })

    test('Supabase 에러 시 Error를 throw한다', async () => {
      mockSupabase.from().order = jest.fn().mockResolvedValue({
        data: null,
        error: { message: 'Database error' },
      })

      await expect(getCitiesWithLikes()).rejects.toThrow('Failed to fetch cities with likes')
    })
  })

  describe('getCityLikesCount', () => {
    test('특정 도시의 정확한 좋아요 수를 반환한다', async () => {
      mockSupabase.from = jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({
          count: 5,
          error: null,
        }),
      }))

      const result = await getCityLikesCount(1)

      expect(result).toBe(5)
      expect(mockSupabase.from).toHaveBeenCalledWith('city_likes')
    })

    test('좋아요가 0인 경우 0을 반환한다', async () => {
      mockSupabase.from = jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({
          count: 0,
          error: null,
        }),
      }))

      const result = await getCityLikesCount(1)

      expect(result).toBe(0)
    })

    test('에러 발생 시 0을 반환한다', async () => {
      mockSupabase.from = jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({
          count: null,
          error: { message: 'Database error' },
        }),
      }))

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
      const result = await getCityLikesCount(1)

      expect(result).toBe(0)
      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })

    test('count가 null이면 0을 반환한다', async () => {
      mockSupabase.from = jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockResolvedValue({
          count: null,
          error: null,
        }),
      }))

      const result = await getCityLikesCount(1)

      expect(result).toBe(0)
    })
  })
})
