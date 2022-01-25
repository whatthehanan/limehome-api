import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DomainException } from "src/shared/core/DomainException";
import { Repository } from "typeorm";
import { ReservationModel } from "../infra/database";
import { ReservationMap } from "../mappers/reservationMapper";
import { CreateReservationDTO } from "./create-reservation.dto";

@Injectable()
export class CreateReservationUseCase {
    constructor(
        @InjectRepository(ReservationModel)
        private reservationRepo: Repository<ReservationModel>
    ) { }

    async execute(dto: CreateReservationDTO) {
        try {
            const reservation = ReservationMap.toDomain(dto);
            await this.reservationRepo.save(ReservationMap.toPersistence(reservation));
            return true;

        } catch (err) {
            if (err instanceof DomainException) {
                throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
            }
        }
    }
}