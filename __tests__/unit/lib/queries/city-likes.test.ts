import { getUserLikedCities, toggleCityLike, getCityLikesCount } from '@/lib/queries/city-likes'
import { createClient } from '@/utils/supabase/client'
import { mockUserLikedCities, mockUserLikedCityIds } from '@/__tests__/mocks/fixtures/users'

// Mock the Supabase client
jest.mock('@/utils/supabase/client')

describe('lib/queries/city-likes', () => {
  let mockSupabase: any
  let mockChain: any

  beforeEach(() => {
    mockChain = {
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      maybeSingle: jest.fn(),
    }

    mockSupabase = {
      from: jest.fn(() => mockChain),
    }
    ;(createClient as jest.Mock).mockReturnValue(mockSupabase)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getUserLikedCities', () => {
    test('사용자가 좋아요한 도시 ID 목록을 반환한다', async () => {
      mockChain.eq.mockResolvedValue({
        data: mockUserLikedCities,
        error: null,
      })

      const result = await getUserLikedCities('user-123')

      expect(result).toEqual([1, 3])
      expect(mockSupabase.from).toHaveBeenCalledWith('city_likes')
      expect(mockChain.select).toHaveBeenCalledWith('city_id')
      expect(mockChain.eq).toHaveBeenCalledWith('user_id', 'user-123')
    })

    test('좋아요가 없는 경우 빈 배열을 반환한다', async () => {
      mockChain.eq.mockResolvedValue({
        data: [],
        error: null,
      })

      const result = await getUserLikedCities('user-123')

      expect(result).toEqual([])
    })

    test('에러 발생 시 빈 배열을 반환한다', async () => {
      mockChain.eq.mockResolvedValue({
        data: null,
        error: { message: 'Database error' },
      })

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
      const result = await getUserLikedCities('user-123')

      expect(result).toEqual([])
      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('toggleCityLike', () => {
    describe('좋아요 추가 케이스', () => {
      test('기존 좋아요가 없을 때 INSERT 성공한다', async () => {
        // maybeSingle: 좋아요 없음
        mockChain.maybeSingle.mockResolvedValueOnce({
          data: null,
          error: null,
        })
        // insert 성공
        mockChain.insert.mockResolvedValueOnce({
          data: { id: 1, user_id: 'user-123', city_id: 1 },
          error: null,
        })

        const result = await toggleCityLike('user-123', 1)

        expect(result.success).toBe(true)
        expect(result.action).toBe('added')
        expect(mockChain.insert).toHaveBeenCalledWith({
          user_id: 'user-123',
          city_id: 1,
        })
      })

      test('INSERT 성공 시 올바른 응답을 반환한다', async () => {
        mockChain.maybeSingle.mockResolvedValueOnce({
          data: null,
          error: null,
        })
        mockChain.insert.mockResolvedValueOnce({
          error: null,
        })

        const result = await toggleCityLike('user-123', 1)

        expect(result).toEqual({ success: true, action: 'added' })
      })

      test('INSERT 실패 시 success: false를 반환한다', async () => {
        mockChain.maybeSingle.mockResolvedValueOnce({
          data: null,
          error: null,
        })
        mockChain.insert.mockResolvedValueOnce({
          error: { message: 'Insert failed' },
        })

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
        const result = await toggleCityLike('user-123', 1)

        expect(result.success).toBe(false)
        expect(result.action).toBe('added')
        expect(result.error).toBe('Insert failed')
        consoleSpy.mockRestore()
      })
    })

    describe('좋아요 제거 케이스', () => {
      test('기존 좋아요가 있을 때 DELETE 성공한다', async () => {
        // maybeSingle: 좋아요 존재
        mockSupabase.from().maybeSingle = jest.fn().mockResolvedValue({
          data: { id: 1, user_id: 'user-123', city_id: 1 },
          error: null,
        })
        // delete 성공
        mockSupabase.from().delete = jest.fn().mockReturnThis()
        mockSupabase.from().eq = jest.fn().mockResolvedValue({
          error: null,
        })

        const result = await toggleCityLike('user-123', 1)

        expect(result.success).toBe(true)
        expect(result.action).toBe('removed')
      })

      test('DELETE 성공 시 올바른 응답을 반환한다', async () => {
        mockSupabase.from().maybeSingle = jest.fn().mockResolvedValue({
          data: { id: 1 },
          error: null,
        })
        mockSupabase.from().eq = jest.fn().mockResolvedValue({
          error: null,
        })

        const result = await toggleCityLike('user-123', 1)

        expect(result).toEqual({ success: true, action: 'removed' })
      })

      test('DELETE 실패 시 success: false를 반환한다', async () => {
        mockSupabase.from().maybeSingle = jest.fn().mockResolvedValue({
          data: { id: 1 },
          error: null,
        })
        mockSupabase.from().eq = jest.fn().mockResolvedValue({
          error: { message: 'Delete failed' },
        })

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
        const result = await toggleCityLike('user-123', 1)

        expect(result.success).toBe(false)
        expect(result.action).toBe('removed')
        expect(result.error).toBe('Delete failed')
        consoleSpy.mockRestore()
      })
    })

    describe('에러 처리', () => {
      test('좋아요 존재 확인 쿼리 실패 시 에러를 반환한다', async () => {
        mockSupabase.from().maybeSingle = jest.fn().mockResolvedValue({
          data: null,
          error: { message: 'Check failed' },
        })

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
        const result = await toggleCityLike('user-123', 1)

        expect(result.success).toBe(false)
        expect(result.error).toBe('Check failed')
        consoleSpy.mockRestore()
      })

      test('에러 메시지가 error 필드에 포함된다', async () => {
        mockSupabase.from().maybeSingle = jest.fn().mockResolvedValue({
          data: null,
          error: { message: 'Specific error message' },
        })

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
        const result = await toggleCityLike('user-123', 1)

        expect(result.error).toBe('Specific error message')
        consoleSpy.mockRestore()
      })
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
  })
})
