import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ReportModule } from './entrypoint/report/ReportModule';
import datasource from './gateway/database/datasource';
import { ReportEntity } from './gateway/database/@shared/ReportEntity';
import { UserEntity } from './gateway/database/user/UserEntity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      entities: [ReportEntity, UserEntity],
      synchronize: true,
    }),
    ReportModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
