import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * CitiesPage - 도시 목록 페이지 Page Object
 */
export class CitiesPage extends BasePage {
  // 선택자 정의
  private readonly selectors = {
    searchInput: 'input[placeholder*="검색"]',
    searchClearButton: 'button:has-text("✕")',
    categoryButton: (category: string) => `button:has-text("${category}")`,
    sortSelect: 'select',
    cityCard: '.city-card',
    cityCardTitle: (cityName: string) => `.city-card:has-text("${cityName}")`,
    likeButton: 'button:has(span:text("♡")), button:has(span:text("♥"))',
    noResultsMessage: 'text=검색 결과가 없습니다, text=조건에 맞는 도시가 없습니다',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * 도시 목록 페이지로 이동
   */
  async navigate() {
    await this.goto('/cities');
    await this.waitForPageLoad();
  }

  /**
   * 검색어 입력
   */
  async search(query: string) {
    await this.fill(this.selectors.searchInput, query);
    // 검색 결과 로딩 대기
    await this.page.waitForTimeout(500);
  }

  /**
   * 검색어 초기화
   */
  async clearSearch() {
    await this.click(this.selectors.searchClearButton);
  }

  /**
   * 카테고리 필터 클릭
   */
  async filterByCategory(category: string) {
    await this.click(this.selectors.categoryButton(category));
    await this.page.waitForTimeout(300);
  }

  /**
   * 정렬 옵션 선택
   */
  async sortBy(sortOption: string) {
    await this.page.selectOption(this.selectors.sortSelect, sortOption);
    await this.page.waitForTimeout(300);
  }

  /**
   * 모든 도시 카드 가져오기
   */
  getCityCards(): Locator {
    return this.getLocator(this.selectors.cityCard);
  }

  /**
   * 도시 카드 개수 가져오기
   */
  async getCityCardCount(): Promise<number> {
    return await this.getCityCards().count();
  }

  /**
   * 특정 도시 카드 찾기
   */
  getCityCard(cityName: string): Locator {
    return this.getLocator(this.selectors.cityCardTitle(cityName));
  }

  /**
   * 특정 도시 카드 클릭 (상세 페이지로 이동)
   */
  async clickCityCard(cityName: string) {
    await this.getCityCard(cityName).click();
    await this.waitForPageLoad();
  }

  /**
   * 특정 도시의 좋아요 버튼 클릭
   */
  async likeCityByName(cityName: string) {
    const cityCard = this.getCityCard(cityName);
    const likeButton = cityCard.locator(this.selectors.likeButton).first();
    await likeButton.click();
  }

  /**
   * 특정 도시의 좋아요 수 가져오기
   */
  async getLikeCount(cityName: string): Promise<number> {
    const cityCard = this.getCityCard(cityName);
    const likeButton = cityCard.locator(this.selectors.likeButton).first();
    const countText = await likeButton.textContent();
    const match = countText?.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  /**
   * 특정 도시가 좋아요 상태인지 확인
   */
  async isCityLiked(cityName: string): Promise<boolean> {
    const cityCard = this.getCityCard(cityName);
    const likeButton = cityCard.locator(this.selectors.likeButton).first();
    const text = await likeButton.textContent();
    return text?.includes('♥') || false;
  }

  /**
   * 검색 결과 없음 메시지가 표시되는지 확인
   */
  async hasNoResultsMessage(): Promise<boolean> {
    return await this.isVisible(this.selectors.noResultsMessage);
  }

  /**
   * 도시가 표시되는지 확인
   */
  async hasCityCard(cityName: string): Promise<boolean> {
    return await this.getCityCard(cityName).isVisible();
  }
}
