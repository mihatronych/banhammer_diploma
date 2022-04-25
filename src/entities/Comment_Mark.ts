import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {User} from "./User";
import {Comment} from "./Comment";
import {Mark} from "./mark";

@Entity()
export class Comment_Mark extends Mark{

    @ManyToOne(type=>User,user=>user.comment_marks) user: User;

    @ManyToOne(type=>Comment,comment=>comment.comment_marks) comment: Comment;

}