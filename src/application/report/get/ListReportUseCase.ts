import { ReportResponseDto } from "../@shared/ReportResponseDto";
import { ListReportDto } from "./ListReportDto";
import { ListReportGateway } from "./ListReportGateway";

export class ListReportUseCase {

    constructor(private readonly listReportGateway: ListReportGateway) { }

    async execute(listReportDto: ListReportDto): Promise<ReportResponseDto[]> {
        const reports = await this.listReportGateway.execute(listReportDto);
        return reports.map(report => ReportResponseDto.fromDomain(report));
    }
}