import { Body, Controller, Post } from "@nestjs/common";
import { BaseController } from "src/shared/infra/http/base-controller";
import { CreateReservationDTO } from "./create-reservation.dto";
import { CreateReservationUseCase } from "./create-reservation.use-case";

@Controller({ path: "/reservations", version: "v1" })
export class CreateReservationController extends BaseController {

    constructor(private readonly createReservationUseCase: CreateReservationUseCase) {
        super()
    }

    @Post("/")
    async createReservation(@Body() dto: CreateReservationDTO) {
        await this.createReservationUseCase.execute(dto);

        return {
            status: "success",
            message: "reservation created successfully!"
        }
    }
}
