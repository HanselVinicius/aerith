import { CreateReportGateway } from 'src/application/report/create/CreateReportGateway';
import { Report } from 'src/domain/Report';
import { Repository } from 'typeorm';
import { ReportEntity } from '../../@shared/ReportEntity';
import { ReportEntityMapper } from '../../@shared/ReportMapper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateReportGatewayImpl implements CreateReportGateway {
  constructor(
    @InjectRepository(ReportEntity)
    private readonly reportEntityRepository: Repository<ReportEntity>,
  ) {}

  async execute(report: Report): Promise<Report> {
    const entity = ReportEntityMapper.toEntity(report);
    const result = await this.reportEntityRepository.save(entity);
    return ReportEntityMapper.toDomain(result);
  }
}
