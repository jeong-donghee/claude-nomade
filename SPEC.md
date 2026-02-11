# 한국 노마드 시티 - MVP 실행 계획

> 데이터베이스 없이 더미 데이터로 진행. 각 Step은 독립적으로 빌드/배포 가능한 상태를 유지한다.

---

## [x] Step 1: 불필요한 섹션 및 네비게이션 제거 (MVP 정리)

**오버뷰:**
홈페이지와 Navbar에서 MVP에 불필요한 섹션과 링크를 제거한다. 홈에는 도시 찾기(PopularCitiesSection)만 남기고, Navbar에서는 홈/도시찾기/로그인 관련 링크만 유지한다. Footer도 MVP에 맞게 정리한다.

### 수정/개선 항목

- [x] `components/layout/NavbarClient.tsx`에서 `navLinks` 배열의 "밋업", "커뮤니티" 항목 제거. "홈"(`/`)과 "도시찾기"(`#cities` 또는 별도 페이지)만 유지
- [x] `components/layout/NavbarClient.tsx`에서 검색 버튼(돋보기 아이콘) 제거
- [x] `app/page.tsx` 홈페이지에서 다음 섹션 컴포넌트 import 및 렌더링 제거:
  - [x] `HeroSection` (이메일 수집 CTA)
  - [x] `MediaBadgeSection` (언론 배지)
  - [x] `ValuePropositionSection` (가치 제안)
  - [x] `TrendingCitySection` (트렌딩 도시)
  - [x] `MeetupSection` (밋업)
  - [x] `CommunitySection` (리뷰/Q&A)
  - [x] `StatsSection` (통계)
  - [x] `CityQuizSection` (퀴즈)
  - [x] `FinalCTASection` (최종 CTA)
- [x] `app/page.tsx`에 `PopularCitiesSection`만 남기되, 홈페이지로서 자연스럽게 보이도록 간단한 타이틀/소개 텍스트 추가
- [x] `components/layout/Footer.tsx`에서 MVP에 불필요한 링크(도시비교, 리뷰작성, 밋업, Q&A, 채팅방 등) 제거. 홈/도시찾기/로그인 관련 링크만 유지
- [x] `data/cities.ts`에서 사용하지 않는 데이터 export 제거: `trendingCities`, `meetups`, `recentReviews`, `popularQnAs`, `stats`, `mediaBadges`, `avatars`

### 검증/확인 항목

- [x] 홈페이지(`/`) 접속 시 도시 찾기 섹션만 표시되는지 확인
- [x] Navbar에 "홈", "도시찾기" 링크만 노출되는지 확인
- [x] 로그인 상태에 따라 Navbar에 로그인/회원가입 또는 이메일/로그아웃 버튼이 정상 표시되는지 확인
- [x] Footer에 불필요한 링크가 제거되었는지 확인
- [x] 모바일 햄버거 메뉴에서도 동일하게 정리되었는지 확인
- [x] 빌드 에러 없이 정상 컴파일되는지 확인 (`npm run build`)
- [x] 제거된 섹션 컴포넌트 파일은 삭제하지 않되, 홈에서 렌더링되지 않는지 확인

---

## [x] Step 2: 도시 찾기 페이지 분리 및 전체 도시 목록 수정

**오버뷰:**
현재 홈페이지 내 앵커(`#cities`)로 연결되는 도시 찾기를 독립 페이지(`/cities`)로 분리한다. "전체 도시 보기 (40개)" 버튼의 표기를 실제 더미 데이터 개수(10개)에 맞게 수정하고, 도시 목록이 `data/cities.ts`의 데이터만큼만 렌더링되도록 한다.

### 수정/개선 항목

- [x] `app/cities/page.tsx` 신규 페이지 생성. `PopularCitiesSection` 또는 `CityFilterClient`를 활용하여 도시 목록 표시
- [x] `components/layout/NavbarClient.tsx`의 "도시찾기" 링크 href를 `#cities`에서 `/cities`로 변경
- [x] `components/sections/PopularCitiesSection.tsx`에서 "전체 도시 보기 (40개)" 버튼 텍스트를 실제 `cities` 배열 길이에 맞게 동적으로 표시 (예: `전체 도시 보기 (${cities.length}개)`)
- [x] "전체 도시 보기" 버튼 클릭 시 `/cities` 페이지로 이동하도록 링크 연결
- [x] `/cities` 페이지에서 `data/cities.ts`의 `cities` 배열 데이터를 전부 표시 (현재 10개)
- [x] `/cities` 페이지에 기존 카테고리 필터(전체/대도시/해변/산/IT허브)와 정렬 드롭다운 UI 포함
- [x] 홈페이지(`/`)에서는 도시 일부(예: 상위 4~6개)만 미리보기로 표시하고, 나머지는 `/cities`에서 확인하도록 유도

### 검증/확인 항목

- [x] `/cities` 페이지 접속 시 10개 도시가 모두 표시되는지 확인
- [x] Navbar "도시찾기" 클릭 시 `/cities`로 이동하는지 확인
- [x] "전체 도시 보기" 버튼에 실제 데이터 개수(10개)가 표시되는지 확인
- [x] "전체 도시 보기" 버튼 클릭 시 `/cities` 페이지로 이동하는지 확인
- [x] 홈페이지에 도시 미리보기가 적절히 표시되는지 확인
- [x] 카테고리 필터 및 정렬 드롭다운 UI가 `/cities` 페이지에 렌더링되는지 확인
- [x] 빌드 에러 없이 정상 컴파일되는지 확인

---

## [x] Step 3: 도시 찾기 카테고리 필터 및 정렬 기능 구현

**오버뷰:**
현재 UI만 존재하고 실제 동작하지 않는 카테고리 필터와 정렬 기능을 구현한다. `CityFilterClient.tsx`에서 필터/정렬 상태 변경 시 `data/cities.ts`의 데이터를 실제로 필터링/정렬하여 표시한다.

### 수정/개선 항목

- [x] `components/sections/CityFilterClient.tsx`에서 카테고리 필터 로직 구현: 선택된 카테고리(`전체`, `대도시`, `해변`, `산`, `IT허브`)에 따라 `cities` 배열을 `category` 필드로 필터링
- [x] 정렬 로직 구현: 선택된 정렬 기준에 따라 배열 정렬
  - "인기순": `rank` 오름차순
  - "평점순": `rating` 내림차순
  - "생활비 낮은순": `monthlyCost` 오름차순 (문자열에서 숫자 파싱 필요)
  - "최신순": 기본 순서 유지 또는 별도 필드 추가
- [x] 필터와 정렬이 동시에 적용되도록 구현 (필터 후 정렬)
- [x] 필터 결과가 0개일 때 "조건에 맞는 도시가 없습니다" 안내 메시지 표시
- [x] 현재 선택된 필터/정렬 상태가 UI에 시각적으로 표시되도록 확인 (활성 버튼 스타일)

### 검증/확인 항목

- [x] "대도시" 필터 선택 시 서울, 대구만 표시되는지 확인
- [x] "해변" 필터 선택 시 부산, 제주, 강릉, 인천, 여수만 표시되는지 확인
- [x] "산" 필터 선택 시 속초, 평주만 표시되는지 확인
- [x] "IT허브" 필터 선택 시 대전만 표시되는지 확인
- [x] "전체" 필터 선택 시 10개 모두 표시되는지 확인
- [x] "평점순" 정렬 시 rating 높은 순서로 정렬되는지 확인
- [x] "생활비 낮은순" 정렬 시 비용 적은 순서로 정렬되는지 확인
- [x] 카테고리 필터 + 정렬 동시 적용이 정상 동작하는지 확인
- [x] 빌드 에러 없이 정상 컴파일되는지 확인

---

## [x] Step 4: 도시명 검색 기능 추가

**오버뷰:**
도시 찾기 페이지(`/cities`)에 도시명 검색 기능을 추가한다. 사용자가 한글 또는 영문 도시명을 입력하면 실시간으로 목록이 필터링된다. 기존 카테고리 필터/정렬과 함께 동작해야 한다.

### 수정/개선 항목

- [x] `components/sections/CityFilterClient.tsx` 또는 `/cities` 페이지에 검색 입력 필드 추가 (텍스트 Input + 돋보기 아이콘)
- [x] 검색 상태(state) 추가 및 입력 시 실시간 필터링 구현
- [x] 한글 도시명(`name` 필드)과 영문 도시명(`nameEn` 필드) 모두에서 검색 가능하도록 구현 (대소문자 무시)
- [x] 검색어 + 카테고리 필터 + 정렬이 동시에 적용되도록 구현 (검색 → 필터 → 정렬 순서)
- [x] 검색 결과가 0개일 때 "검색 결과가 없습니다" 안내 메시지 표시
- [x] 검색어 초기화(X 버튼 또는 입력 필드 클리어) 기능 추가

### 검증/확인 항목

- [x] "서울" 검색 시 서울만 표시되는지 확인
- [x] "seoul" 검색 시 서울이 표시되는지 확인 (영문 검색)
- [x] "부" 검색 시 부산이 포함되어 표시되는지 확인 (부분 검색)
- [x] "Bu" 검색 시 부산(Busan)이 표시되는지 확인 (영문 부분 검색)
- [x] 검색어 + 카테고리 필터 조합이 정상 동작하는지 확인 (예: "해변" 필터 + "부" 검색 → 부산만 표시)
- [x] 검색 결과가 없을 때 안내 메시지가 표시되는지 확인
- [x] 검색어 초기화 시 전체 목록이 다시 표시되는지 확인
- [x] 빌드 에러 없이 정상 컴파일되는지 확인

---

## [x] Step 5: 도시 상세 보기 페이지 구현

**오버뷰:**
각 도시 카드의 "상세보기" 버튼 클릭 시 이동할 도시 상세 페이지(`/cities/[id]`)를 구현한다. 더미 데이터를 활용하여 도시의 상세 정보, 노마드 관련 지표, 추천 카페/코워킹스페이스 등을 표시한다.

### 수정/개선 항목

- [x] `app/cities/[id]/page.tsx` 동적 라우트 페이지 생성
- [x] `data/cities.ts`에 도시 상세 더미 데이터 추가. 각 도시별로 다음 항목 포함:
  - [x] 도시 소개 텍스트 (2~3문장)
  - [x] 장점/단점 목록 (각 3개씩)
  - [x] 추천 카페/코워킹스페이스 (각 2~3개, 이름/위치/특징)
  - [x] 월별 기후 정보 (간단한 텍스트)
  - [x] 교통 정보 (간단한 텍스트)
  - [x] 기존 데이터 활용: 생활비, 인터넷 속도, 추천률, 월세, 카페 밀도
- [x] 상세 페이지 레이아웃 구현:
  - [x] 상단: 도시명(한글/영문), 카테고리 배지, 평점, 추천률
  - [x] 핵심 지표 카드 영역: 월 생활비, 인터넷 속도, 월세, 카페 밀도
  - [x] 도시 소개 섹션
  - [x] 장점/단점 섹션
  - [x] 추천 장소 섹션 (카페/코워킹스페이스)
  - [x] 기후 및 교통 정보 섹션
- [x] 도시 카드의 "상세보기" 버튼에 `/cities/[id]` 링크 연결 (`PopularCitiesSection.tsx` 또는 `CityFilterClient.tsx` 수정)
- [x] 존재하지 않는 도시 ID 접근 시 404 또는 적절한 안내 페이지 표시
- [x] 상세 페이지에서 도시 목록(`/cities`)으로 돌아가는 "← 목록으로" 버튼 추가

### 검증/확인 항목

- [x] 도시 카드 "상세보기" 클릭 시 해당 도시 상세 페이지로 이동하는지 확인
- [x] 10개 도시 각각의 상세 페이지(`/cities/1` ~ `/cities/10`)가 정상 렌더링되는지 확인
- [x] 상세 페이지에 더미 데이터(소개, 장단점, 추천 장소 등)가 모두 표시되는지 확인
- [x] 핵심 지표(생활비, 인터넷 속도 등)가 기존 데이터와 일치하는지 확인
- [x] 존재하지 않는 ID(예: `/cities/99`) 접근 시 적절한 처리가 되는지 확인
- [x] "← 목록으로" 버튼 클릭 시 `/cities`로 이동하는지 확인
- [x] 모바일/태블릿 반응형 레이아웃이 정상인지 확인
- [x] 빌드 에러 없이 정상 컴파일되는지 확인

---

## [x] Step 6: 도시 좋아요 데이터 및 상태 관리 기반 구축

**오버뷰:**
각 도시에 좋아요 기능을 추가하기 위한 데이터 및 상태 관리 기반을 구축한다. `CityCard` 인터페이스에 `likes` 필드를 추가하고, 사용자의 좋아요 상태를 localStorage로 관리하는 커스텀 훅을 생성한다.

### 수정/개선 항목

- [x] `data/cities.ts`에서 `CityCard` 인터페이스에 `likes: number` 필드 추가
- [x] 각 도시 더미 데이터에 초기 좋아요 수 설정 (임의의 값)
- [x] `data/cities.ts`의 `citySortOptions`에 `{ value: "likes", label: "좋아요순" }` 추가
- [x] `hooks/useCityLikes.ts` (신규) 생성 — localStorage 기반 좋아요 상태 관리 커스텀 훅
  - `likedCityIds`: 사용자가 좋아요한 도시 ID 목록
  - `likeCounts`: 도시별 좋아요 수 (초기값은 더미 데이터 기반, 이후 동적 업데이트)
  - `toggleLike(cityId)`: 좋아요 토글 및 카운트 증감
  - `isLiked(cityId)`: 특정 도시 좋아요 여부 확인
  - `getLikeCount(cityId)`: 특정 도시 좋아요 수 반환

### 검증/확인 항목

- [x] `CityCard` 타입에 `likes` 필드가 추가되었는지 확인
- [x] 더미 데이터 각 도시에 좋아요 수가 설정되었는지 확인
- [x] `useCityLikes` 훅이 정상 동작하는지 확인 (토글, 저장/복원)
- [x] 페이지 새로고침 후에도 좋아요 상태가 유지되는지 확인
- [x] `npm run build` 통과

---

## [x] Step 7: 도시 카드 및 상세 페이지에 좋아요 버튼 UI 추가

**오버뷰:**
도시 카드와 상세 페이지에 하트 아이콘 좋아요 버튼과 좋아요 수를 표시한다. 사용자가 하트를 클릭하면 좋아요가 토글된다.

### 수정/개선 항목

- [x] `components/sections/CityCard.tsx`에 하트 아이콘(채워진/빈) + 좋아요 수 표시 UI 추가
- [x] `CityCard` Props에 `likeCount`, `isLiked`, `onToggleLike` 추가
- [x] `components/sections/CityFilterClient.tsx`에서 `useCityLikes` 훅 연동, `CityCard`에 좋아요 props 전달
- [x] `components/sections/PopularCitiesSection.tsx`를 클라이언트 컴포넌트로 전환 또는 래퍼 생성하여 `useCityLikes` 훅 연동
- [x] `app/cities/[id]/page.tsx` 상세 페이지에 좋아요 버튼 추가 (클라이언트 컴포넌트 분리 필요)

### 검증/확인 항목

- [x] 도시 카드에 하트 아이콘과 좋아요 수가 표시되는지 확인
- [x] 하트 클릭 시 좋아요가 토글되고 수가 즉시 반영되는지 확인
- [x] `/cities` 페이지, 홈 미리보기, 상세 페이지 모두에 적용되었는지 확인
- [x] 좋아요 상태가 페이지 이동 간에 유지되는지 확인
- [x] 모바일/태블릿 반응형이 정상인지 확인
- [x] `npm run build` 통과

---

## [x] Step 8: 좋아요순 정렬 기능 구현

**오버뷰:**
도시 찾기 페이지(`/cities`)의 정렬 드롭다운에서 "좋아요순" 옵션을 연동하여 좋아요 수 기준 내림차순 정렬을 구현한다.

### 수정/개선 항목

- [x] `components/sections/CityFilterClient.tsx`의 `sortCities` 함수에 `"likes"` 케이스 추가
- [x] `useCityLikes` 훅의 `getLikeCount` 활용하여 좋아요 수 기준 정렬
- [x] `useMemo` 의존성 배열에 `likeCounts` 추가하여 좋아요 변경 시 정렬이 즉시 반영되도록 구현

### 검증/확인 항목

- [x] 정렬 드롭다운에 "좋아요순" 옵션이 표시되는지 확인
- [x] "좋아요순" 선택 시 좋아요 수 내림차순으로 정렬되는지 확인
- [x] 좋아요 토글 후 정렬이 즉시 반영되는지 확인
- [x] "좋아요순" + 카테고리 필터 + 검색어 조합이 정상 동작하는지 확인
- [x] 기존 정렬 옵션(인기순, 평점순 등)이 정상 동작하는지 확인
- [x] `npm run build` 통과

---

## [x] Step 9: 데이터베이스 테이블 생성

**오버뷰:**
Supabase에 `cities` 테이블과 `city_likes` 테이블을 생성한다. 기존 `CityCard` + `CityDetail` 인터페이스 구조를 DB 스키마로 매핑한다.

### 수정/개선 항목

- [x] Supabase에서 `cities` 테이블 생성
  - 컬럼: `id` (int8, PK), `rank` (int2), `name` (text), `name_en` (text), `category` (text), `rating` (numeric), `recommend_rate` (int2), `monthly_cost` (int4), `internet_speed` (int4), `monthly_rent` (int4), `cafe_density` (int2), `bg_color` (text), `description` (text), `pros` (jsonb), `cons` (jsonb), `recommended_places` (jsonb), `climate` (text), `transport` (text), `created_at` (timestamptz)
- [x] `city_likes` 테이블 생성
  - 컬럼: `id` (uuid, PK), `user_id` (uuid, FK → auth.users), `city_id` (int8, FK → cities), `created_at` (timestamptz)
  - `user_id + city_id` 유니크 제약 추가 (한 사용자는 한 도시에 좋아요 1회만)
- [x] `cities` 테이블에 RLS(Row Level Security) 활성화
  - 읽기: 모든 사용자(anon, authenticated) 허용
  - 쓰기: 차단 (관리자만 가능)
- [x] `city_likes` 테이블에 RLS 활성화
  - `SELECT`: 모든 사용자 허용
  - `INSERT`: `auth.uid() = user_id` (본인만 추가 가능)
  - `DELETE`: `auth.uid() = user_id` (본인만 삭제 가능)
- [x] Supabase advisor 보안 검사 실행하여 RLS 누락 확인

### 검증/확인 항목

- [x] Supabase 대시보드에서 `cities`, `city_likes` 테이블이 정상 생성되었는지 확인
- [x] RLS 정책이 올바르게 적용되었는지 확인
- [x] 비로그인 상태에서 `cities` 테이블 읽기가 가능한지 확인
- [x] 비로그인 상태에서 `city_likes` 테이블 쓰기가 차단되는지 확인

---

## [x] Step 10: 시드 데이터 삽입

**오버뷰:**
`data/cities.ts`의 더미 데이터 10개를 `cities` 테이블에 INSERT한다. 기존 프론트엔드 데이터와 동일한 값을 유지한다.

### 수정/개선 항목

- [x] `data/cities.ts`의 `cities` 배열 (10개 도시 기본 정보)을 SQL INSERT 문으로 변환하여 `cities` 테이블에 삽입
- [x] `data/cities.ts`의 `cityDetails` 객체 (10개 도시 상세 정보)를 동일 행의 해당 컬럼에 병합 삽입
- [x] 삽입된 데이터의 `id` 값이 기존 더미 데이터의 `id`(1~10)와 일치하는지 확인

### 검증/확인 항목

- [x] `SELECT count(*) FROM cities` 결과가 10인지 확인
- [x] `SELECT * FROM cities WHERE id = 1`의 `name`이 기존 더미 데이터와 일치하는지 확인
- [x] `pros`, `cons`, `recommended_places` JSONB 컬럼이 올바른 배열 형태인지 확인

---

## [x] Step 11: Supabase TypeScript 타입 생성

**오버뷰:**
Supabase DB 스키마 기반으로 TypeScript 타입을 자동 생성하여 프로젝트에서 타입 안전한 쿼리를 작성할 수 있도록 한다.

### 수정/개선 항목

- [x] Supabase CLI 또는 MCP로 타입 생성
- [x] 생성된 타입을 `lib/database.types.ts` 파일로 저장
- [x] `utils/supabase/client.ts`와 `utils/supabase/server.ts`에서 `createClient<Database>()` 형태로 제네릭 타입 적용

### 검증/확인 항목

- [x] `lib/database.types.ts` 파일에 `cities`, `city_likes` 테이블 타입이 포함되어 있는지 확인
- [x] `npm run build` 통과

---

## [x] Step 12: 도시 데이터 fetching 유틸리티 생성

**오버뷰:**
Supabase에서 도시 데이터를 조회하는 서버/클라이언트 유틸리티 함수를 생성한다. 기존 `data/cities.ts` 직접 import를 이 함수들로 점진적으로 교체할 수 있도록 한다.

### 수정/개선 항목

- [x] `lib/queries/cities.ts` (신규) — 서버 컴포넌트용 함수 작성
  - `getCities()`: 전체 도시 목록 조회
  - `getCityById(id: number)`: 단일 도시 조회 (기본 + 상세 정보)
  - `getCityLikesCount(cityId: number)`: 특정 도시의 좋아요 수
  - `getCitiesWithLikes()`: 도시 목록 + 각 도시별 좋아요 수 조회
- [x] 각 함수에서 `utils/supabase/server.ts`의 `createClient()` 사용
- [x] 반환 타입을 기존 `CityCard`, `CityDetail` 인터페이스와 호환되도록 매핑 (DB snake_case → 프론트 camelCase 변환)

### 검증/확인 항목

- [x] `getCities()` 호출 시 10개 도시 배열이 반환되는지 확인
- [x] `getCityById(1)` 호출 시 서울 데이터가 반환되는지 확인
- [x] 반환 타입이 기존 `CityCard` 인터페이스와 호환되는지 확인
- [x] `npm run build` 통과

---

## [x] Step 13: 도시 목록 페이지 DB 연동

**오버뷰:**
`/cities` 페이지와 홈페이지의 도시 목록 데이터 소스를 `data/cities.ts` → Supabase 쿼리로 전환한다.

### 수정/개선 항목

- [x] `app/cities/page.tsx` — `cities` import 제거, `getCities()` 또는 `getCitiesWithLikes()`로 서버에서 fetch
- [x] `components/sections/CityFilterClient.tsx` — `data/cities.ts`에서 직접 import하던 `cities`를 props로 받도록 변경
- [x] `app/page.tsx` (홈페이지) — `PopularCitiesSection`에 서버에서 fetch한 도시 데이터 전달
- [x] `components/sections/PopularCitiesSection.tsx` — `data/cities.ts` import 제거, props로 도시 데이터 수신

### 검증/확인 항목

- [x] `/cities` 페이지에서 DB의 10개 도시가 정상 표시되는지 확인
- [x] 홈페이지 도시 미리보기가 정상 표시되는지 확인
- [x] 카테고리 필터, 정렬, 검색 기능이 기존과 동일하게 동작하는지 확인
- [x] `npm run build` 통과

---

## [x] Step 14: 도시 상세 페이지 DB 연동

**오버뷰:**
도시 상세 페이지(`/cities/[id]`)의 데이터 소스를 `data/cities.ts` → Supabase 단일 쿼리로 전환한다.

### 수정/개선 항목

- [x] `app/cities/[id]/page.tsx` — `cities`, `cityDetails` import 제거, `getCityById(id)`로 서버에서 fetch
- [x] 존재하지 않는 도시 ID 접근 시 기존과 동일하게 `notFound()` 처리 유지

### 검증/확인 항목

- [x] `/cities/1` ~ `/cities/10` 각 페이지가 정상 렌더링되는지 확인
- [x] 상세 정보(소개, 장단점, 추천 장소, 기후, 교통)가 기존과 동일하게 표시되는지 확인
- [x] `/cities/99` 접근 시 404 처리되는지 확인
- [x] `npm run build` 통과

---

## [x] Step 15: 좋아요 기능 DB 연동

**오버뷰:**
좋아요 상태 관리를 localStorage 기반 → Supabase `city_likes` 테이블 기반으로 전환한다. 로그인 사용자만 좋아요 가능하며, 비로그인 사용자에게는 로그인 유도 처리를 한다.

### 수정/개선 항목

- [x] `hooks/useCityLikes.ts` 리팩토링 — localStorage → Supabase 쿼리(`city_likes` INSERT/DELETE)로 교체
  - `toggleLike`: `city_likes` 테이블에 INSERT (좋아요) 또는 DELETE (해제)
  - `isLiked`: 현재 로그인 사용자의 `city_likes` 행 존재 여부 확인
  - `getLikeCount`: `city_likes` 테이블에서 해당 도시의 COUNT 조회
- [x] Optimistic UI 적용 — 즉시 UI 반영 후 백그라운드 DB 반영, 실패 시 롤백
- [x] 비로그인 사용자 좋아요 클릭 시 로그인 페이지로 이동 또는 안내 메시지 표시
- [x] 좋아요 수 표시를 DB 기반 COUNT로 전환

### 검증/확인 항목

- [x] 로그인 후 좋아요 클릭 시 `city_likes` 테이블에 행이 추가되는지 확인
- [x] 좋아요 해제 시 `city_likes` 테이블에서 행이 삭제되는지 확인
- [x] 페이지 새로고침 후에도 좋아요 상태가 유지되는지 확인 (DB 기반)
- [x] 다른 기기/브라우저에서 로그인해도 좋아요 상태가 동기화되는지 확인
- [x] 비로그인 상태에서 좋아요 클릭 시 적절한 안내가 표시되는지 확인
- [x] 좋아요순 정렬이 DB 기반 좋아요 수로 정상 동작하는지 확인
- [x] `npm run build` 통과

---

## [x] Step 16: 더미 데이터 정리 및 최종 검증

**오버뷰:**
모든 데이터 소스가 Supabase로 전환된 후, 더 이상 사용되지 않는 `data/cities.ts`의 더미 데이터를 정리한다.

### 수정/개선 항목

- [x] `data/cities.ts`에서 `cities` 배열과 `cityDetails` 객체 제거 (타입 정의는 유지하거나 `lib/types.ts`로 이동)
- [x] 프로젝트 전체에서 `data/cities.ts`의 데이터 import가 남아있지 않은지 확인
- [x] Supabase advisor 보안/성능 검사 최종 실행

### 검증/확인 항목

- [x] `data/cities.ts`에서 더미 데이터 제거 후에도 모든 페이지가 정상 동작하는지 확인
- [x] `npm run build` 통과
- [x] Supabase advisor 보안 경고 없음 확인

---

## 요약

| Step | 내용 | 핵심 변경 파일 |
|------|------|---------------|
| **1** | MVP 외 섹션/링크 제거 | `page.tsx`, `NavbarClient.tsx`, `Footer.tsx`, `cities.ts` |
| **2** | 도시 찾기 독립 페이지 + 도시 수 표기 수정 | `app/cities/page.tsx`(신규), `NavbarClient.tsx`, `PopularCitiesSection.tsx` |
| **3** | 카테고리 필터 및 정렬 기능 구현 | `CityFilterClient.tsx` |
| **4** | 도시명 검색 기능 추가 | `CityFilterClient.tsx` |
| **5** | 도시 상세 보기 페이지 | `app/cities/[id]/page.tsx`(신규), `cities.ts` |
| **6** | 도시 좋아요 데이터 및 상태 관리 기반 구축 | `cities.ts`, `hooks/useCityLikes.ts`(신규) |
| **7** | 도시 카드 및 상세 페이지에 좋아요 버튼 UI 추가 | `CityCard.tsx`, `CityFilterClient.tsx`, `PopularCitiesSection.tsx`, `cities/[id]/page.tsx` |
| **8** | 좋아요순 정렬 기능 구현 | `CityFilterClient.tsx` |
| **9** | 데이터베이스 테이블 생성 (Supabase) | Supabase DB 스키마 |
| **10** | 시드 데이터 삽입 | Supabase DB |
| **11** | Supabase TypeScript 타입 생성 | `lib/database.types.ts`(신규) |
| **12** | 도시 데이터 fetching 유틸리티 생성 | `lib/queries/cities.ts`(신규) |
| **13** | 도시 목록 페이지 DB 연동 | `app/cities/page.tsx`, `CityFilterClient.tsx`, `PopularCitiesSection.tsx` |
| **14** | 도시 상세 페이지 DB 연동 | `app/cities/[id]/page.tsx` |
| **15** | 좋아요 기능 DB 연동 | `hooks/useCityLikes.ts` |
| **16** | 더미 데이터 정리 및 최종 검증 | `data/cities.ts` |
