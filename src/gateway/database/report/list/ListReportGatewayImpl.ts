import { InjectRepository } from "@nestjs/typeorm";
import { ListReportDto } from "src/application/report/get/ListReportDto";
import { ListReportGateway } from "src/application/report/get/ListReportGateway";
import { Report } from "src/domain/report/Report";
import { ReportEntity } from "src/gateway/database/@shared/ReportEntity";
import { ReportEntityMapper } from "src/gateway/database/@shared/ReportMapper";
import { Repository } from "typeorm";

export class ListReportGatewayImpl implements ListReportGateway {

    constructor(
        @InjectRepository(ReportEntity)
        private readonly reportRepository: Repository<ReportEntity>
    ) { }

    async execute(listReportDto: ListReportDto): Promise<Report[]> {
        const reports = await this.reportRepository.find({
            relations: { user: true },
            skip: (listReportDto.page!! - 1) * listReportDto.limit!!,
            take: listReportDto.limit
        });
        return reports.map(report => ReportEntityMapper.toDomain(report));
    }
}
