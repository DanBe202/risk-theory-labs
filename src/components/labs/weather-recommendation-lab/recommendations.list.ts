import { RecommendationCalculator } from './recommendation.calculator.ts';
import { ProbabilityDataInterface } from '../../interfaces/lab1-data/probability.data.interface.ts';

export class RecommendationsList {
  private readonly _recommendations: RecommendationCalculator[]

  get recommendations(): RecommendationCalculator[] {
    return this._recommendations;
  }

  get toString(): string[][] {
    return this._recommendations.map((currentItem) => currentItem.dataArray);
  }

  public constructor(data: ProbabilityDataInterface[], probability: number) {
    this._recommendations = data.map((currentItem) => {
      return new RecommendationCalculator(currentItem.location, currentItem.rainRating, currentItem.sunnyRating, probability);
    });
  }
}
