import { Report } from 'src/domain/Report';
import { CreateReportDto } from './CreateReportDto';
import { CreateReportGateway } from './CreateReportGateway';

export class CreateReportUseCase {
  constructor(private readonly createReportGateway: CreateReportGateway) {}

  public async execute(createReportDto: CreateReportDto): Promise<Report> {
    const repport = Report.create(
      createReportDto.title,
      createReportDto.description,
      createReportDto.userId,
    );

    return this.createReportGateway.execute(repport);
  }
}
