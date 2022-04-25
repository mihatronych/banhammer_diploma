import {DTO} from "../core/models/dto";
import {Column, Entity} from "typeorm";

@Entity()
export class Message extends DTO{
    @Column({nullable:true})
    text: string;

    @Column({nullable:true})
    publication_date: Date;
}