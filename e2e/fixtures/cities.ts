/**
 * 테스트용 도시 데이터 픽스처
 */

export const testCities = {
  seoul: {
    id: 1,
    name: '서울',
    nameEn: 'Seoul',
    category: '대도시',
  },
  busan: {
    id: 2,
    name: '부산',
    nameEn: 'Busan',
    category: '해변',
  },
  jeju: {
    id: 3,
    name: '제주',
    nameEn: 'Jeju',
    category: '해변',
  },
};

/**
 * 카테고리 목록
 */
export const categories = ['전체', '대도시', '해변', '산', 'IT허브'] as const;

/**
 * 정렬 옵션
 */
export const sortOptions = [
  { value: 'popular', label: '인기순' },
  { value: 'rating', label: '평점순' },
  { value: 'cost', label: '생활비 낮은순' },
  { value: 'likes', label: '좋아요순' },
  { value: 'latest', label: '최신순' },
] as const;
