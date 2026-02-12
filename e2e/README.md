# E2E 테스트 가이드

이 디렉토리는 Playwright를 사용한 End-to-End 테스트를 포함합니다.

## 📂 디렉토리 구조

```
e2e/
├── tests/              # 실제 테스트 파일들
│   ├── auth/          # 인증 관련 테스트
│   ├── cities/        # 도시 관련 테스트
│   ├── likes/         # 좋아요 관련 테스트
│   ├── navigation/    # 네비게이션 테스트
│   └── integration/   # 통합 시나리오 테스트
├── pages/             # Page Object Model (POM)
├── fixtures/          # 테스트 데이터
├── utils/             # 헬퍼 함수
└── config/            # 설정 파일
```

## 🚀 테스트 실행 방법

```bash
# 모든 테스트 실행
npm run test:e2e

# UI 모드로 실행
npm run test:e2e:ui

# 특정 브라우저에서 실행
npm run test:e2e:chrome

# 디버그 모드
npm run test:e2e:debug

# 모바일 테스트
npm run test:e2e:mobile

# 리포트 보기
npm run test:e2e:report
```

## 📝 테스트 작성 규칙

1. **파일명**: `{feature}.spec.ts` 형식 사용
2. **AAA 패턴**: Arrange-Act-Assert 패턴 준수
3. **Page Object 사용**: 재사용성을 위해 POM 패턴 사용
4. **명확한 설명**: 테스트 설명은 한글로 작성

## 🎯 커버리지 목표

- [ ] 인증 플로우 (로그인, 회원가입, 로그아웃)
- [ ] 도시 목록 조회 (검색, 필터, 정렬)
- [ ] 도시 상세 페이지
- [ ] 좋아요 기능
- [ ] 네비게이션
- [ ] 모바일 반응형
