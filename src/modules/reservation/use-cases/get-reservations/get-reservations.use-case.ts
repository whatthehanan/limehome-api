import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DomainException } from "src/shared/core/DomainException";
import { Repository } from "typeorm";
import { ReservationModel } from "../../infra/database";
import { ReservationDTO, ReservationMap } from "../../mappers/reservationMapper";
import { GetReservationsDTO } from "./get-reservations.dto";

@Injectable()
export class GetReservationsUseCase {
    constructor(
        @InjectRepository(ReservationModel)
        private reservationRepo: Repository<ReservationModel>
    ) { }

    async execute(dto: GetReservationsDTO): Promise<ReservationDTO[]> {
        const { page = 1, perPage = 10 } = dto

        try {
            const reservationObjs = await this.reservationRepo.find({
                take: perPage,
                skip: page > 1 ? ((page - 1) * perPage) : 0
            })

            return reservationObjs.map(r => ReservationMap.toDTO(ReservationMap.toDomain(r)));
        } catch (err) {
            if (err instanceof DomainException) {
                throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
            }
        }
    }
}