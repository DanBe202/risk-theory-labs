import { MarketDataInterface } from '../../interfaces/lab2-data/market.data.interface.ts';

export class Market {
  private readonly _location: string;
  private readonly _posProbability: number;
  private readonly _posIncome: number;
  private readonly _negProbability: number;
  private readonly _negIncome: number;

  constructor(marketInfo: MarketDataInterface) {
    this._location = marketInfo.location;
    this._posProbability = marketInfo.positiveProbability;
    this._posIncome = marketInfo.positiveIncome;
    this._negProbability = marketInfo.negativeProbability;
    this._negIncome = marketInfo.negativeIncome;
  }

  get location(): string {
    return this._location;
  }

  get dataArray(): string[] {
    return [
      this._location,
      this._posProbability.toString(),
      this._posIncome.toString(),
      this._negProbability.toString(),
      this._negIncome.toString()];
  }

  get resultsArray(): string[] {
    return [
      this._location,
      this.netPresentValue().toString(),
      this.riskRatingIndex().toString(),
      this.semiSquareVariation().toFixed(3),
      this.variationCoefficient().toFixed(3),
      this.negativeSemiSquareVariation().toFixed(3),
      this.negativeVariationCoefficient().toFixed(3)
    ];
  }

  public calculateLoss(): number {
    return -(this._posIncome - this._negIncome);
  }

  public netPresentValue(): number {
    return (this._posProbability * this._posIncome) + (this._negProbability * this.calculateLoss());
  }

  public riskRatingIndex(): number {
    return Math.pow(this._posIncome - this.netPresentValue(), 2) * this._posProbability + Math.pow(this.calculateLoss() - this.netPresentValue(), 2) * this._negProbability;
  }

  public semiSquareVariation(): number {
    return Math.sqrt(this.riskRatingIndex());
  }

  public variationCoefficient(): number {
    return this.semiSquareVariation() / this.netPresentValue();
  }

  public negativeSemiSquareVariation(): number {
    return Math.sqrt(Math.pow(this.calculateLoss() - this.netPresentValue(), 2) * this._negProbability);
  }

  public negativeVariationCoefficient(): number {
    return this.negativeSemiSquareVariation() / this.netPresentValue();
  }

  public approximatedRisk(): number {
    return this.semiSquareVariation() - this.negativeSemiSquareVariation() + this.variationCoefficient() - this.negativeVariationCoefficient();
  }
}
