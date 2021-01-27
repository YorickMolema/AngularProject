export class Stats {
  ActorName: string;
  mean: string;
  median: string;
  sd: string;

  constructor(ActorName: string, mean: string, median: string, sd: string) {
    this.ActorName = ActorName;
    this.mean = mean;
    this.median = median;
    this.sd = sd;
  }
}
