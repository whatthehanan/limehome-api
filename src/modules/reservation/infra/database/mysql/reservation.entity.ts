import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryColumn()
    reservationId: string;

    @Column()
    numGuests: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    streetAddress: string;

    @Column()
    country: string

    @Column()
    postalCode: string

    @Column()
    city: string

    @Column()
    email: string

    @Column()
    phoneNumber: string
}