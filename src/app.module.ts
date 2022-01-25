import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationModule } from './modules/reservation/reservation.module';
import { DatabaseConfig, dbConfig } from './shared/config/db';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }),
    ReservationModule
  ],
})
export class AppModule { }
