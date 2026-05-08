export class CreateReportDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly userId: string,

    public readonly redditId: string,
    public readonly score: number,
    public readonly ups: number,
    public readonly isVideo: boolean,

    public readonly url: string,

    public readonly mediaType: string | null,

    public readonly subredditName: string,
  ) {}
}