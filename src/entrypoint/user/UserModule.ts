import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./UserController";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [UserController],
    providers: [
    ],
})
export class UserModule { }
