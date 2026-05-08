export class Report {
  // @ts-ignore 
  private id: string;

  private readonly title: string;
  private readonly description: string;
  private readonly userId: string;

  private readonly originId: string;
  private readonly originName: string;

  private readonly score: number;
  private readonly ups: number;

  private readonly isVideo: boolean;

  private readonly url: string;

  private readonly mediaType: string | null;

  private constructor(
    title: string,
    description: string,
    userId: string,
    originId: string,
    originName: string,
    score: number,
    ups: number,
    isVideo: boolean,
    url: string,
    mediaType: string | null,
  ) {
    this.title = title;
    this.description = description;
    this.userId = userId;

    this.originId = originId;
    this.originName = originName;

    this.score = score;
    this.ups = ups;

    this.isVideo = isVideo;

    this.url = url;

    this.mediaType = mediaType;
  }

  public static create(
    title: string,
    description: string,
    userId: string,

    originId: string,
    originName: string,

    score: number,
    ups: number,

    isVideo: boolean,

    url: string,

    mediaType: string | null,
  ): Report {
    return new Report(
      title,
      description,
      userId,
      originId,
      originName,
      score,
      ups,
      isVideo,
      url,
      mediaType,
    );
  }

  public static reCreate(
    id: string,

    title: string,
    description: string,
    userId: string,

    originId: string,
    originName: string,

    score: number,
    ups: number,

    isVideo: boolean,

    url: string,

    mediaType: string | null,
  ): Report {
    const result = new Report(
      title,
      description,
      userId,

      originId,
      originName,

      score,
      ups,

      isVideo,

      url,

      mediaType,
    );

    result.setId(id);

    return result;
  }

  private setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getUserId() {
    return this.userId;
  }

  public getOriginId() {
    return this.originId;
  }

  public getOriginName() {
    return this.originName;
  }

  public getScore() {
    return this.score;
  }

  public getUps() {
    return this.ups;
  }

  public getIsVideo() {
    return this.isVideo;
  }

  public getUrl() {
    return this.url;
  }

  public getMediaType() {
    return this.mediaType;
  }
}