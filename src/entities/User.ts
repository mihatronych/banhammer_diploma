import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {DTO} from "../core/models/dto";
import {Role} from "./Role";
import {Post_Mark} from "./Post_Mark";
import {Comment_Mark} from "./Comment_Mark";
import {Picture_Mark} from "./Picture_Mark";

@Entity()
export class User extends DTO{

    @Column()
    email: string;

    @Column({nullable:true})
    phone_number: string;

    @ManyToOne(type=>Role,role=>role.users) role: Role;

    @OneToMany(type=>Post_Mark,post_mark=>post_mark.user)
    post_marks: Post_Mark[];

    @OneToMany(type=>Comment_Mark,comment_mark=>comment_mark.user)
    comment_marks: Comment_Mark[];

    @OneToMany(type=>Picture_Mark,picture_mark=>picture_mark.user)
    picture_marks: Picture_Mark[];
}
