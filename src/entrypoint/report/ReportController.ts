import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateReportUseCase } from 'src/application/report/create/CreateReportUseCase';
import { CreateReportDto } from 'src/application/report/create/CreateReportDto';
import { ReportResponseDto } from 'src/application/report/@shared/ReportResponseDto';
import { ListReportUseCase } from 'src/application/report/get/ListReportUseCase';

@Controller('v1/reports')
export class ReportController {
  constructor(
    @Inject(CreateReportUseCase.name)
    private readonly createReportUseCase: CreateReportUseCase,
    @Inject(ListReportUseCase.name)
    private readonly listReportUseCase: ListReportUseCase
  ) { }

  @Post()
  async createRepport(
    @Body() createReportDto: CreateReportDto,
  ): Promise<{ message: string }> {
    return { message: 'NOPE, NOT YET' };
  }

  @Get()
  async getReport(): Promise<ReportResponseDto[]> {
    const response = await this.listReportUseCase.execute({});
    return response;
  }
}
