import { Reservation } from "../domain/reservation";

interface ReservationDTO {
    reservationId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    streetAddress: string
    postalCode: string
    city: string
    country: string
    numGuests: number
    checkInDate: string
    checkOutDate: string
}

export class ReservationMap {

    public static toDTO(reservation: Reservation): ReservationDTO {
        return {
            reservationId: reservation.reservationId,
            firstName: reservation.firstName,
            lastName: reservation.lastName,
            email: reservation.email,
            phoneNumber: reservation.phoneNumber,
            streetAddress: reservation.streetAddress,
            postalCode: reservation.postalCode,
            city: reservation.city,
            country: reservation.country,
            numGuests: reservation.numGuests,
            checkInDate: reservation.checkInDate,
            checkOutDate: reservation.checkOutDate,
        }
    }

    public static toDomain(raw: any): Reservation {
        return Reservation.create({
            firstName: raw.firstName,
            lastName: raw.lastName,
            email: raw.email,
            phoneNumber: raw.phoneNumber,
            streetAddress: raw.streetAddress,
            postalCode: raw.postalCode,
            city: raw.city,
            country: raw.country,
            numGuests: raw.numGuests,
            checkInDate: raw.checkInDate,
            checkOutDate: raw.checkOutDate,
        }, raw.reservationId);
    }

    public static toPersistence(reservation: Reservation) {
        return {
            reservationId: reservation.reservationId,
            firstName: reservation.firstName,
            lastName: reservation.lastName,
            email: reservation.email,
            phoneNumber: reservation.phoneNumber,
            streetAddress: reservation.streetAddress,
            postalCode: reservation.postalCode,
            city: reservation.city,
            country: reservation.country,
            numGuests: reservation.numGuests,
            checkInDate: reservation.checkInDate,
            checkOutDate: reservation.checkOutDate,
        }
    }
}