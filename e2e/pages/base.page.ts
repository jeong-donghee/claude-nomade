import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - 모든 페이지 객체의 기본 클래스
 * 공통 메서드와 유틸리티를 제공합니다.
 */
export class BasePage {
  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
  }

  /**
   * 특정 경로로 이동
   */
  async goto(path: string) {
    await this.page.goto(path);
  }

  /**
   * 페이지 로드 완료 대기
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * DOM 로드 완료 대기
   */
  async waitForDOMContentLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * 특정 선택자가 보일 때까지 대기
   */
  async waitForSelector(selector: string, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * 특정 텍스트를 포함하는 요소가 보일 때까지 대기
   */
  async waitForText(text: string, timeout = 5000) {
    await this.page.waitForSelector(`text=${text}`, { timeout });
  }

  /**
   * 페이지 제목 가져오기
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * 현재 URL 가져오기
   */
  getCurrentURL(): string {
    return this.page.url();
  }

  /**
   * 특정 URL로 리다이렉트 되었는지 확인
   */
  async expectURL(expectedPath: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath));
  }

  /**
   * 요소 클릭
   */
  async click(selector: string) {
    await this.page.click(selector);
  }

  /**
   * 입력 필드에 텍스트 입력
   */
  async fill(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  /**
   * 요소의 텍스트 내용 가져오기
   */
  async getText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  /**
   * 요소가 보이는지 확인
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  /**
   * 요소가 활성화되어 있는지 확인
   */
  async isEnabled(selector: string): Promise<boolean> {
    return await this.page.isEnabled(selector);
  }

  /**
   * 스크린샷 촬영
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  /**
   * 페이지 새로고침
   */
  async reload() {
    await this.page.reload();
  }

  /**
   * 뒤로가기
   */
  async goBack() {
    await this.page.goBack();
  }

  /**
   * 앞으로가기
   */
  async goForward() {
    await this.page.goForward();
  }

  /**
   * 로케이터 가져오기
   */
  getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  /**
   * Role로 요소 찾기
   */
  getByRole(role: any, options?: any): Locator {
    return this.page.getByRole(role, options);
  }

  /**
   * 텍스트로 요소 찾기
   */
  getByText(text: string | RegExp): Locator {
    return this.page.getByText(text);
  }

  /**
   * Placeholder로 요소 찾기
   */
  getByPlaceholder(text: string | RegExp): Locator {
    return this.page.getByPlaceholder(text);
  }

  /**
   * Label로 요소 찾기
   */
  getByLabel(text: string | RegExp): Locator {
    return this.page.getByLabel(text);
  }

  /**
   * Test ID로 요소 찾기
   */
  getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }
}
