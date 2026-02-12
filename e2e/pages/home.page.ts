import { Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * HomePage - 홈페이지 Page Object
 */
export class HomePage extends BasePage {
  // 선택자 정의
  private readonly selectors = {
    logo: 'a:has-text("한국 노마드 시티")',
    heroSection: '.hero-section',
    citiesLink: 'a[href="/cities"]',
    popularCitiesSection: '.popular-cities',
    statsSection: '.stats-section',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * 홈페이지로 이동
   */
  async navigate() {
    await this.goto('/');
    await this.waitForPageLoad();
  }

  /**
   * 로고 클릭
   */
  async clickLogo() {
    await this.click(this.selectors.logo);
  }

  /**
   * 도시찾기 링크 클릭
   */
  async goToCities() {
    await this.click(this.selectors.citiesLink);
    await this.waitForPageLoad();
  }

  /**
   * Hero 섹션이 표시되는지 확인
   */
  async isHeroSectionVisible(): Promise<boolean> {
    return await this.isVisible(this.selectors.heroSection);
  }

  /**
   * 인기 도시 섹션이 표시되는지 확인
   */
  async isPopularCitiesSectionVisible(): Promise<boolean> {
    return await this.isVisible(this.selectors.popularCitiesSection);
  }

  /**
   * 통계 섹션이 표시되는지 확인
   */
  async isStatsSectionVisible(): Promise<boolean> {
    return await this.isVisible(this.selectors.statsSection);
  }
}
