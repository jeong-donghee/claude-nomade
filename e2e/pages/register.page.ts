import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * RegisterPage - 회원가입 페이지 Page Object
 */
export class RegisterPage extends BasePage {
  // 선택자 정의
  private readonly selectors = {
    nameInput: 'input[name="name"]',
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.error-message, [role="alert"]',
    loginLink: 'a[href="/login"]',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * 회원가입 페이지로 이동
   */
  async navigate() {
    await this.goto('/register');
    await this.waitForPageLoad();
  }

  /**
   * 이름 입력
   */
  async fillName(name: string) {
    await this.fill(this.selectors.nameInput, name);
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
   * 회원가입 버튼 클릭
   */
  async clickSubmit() {
    await this.click(this.selectors.submitButton);
  }

  /**
   * 회원가입 수행 (이름, 이메일, 비밀번호 입력 + 제출)
   */
  async register(name: string, email: string, password: string) {
    await this.fillName(name);
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
   * 로그인 링크 클릭
   */
  async goToLogin() {
    await this.click(this.selectors.loginLink);
  }

  /**
   * 회원가입 성공 후 이메일 인증 안내 페이지로 리다이렉트 확인
   */
  async expectRedirectToConfirmPending() {
    await expect(this.page).toHaveURL('/auth/confirm-pending');
  }
}
