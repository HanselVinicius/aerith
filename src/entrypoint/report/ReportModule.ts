import { Module } from '@nestjs/common';
import { ReportController } from './ReportController';
import { CreateReportUseCase } from 'src/application/report/create/CreateReportUseCase';
import { CreateReportGatewayImpl } from 'src/gateway/report/create/CreateReportGatewayImpl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntity } from 'src/gateway/@shared/ReportEntity';
import { ListReportUseCase } from 'src/application/report/get/ListReportUseCase';
import { ListReportGatewayImpl } from 'src/gateway/report/list/ListReportGatewayImpl';
import { CREATE_REPORT_GATEWAY_NAME } from 'src/application/report/create/CreateReportGateway';
import { LIST_REPORT_GATEWAY_NAME } from 'src/application/report/get/ListReportGateway';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEntity])],
  controllers: [ReportController],
  providers: [
    {
      provide: CreateReportUseCase.name,
      useFactory: (gateway: CreateReportGatewayImpl) => {
        return new CreateReportUseCase(gateway);
      },
      inject: [CREATE_REPORT_GATEWAY_NAME],
    },
    {
      provide: CREATE_REPORT_GATEWAY_NAME,
      useClass: CreateReportGatewayImpl,
    },
    {
      provide: LIST_REPORT_GATEWAY_NAME,
      useClass: ListReportGatewayImpl,
    },
    {
      provide: ListReportUseCase.name,
      useFactory: (gateway: ListReportGatewayImpl) => {
        return new ListReportUseCase(gateway);
      },
      inject: [LIST_REPORT_GATEWAY_NAME],
    }
  ],
})
export class ReportModule {}
