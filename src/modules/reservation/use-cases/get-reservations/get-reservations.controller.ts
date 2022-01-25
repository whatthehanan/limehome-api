import { Body, Controller, Get } from "@nestjs/common";
import { BaseController } from "src/shared/infra/http/Base.Controller";
import { GetReservationsDTO } from "./get-reservations.dto";
import { GetReservationsUseCase } from "./get-reservations.use-case";

@Controller({ path: "/reservations", version: "v1" })
export class GetReservationsController extends BaseController {

    constructor(private readonly getReservationsUseCase: GetReservationsUseCase) {
        super()
    }

    @Get("/")
    async getReservations(@Body() dto: GetReservationsDTO) {

        return {
            status: "success",
            data: await this.getReservationsUseCase.execute(dto)
        }
    }
}
