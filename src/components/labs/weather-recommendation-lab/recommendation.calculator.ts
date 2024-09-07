export class RecommendationCalculator {
  private readonly _location: string;
  private readonly _rainRating: number;
  private readonly _sunnyRating: number;
  private readonly _rainProbability: number;

  get location(): string {
    return this._location;
  }

  get rainRating(): number {
    return this._rainRating;
  }

  get sunnyRating(): number {
    return this._sunnyRating;
  }

  get dataArray(): string[] {
    return [this._location, this._rainRating.toString(), this._sunnyRating.toString(), this.calculateRecommendation(this._rainProbability)];
  }

  public constructor(location: string, rainRating: number, sunnyRating: number, rainProbability: number) {
    this._location = location;
    this._rainRating = rainRating;
    this._sunnyRating = sunnyRating;
    this._rainProbability = rainProbability;
  }

  public calculateRecommendation(rainProbability: number): string {
    return (rainProbability * this._rainRating + (1 - rainProbability) * this._sunnyRating).toFixed(2);
  }
}
