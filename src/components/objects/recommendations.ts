import { RecommendationCalculator } from './recommendation.calculator.ts';
import { ProbabilityData } from '../interfaces/probability.data.ts';

export class Recommendations {
  private readonly _recommendations: RecommendationCalculator[];

  get recommendations(): RecommendationCalculator[] {
    return this._recommendations;
  }

  public constructor(data: ProbabilityData[]) {
    this._recommendations = data.map((currentItem) => {
      return new RecommendationCalculator(currentItem.location, currentItem.rainRating, currentItem.sunnyRating);
    });
  }
}
