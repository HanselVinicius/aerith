export class Report {
  private id: string;
  private readonly title: string;
  private readonly description: string;
  private readonly userId: string;

  private constructor(title: string, description: string, userId: string) {
    this.title = title;
    this.description = description;
    this.userId = userId;
  }

  public static create(title: string, description: string, userId: string) {
    return new Report(title, description, userId);
  }

  public static reCreate(
    id: string,
    title: string,
    description: string,
    userId: string,
  ): Report {
    const result = new Report(title, description, userId);
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
}
