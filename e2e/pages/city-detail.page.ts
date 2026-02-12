import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * CityDetailPage - 도시 상세 페이지 Page Object
 */
export class CityDetailPage extends BasePage {
  // 선택자 정의
  private readonly selectors = {
    cityName: 'h1',
    cityNameEn: 'h1 + p',
    rating: '.rating',
    description: '.description',
    prosSection: '.pros',
    consSection: '.cons',
    recommendedPlaces: '.recommended-places',
    likeButton: 'button:has(span:text("♡")), button:has(span:text("♥"))',
    backButton: 'button:has-text("뒤로가기"), a:has-text("뒤로가기")',
  };

  constructor(page: Page) {
    super(page);
  }

  /**
   * 특정 도시 상세 페이지로 이동
   */
  async navigate(cityId: number) {
    await this.goto(`/cities/${cityId}`);
    await this.waitForPageLoad();
  }

  /**
   * 도시 이름 가져오기
   */
  async getCityName(): Promise<string | null> {
    return await this.getText(this.selectors.cityName);
  }

  /**
   * 도시 영문 이름 가져오기
   */
  async getCityNameEn(): Promise<string | null> {
    return await this.getText(this.selectors.cityNameEn);
  }

  /**
   * 평점 정보가 표시되는지 확인
   */
  async hasRating(): Promise<boolean> {
    return await this.isVisible(this.selectors.rating);
  }

  /**
   * 설명이 표시되는지 확인
   */
  async hasDescription(): Promise<boolean> {
    return await this.isVisible(this.selectors.description);
  }

  /**
   * 장점 섹션이 표시되는지 확인
   */
  async hasPros(): Promise<boolean> {
    return await this.isVisible(this.selectors.prosSection);
  }

  /**
   * 단점 섹션이 표시되는지 확인
   */
  async hasCons(): Promise<boolean> {
    return await this.isVisible(this.selectors.consSection);
  }

  /**
   * 추천 장소 섹션이 표시되는지 확인
   */
  async hasRecommendedPlaces(): Promise<boolean> {
    return await this.isVisible(this.selectors.recommendedPlaces);
  }

  /**
   * 좋아요 버튼 클릭
   */
  async clickLikeButton() {
    await this.click(this.selectors.likeButton);
  }

  /**
   * 좋아요 상태인지 확인
   */
  async isLiked(): Promise<boolean> {
    const likeButton = this.getLocator(this.selectors.likeButton);
    const text = await likeButton.textContent();
    return text?.includes('♥') || false;
  }

  /**
   * 좋아요 수 가져오기
   */
  async getLikeCount(): Promise<number> {
    const likeButton = this.getLocator(this.selectors.likeButton);
    const countText = await likeButton.textContent();
    const match = countText?.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  /**
   * 뒤로가기 버튼 클릭
   */
  async goBack() {
    await this.click(this.selectors.backButton);
  }
}
