import { Lottery } from './lottery.ts';

export class Job {
  private readonly _jobName: string;
  private readonly _lottery: Lottery;

  get jobName(): string {
    return this._jobName;
  }

  get lottery(): Lottery {
    return this._lottery;
  }

  public constructor(name: string, lottery: Lottery) {
    this._jobName = name;
    this._lottery = lottery;
  }

  public dataToString(): string[] {
    return [this._jobName, ...this._lottery.toString()];
  }

  public higherExpectedUtility(job: Job): Job {
    return this._lottery.higherExpectedUtility(job.lottery) ? this : job;
  }
}