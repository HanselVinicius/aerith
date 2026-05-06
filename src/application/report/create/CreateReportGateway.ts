import { Report } from 'src/domain/report/Report';

export const CREATE_REPORT_GATEWAY_NAME = 'CreateRepportGateway';

export interface CreateReportGateway {
  execute(repport: Report): Promise<Report>;
}
