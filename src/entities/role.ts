import {DTO} from "../core/models/dto";
import {Column, Entity, OneToMany} from "typeorm";
import {User} from "./user";

@Entity()
export class Role extends DTO {
    @Column()
    role_name: string;
    @OneToMany(type=>User,user=>user.role)
    users: User[];
}