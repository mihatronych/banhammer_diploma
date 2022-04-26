import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {DTO} from "../core/models/dto";
import {Role} from "./role";
import {Post_mark} from "./post_mark";
import {Comment_mark} from "./comment_mark";
import {Picture_mark} from "./picture_mark";

@Entity()
export class User extends DTO{

    @Column()
    email: string;

    @Column({nullable:true})
    phone_number: string;

    @ManyToOne(type=>Role,role=>role.users) role: Role;

    @OneToMany(type=>Post_mark, post_mark=>post_mark.user)
    post_marks: Post_mark[];

    @OneToMany(type=>Comment_mark, comment_mark=>comment_mark.user)
    comment_marks: Comment_mark[];

    @OneToMany(type=>Picture_mark, picture_mark=>picture_mark.user)
    picture_marks: Picture_mark[];
}
