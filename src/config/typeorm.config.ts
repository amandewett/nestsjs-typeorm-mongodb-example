import { ConfigModule } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
});
export const typOrmConfig: TypeOrmModuleOptions = {
    type: "mongodb",
    url: process.env.MONGO_CONNECTION_STRING,
    useNewUrlParser: true,
    synchronize: true,
    migrationsRun: false,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ]
};