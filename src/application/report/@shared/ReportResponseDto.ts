import { Report } from 'src/domain/report/Report';

export class ReportResponseDto {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly userId: string,
  ) {}

  static fromDomain(repport: Report): ReportResponseDto {
    return new ReportResponseDto(
      repport.getId(),
      repport.getTitle(),
      repport.getDescription(),
      repport.getUserId(),
    );
  }
}
