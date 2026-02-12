import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

/**
 * 인증 관련 헬퍼 함수
 */

/**
 * API를 통한 빠른 로그인 (UI를 거치지 않음)
 * 테스트 속도 향상을 위해 사용
 */
export async function loginViaAPI(email: string, password: string): Promise<any> {
  const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseURL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
}

/**
 * UI를 통한 로그인
 * 로그인 플로우 자체를 테스트할 때 사용
 */
export async function loginViaUI(page: Page, email: string, password: string) {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(email, password);
  await page.waitForLoadState('networkidle');
}

/**
 * 인증 상태 저장
 * 다른 테스트에서 재사용하기 위해 로그인 상태를 파일로 저장
 */
export async function saveAuthState(page: Page, path = '.auth/user.json') {
  await page.context().storageState({ path });
}

/**
 * 인증 상태 로드
 * 저장된 로그인 상태를 로드하여 로그인 과정 스킵
 */
export async function loadAuthState(path = '.auth/user.json') {
  return path;
}

/**
 * 로그아웃
 */
export async function logout(page: Page) {
  // 로그아웃 버튼 클릭 또는 API 호출
  await page.click('button:has-text("로그아웃")');
  await page.waitForLoadState('networkidle');
}

/**
 * 테스트 사용자 생성 (E2E 테스트용)
 */
export async function createTestUser(userData: {
  email: string;
  password: string;
  name: string;
}): Promise<any> {
  // Supabase API나 서버 액션을 통해 테스트 사용자 생성
  // 실제 구현은 백엔드 API에 따라 달라짐
  return userData;
}

/**
 * 테스트 사용자 삭제
 */
export async function deleteTestUser(email: string): Promise<void> {
  // 테스트 종료 후 생성한 사용자 삭제
  // 실제 구현은 백엔드 API에 따라 달라짐
}
