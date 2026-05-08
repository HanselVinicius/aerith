import { Report } from 'src/domain/report/Report';
import { CreateReportDto } from './CreateReportDto';
import { CreateReportGateway } from './CreateReportGateway';

export class CreateReportUseCase {
  constructor(private readonly createReportGateway: CreateReportGateway) { }

  public async execute(createReportDto: CreateReportDto): Promise<Report> {
    const report = Report.create(
      createReportDto.title,
      createReportDto.description,
      createReportDto.userId,
      createReportDto.redditId,
      createReportDto.subredditName,
      createReportDto.score,
      createReportDto.ups,
      createReportDto.isVideo,
      createReportDto.url,
      createReportDto.mediaType
    );

    return this.createReportGateway.execute(report);
  }
}
