import { Page } from '@playwright/test';

/**
 * 대기 관련 헬퍼 함수
 */

/**
 * 특정 시간 동안 대기
 */
export async function wait(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 네트워크가 idle 상태가 될 때까지 대기
 */
export async function waitForNetworkIdle(page: Page, timeout = 30000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * DOM이 로드될 때까지 대기
 */
export async function waitForDOMContentLoaded(page: Page, timeout = 30000): Promise<void> {
  await page.waitForLoadState('domcontentloaded', { timeout });
}

/**
 * 특정 선택자가 나타날 때까지 대기
 */
export async function waitForSelector(
  page: Page,
  selector: string,
  timeout = 5000
): Promise<void> {
  await page.waitForSelector(selector, { timeout, state: 'visible' });
}

/**
 * 특정 선택자가 사라질 때까지 대기
 */
export async function waitForSelectorToDisappear(
  page: Page,
  selector: string,
  timeout = 5000
): Promise<void> {
  await page.waitForSelector(selector, { timeout, state: 'hidden' });
}

/**
 * 특정 텍스트가 나타날 때까지 대기
 */
export async function waitForText(
  page: Page,
  text: string,
  timeout = 5000
): Promise<void> {
  await page.waitForSelector(`text=${text}`, { timeout, state: 'visible' });
}

/**
 * 특정 URL로 네비게이션 될 때까지 대기
 */
export async function waitForURL(
  page: Page,
  url: string | RegExp,
  timeout = 5000
): Promise<void> {
  await page.waitForURL(url, { timeout });
}

/**
 * API 응답 대기
 */
export async function waitForResponse(
  page: Page,
  urlPattern: string | RegExp,
  timeout = 5000
): Promise<void> {
  await page.waitForResponse(urlPattern, { timeout });
}

/**
 * 로딩 스피너가 사라질 때까지 대기
 */
export async function waitForLoading(page: Page, timeout = 10000): Promise<void> {
  const loadingSelectors = [
    '.loading',
    '.spinner',
    '[data-testid="loading"]',
    '[aria-busy="true"]',
  ];

  for (const selector of loadingSelectors) {
    const element = page.locator(selector);
    if (await element.isVisible()) {
      await element.waitFor({ state: 'hidden', timeout });
    }
  }
}
