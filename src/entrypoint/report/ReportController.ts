import { BadRequestException, Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { CreateReportUseCase } from 'src/application/report/create/CreateReportUseCase';
import { CreateReportDto } from 'src/application/report/create/CreateReportDto';
import { ReportResponseDto } from 'src/application/report/@shared/ReportResponseDto';
import { ListReportUseCase } from 'src/application/report/get/ListReportUseCase';
import { ListReportDto } from 'src/application/report/get/ListReportDto';
import { getReportDto } from './dto/getReportDto';

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
  ): Promise<{ reportId: string }> {
    const report = await this.createReportUseCase.execute(createReportDto);
    return { reportId: report.getId() };
  }

  @Get()
  async getReport(
    @Query() listReportDto: ListReportDto
  ): Promise<ReportResponseDto[]> {
    const parsed = getReportDto.safeParse({
      page: listReportDto.page,
      limit: listReportDto.limit
    });

    if (!parsed.success) {
      throw new BadRequestException(parsed.error);
    }

    const response = await this.listReportUseCase.execute({
      limit: parsed.data?.limit,
      page: parsed.data?.page
    });
    return response;
  }
}
