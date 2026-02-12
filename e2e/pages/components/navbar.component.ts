import { Page, Locator } from '@playwright/test';

/**
 * NavbarComponent - 네비게이션 바 컴포넌트 Page Object
 */
export class NavbarComponent {
  readonly page: Page;

  // 선택자 정의
  private readonly selectors = {
    navbar: 'nav',
    logo: 'a:has-text("한국 노마드 시티")',
    homeLink: 'a[href="/"]',
    citiesLink: 'a[href="/cities"]',
    loginLink: 'a[href="/login"]',
    registerButton: 'a[href="/register"]',
    userEmail: 'span:has-text("@")',
    logoutButton: 'button:has-text("로그아웃")',
    hamburgerButton: 'button[aria-label="메뉴 토글"]',
    mobileMenu: '.mobile-menu',
  };

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * 네비게이션 바 가져오기
   */
  getNavbar(): Locator {
    return this.page.locator(this.selectors.navbar);
  }

  /**
   * 네비게이션 바가 표시되는지 확인
   */
  async isVisible(): Promise<boolean> {
    return await this.getNavbar().isVisible();
  }

  /**
   * 로고 클릭
   */
  async clickLogo() {
    await this.page.click(this.selectors.logo);
  }

  /**
   * 홈 링크 클릭
   */
  async clickHome() {
    await this.page.click(this.selectors.homeLink);
  }

  /**
   * 도시찾기 링크 클릭
   */
  async clickCities() {
    await this.page.click(this.selectors.citiesLink);
  }

  /**
   * 로그인 링크 클릭
   */
  async clickLogin() {
    await this.page.click(this.selectors.loginLink);
  }

  /**
   * 회원가입 버튼 클릭
   */
  async clickRegister() {
    await this.page.click(this.selectors.registerButton);
  }

  /**
   * 로그아웃 버튼 클릭
   */
  async clickLogout() {
    await this.page.click(this.selectors.logoutButton);
  }

  /**
   * 사용자 이메일이 표시되는지 확인
   */
  async isUserEmailVisible(): Promise<boolean> {
    return await this.page.isVisible(this.selectors.userEmail);
  }

  /**
   * 사용자 이메일 가져오기
   */
  async getUserEmail(): Promise<string | null> {
    return await this.page.textContent(this.selectors.userEmail);
  }

  /**
   * 로그인 링크가 표시되는지 확인
   */
  async isLoginLinkVisible(): Promise<boolean> {
    return await this.page.isVisible(this.selectors.loginLink);
  }

  /**
   * 로그아웃 버튼이 표시되는지 확인
   */
  async isLogoutButtonVisible(): Promise<boolean> {
    return await this.page.isVisible(this.selectors.logoutButton);
  }

  /**
   * 햄버거 메뉴 클릭 (모바일)
   */
  async clickHamburger() {
    await this.page.click(this.selectors.hamburgerButton);
  }

  /**
   * 모바일 메뉴가 열려있는지 확인
   */
  async isMobileMenuOpen(): Promise<boolean> {
    return await this.page.isVisible(this.selectors.mobileMenu);
  }
}
