import { Market } from './market.ts';
import { MarketDataInterface } from '../../interfaces/lab2-data/market.data.interface.ts';

export class MarketsList {
  private readonly _markets: Market[];

  get recommendations(): Market[] {
    return this._markets;
  }

  get dataToString(): string[][] {
    return this._markets.map((currentItem) => currentItem.dataArray);
  }

  get resultToString(): string[][] {
    return this._markets.map((currentItem) => currentItem.resultsArray);
  }

  public constructor(data: MarketDataInterface[]) {
    this._markets = data.map((currentItem) => {
      return new Market(currentItem);
    });
  }
}