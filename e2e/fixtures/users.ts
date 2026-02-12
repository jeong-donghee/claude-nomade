/**
 * 테스트용 사용자 데이터 픽스처
 */

export const testUsers = {
  /**
   * 유효한 테스트 사용자 (실제 Supabase 계정)
   */
  validUser: {
    name: 'Test User',
    email: 'dh.jeong@test.com',
    password: 'dhjeong1234',
  },

  /**
   * 관리자 사용자
   */
  adminUser: {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'Admin123!@#',
  },

  /**
   * 다른 테스트 사용자
   */
  anotherUser: {
    name: 'Another User',
    email: 'another@example.com',
    password: 'Another123!@#',
  },

  /**
   * 잘못된 이메일 형식
   */
  invalidEmailUser: {
    name: 'Invalid Email',
    email: 'invalid-email',
    password: 'Test123!@#',
  },

  /**
   * 짧은 비밀번호
   */
  weakPasswordUser: {
    name: 'Weak Password',
    email: 'weak@example.com',
    password: '123',
  },

  /**
   * 존재하지 않는 사용자
   */
  nonExistentUser: {
    email: 'nonexistent@example.com',
    password: 'NonExistent123!@#',
  },
};

/**
 * 랜덤 테스트 사용자 생성
 */
export function generateRandomUser() {
  const timestamp = Date.now();
  return {
    name: `Test User ${timestamp}`,
    email: `test-${timestamp}@example.com`,
    password: 'Test123!@#',
  };
}

/**
 * 테스트 사용자 이메일 목록
 * (테스트 종료 후 정리를 위해)
 */
export const testUserEmails: string[] = [];

/**
 * 테스트 사용자 등록
 */
export function registerTestUser(email: string) {
  if (!testUserEmails.includes(email)) {
    testUserEmails.push(email);
  }
}
