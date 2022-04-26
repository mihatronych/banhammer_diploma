import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {User} from "./user";
import {Picture} from "./picture";
import {Mark} from "./mark";

@Entity()
export class Picture_mark extends Mark{

    @ManyToOne(type=>User,user=>user.picture_marks) user: User;

    @ManyToOne(type=>Picture,picture=>picture.picture_marks) picture: Picture;

}