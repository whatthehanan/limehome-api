import { DomainException } from "src/shared/core/DomainException"
import { Guard } from "src/shared/core/Guard"
import { v4 as uuid } from "uuid"

interface ReservationProps {
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

export class Reservation {

    get reservationId(): string {
        return this.id
    }

    get firstName(): string {
        return this.props.firstName
    }

    get lastName(): string {
        return this.props.lastName
    }

    get email(): string {
        return this.props.email
    }

    get phoneNumber(): string {
        return this.props.phoneNumber
    }

    get streetAddress(): string {
        return this.props.streetAddress
    }

    get postalCode(): string {
        return this.props.postalCode
    }

    get city(): string {
        return this.props.city
    }

    get country(): string {
        return this.props.country
    }

    get numGuests(): number {
        return this.props.numGuests
    }

    get checkInDate(): string {
        return this.props.checkInDate
    }

    get checkOutDate(): string {
        return this.props.checkOutDate
    }


    private constructor(private props: ReservationProps, private id: string = uuid()) { }

    public static create(props: ReservationProps, id?: string) {

        const guardResult = Guard.againstNullOrUndefinedBulk([
            { argument: props.firstName, argumentName: 'First name' },
            { argument: props.lastName, argumentName: 'Last name' },
            { argument: props.email, argumentName: 'Email' },
            { argument: props.phoneNumber, argumentName: 'Phone number' },
            { argument: props.streetAddress, argumentName: 'Billing address' },
            { argument: props.postalCode, argumentName: 'Postal code' },
            { argument: props.city, argumentName: 'City' },
            { argument: props.country, argumentName: 'Country' },
            { argument: props.numGuests, argumentName: 'Number of guests' },
            // { argument: props.checkInDate, argumentName: 'Check-in date' },
            // { argument: props.checkOutDate, argumentName: 'Check-out date' },
        ])

        if (!guardResult.succeeded) {
            throw new DomainException(guardResult.message)
        }

        const reservation = new Reservation({
            ...props,
        }, id)

        return reservation;
    }
}