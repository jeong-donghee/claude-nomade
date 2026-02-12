import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';
import { testUsers } from '../../fixtures/users';

test.describe('홈페이지 좋아요 기능', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('홈페이지 기본 요소 확인', async ({ page }) => {
    // http://localhost:3000으로 이동
    await homePage.navigate();

    // 홈페이지에 로고가 존재하는지 확인
    const logo = page.locator('a:has-text("한국 노마드 시티")');
    await expect(logo).toBeVisible();

    // 홈페이지에 도시 카드들이 존재하는지 확인 (좋아요 버튼이 있는 카드만)
    const cityCards = page.locator('div.bg-white.rounded-2xl').filter({
      has: page.locator('button:has-text("♡"), button:has-text("♥")')
    });

    // 최소 1개 이상의 도시 카드가 존재하는지 확인
    await expect(cityCards.first()).toBeVisible();
    const cityCardCount = await cityCards.count();
    expect(cityCardCount).toBeGreaterThan(0);

    console.log(`✓ 홈페이지에 ${cityCardCount}개의 도시 카드 발견`);
  });

  test('비로그인 사용자는 좋아요 클릭 시 로그인 알림을 받는다', async ({ page }) => {
    await homePage.navigate();

    // 첫 번째 도시 카드의 좋아요 버튼 찾기
    const cityCards = page.locator('div.bg-white.rounded-2xl').filter({
      has: page.locator('button:has-text("♡"), button:has-text("♥")')
    });
    const firstCityCard = cityCards.first();
    const likeButton = firstCityCard.locator('button', {
      has: page.locator('span:has-text("♡"), span:has-text("♥")')
    }).first();

    // alert 리스너 설정
    let alertMessage = '';
    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    // 좋아요 버튼 클릭
    await likeButton.click();

    // alert 메시지 확인
    await page.waitForTimeout(500);
    expect(alertMessage).toBe('로그인이 필요한 기능입니다.');

    console.log('✓ 비로그인 사용자에게 로그인 알림 표시 확인');
  });
});

// 로그인이 필요한 테스트들은 순차적으로 실행 (동일 계정 사용으로 인한 충돌 방지)
test.describe.serial('홈페이지 좋아요 기능 (로그인)', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('로그인 사용자는 좋아요를 누르고 새로고침 시 좋아요가 유지된다', async ({ page }) => {
    // 1. 로그인
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    // 테스트 사용자로 로그인 (환경 변수 또는 fixture에서 가져옴)
    const testUser = testUsers.validUser;
    await loginPage.login(testUser.email, testUser.password);

    // 로그인 성공 후 홈페이지로 이동 (자동 리다이렉트)
    await page.waitForURL('/');

    // 2. 홈페이지에서 첫 번째 도시 카드의 좋아요 버튼 찾기
    const cityCards = page.locator('div.bg-white.rounded-2xl').filter({
      has: page.locator('button:has-text("♡"), button:has-text("♥")')
    });
    const firstCityCard = cityCards.first();
    const likeButton = firstCityCard.locator('button', {
      has: page.locator('span:has-text("♡"), span:has-text("♥")')
    }).first();

    await expect(likeButton).toBeVisible();

    // 3. 초기 좋아요 개수 확인
    const initialLikeText = await likeButton.textContent();
    const initialLikeCount = extractLikeCount(initialLikeText || '');

    console.log(`초기 좋아요 개수: ${initialLikeCount}`);

    // 4. 좋아요 버튼 클릭
    await likeButton.click();

    // DB 업데이트 및 UI 반영 대기 (Optimistic UI + 백그라운드 DB 업데이트)
    await page.waitForTimeout(1500);

    const afterClickLikeText = await likeButton.textContent();
    const afterClickLikeCount = extractLikeCount(afterClickLikeText || '');

    console.log(`클릭 후 좋아요 개수: ${afterClickLikeCount}`);

    // 5. 좋아요 개수가 1 증가했는지 확인 (토글이므로 +1 또는 -1)
    const likeCountChanged = Math.abs(afterClickLikeCount - initialLikeCount) === 1;
    expect(likeCountChanged).toBe(true);

    // 예상 개수 계산 (증가 또는 감소)
    const expectedCount = afterClickLikeCount;

    // 6. 페이지 새로고침
    await page.reload();
    await page.waitForLoadState('networkidle');

    // 7. 새로고침 후 동일한 도시 카드의 좋아요 버튼 다시 찾기
    const reloadedCityCards = page.locator('div.bg-white.rounded-2xl').filter({
      has: page.locator('button:has-text("♡"), button:has-text("♥")')
    });
    const reloadedFirstCard = reloadedCityCards.first();
    const reloadedLikeButton = reloadedFirstCard.locator('button', {
      has: page.locator('span:has-text("♡"), span:has-text("♥")')
    }).first();

    await expect(reloadedLikeButton).toBeVisible();

    // 8. 새로고침 후 좋아요가 유지되는지 확인
    const persistedLikeText = await reloadedLikeButton.textContent();
    const persistedLikeCount = extractLikeCount(persistedLikeText || '');

    console.log(`새로고침 후 좋아요 개수: ${persistedLikeCount}`);

    expect(persistedLikeCount).toBe(expectedCount);

    // 9. 원래 상태로 되돌리기 (테스트 클린업)
    await reloadedLikeButton.click();
    await page.waitForTimeout(1500);

    const finalLikeText = await reloadedLikeButton.textContent();
    const finalLikeCount = extractLikeCount(finalLikeText || '');

    console.log(`좋아요 복원 후 개수: ${finalLikeCount}`);

    expect(finalLikeCount).toBe(initialLikeCount);

    console.log('✓ 좋아요 지속성 및 상태 복원 확인 완료');
  });
});

/**
 * 좋아요 버튼 텍스트에서 숫자 추출
 * 예: "♥ 5" -> 5, "♡ 3" -> 3, "♡ 0" -> 0
 */
function extractLikeCount(text: string): number {
  const match = text.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}
