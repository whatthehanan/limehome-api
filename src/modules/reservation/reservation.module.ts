import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from "./infra/database/mysql/reservation.entity"
import { CreateReservationController } from './use-cases/create-reservation/create-reservation.controller';
import { CreateReservationUseCase } from './use-cases/create-reservation/create-reservation.use-case';
import { GetReservationsController } from './use-cases/get-reservations/get-reservations.controller';
import { GetReservationsUseCase } from './use-cases/get-reservations/get-reservations.use-case';

@Module({
    imports: [TypeOrmModule.forFeature([Reservation])],
    providers: [CreateReservationUseCase, GetReservationsUseCase],
    controllers: [CreateReservationController, GetReservationsController],
})
export class ReservationModule { }