import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from "./infra/database/mysql/reservation.entity"
import { CreateReservationController } from './use-cases/create-reservation.controller';
import { CreateReservationUseCase } from './use-cases/create-reservation.use-case';

@Module({
    imports: [TypeOrmModule.forFeature([Reservation])],
    providers: [CreateReservationUseCase],
    controllers: [CreateReservationController],
})
export class ReservationModule { }