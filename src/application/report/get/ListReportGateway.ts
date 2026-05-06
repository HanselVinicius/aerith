import { Report } from "src/domain/report/Report";
import { ListReportDto } from "./ListReportDto";

export const LIST_REPORT_GATEWAY_NAME = 'ListReportGateway';

export interface ListReportGateway {
    execute(listReportDto: ListReportDto): Promise<Report[]>;
}