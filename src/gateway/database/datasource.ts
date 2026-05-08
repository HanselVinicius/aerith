import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { ReportEntity } from './@shared/ReportEntity';
import { UserEntity } from './user/UserEntity';


export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [ReportEntity, UserEntity],
    synchronize: true,
});