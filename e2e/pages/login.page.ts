import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * LoginPage - 로그인 페이지 Page Object
 */
export class LoginPage extends BasePage {
  // 선택자 정의
  private readonly selectors = {
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.error-message, [role="alert"]',
    registerLink: 'a[href="/register"]',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * 로그인 페이지로 이동
   */
  async navigate() {
    await this.goto('/login');
    await this.waitForPageLoad();
  }

  /**
   * 이메일 입력
   */
  async fillEmail(email: string) {
    await this.fill(this.selectors.emailInput, email);
  }

  /**
   * 비밀번호 입력
   */
  async fillPassword(password: string) {
    await this.fill(this.selectors.passwordInput, password);
  }

  /**
   * 로그인 버튼 클릭
   */
  async clickSubmit() {
    await this.click(this.selectors.submitButton);
  }

  /**
   * 로그인 수행 (이메일, 비밀번호 입력 + 제출)
   */
  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSubmit();
  }

  /**
   * 에러 메시지 가져오기
   */
  async getErrorMessage(): Promise<string | null> {
    await this.waitForSelector(this.selectors.errorMessage);
    return await this.getText(this.selectors.errorMessage);
  }

  /**
   * 에러 메시지가 표시되는지 확인
   */
  async hasErrorMessage(): Promise<boolean> {
    return await this.isVisible(this.selectors.errorMessage);
  }

  /**
   * 회원가입 링크 클릭
   */
  async goToRegister() {
    await this.click(this.selectors.registerLink);
  }

  /**
   * 로그인 성공 후 홈페이지로 리다이렉트 확인
   */
  async expectRedirectToHome() {
    await expect(this.page).toHaveURL('/');
  }
}
