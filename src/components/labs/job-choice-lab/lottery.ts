export class Lottery {
  private readonly _winnings: Record<number, number>;

  public constructor(winnings: Record<number, number>) {
    this._winnings = winnings;
  }

  public expectedUtility(): number {
    let result: number = 0;
    for (const value in this._winnings) {
      result += this._winnings[value] * Math.sqrt(Number(value));
    }
    return result;
  }

  public toString(): string[] {
    const data: string[] = [];
    for (const value in this._winnings) {
      data.push(this._winnings[value].toString(), value);
    }
    data.push(this.expectedUtility().toString());
    return data;
  }

  public higherExpectedUtility(lottery: Lottery): boolean {
    return this.expectedUtility() > lottery.expectedUtility();
  }
}