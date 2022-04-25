import {DTO} from "../core/models/dto";
import {Column, Entity} from "typeorm";

@Entity()
export class Mark extends DTO{
    @Column({"default":false})
    is_toxic:boolean;

    @Column({"default":false})
    is_toxic_sexist:boolean;

    @Column({"default":false})
    is_toxic_to_person:boolean;

    @Column({"default":false})
    is_toxic_to_group:boolean;

    @Column({"default":false})
    is_negative:boolean;

    @Column({"default":false})
    is_positive:boolean;

    @Column({"default":false})
    is_neutral:boolean;

    @Column({"default":false})
    skip:boolean;
}