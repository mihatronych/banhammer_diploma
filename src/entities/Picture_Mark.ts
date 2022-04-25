import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {User} from "./User";
import {Picture} from "./Picture";
import {Mark} from "./mark";

@Entity()
export class Picture_Mark extends Mark{

    @ManyToOne(type=>User,user=>user.picture_marks) user: User;

    @ManyToOne(type=>Picture,picture=>picture.picture_marks) picture: Picture;

}