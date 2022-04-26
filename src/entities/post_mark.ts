import {Entity, Column, OneToMany, ManyToOne} from "typeorm";
import {User} from "./user";
import {Post} from "./post";
import {Mark} from "./mark";

@Entity()
export class Post_mark extends Mark{

    @ManyToOne(type=>User,user=>user.post_marks) user: User;

    @ManyToOne(type=>Post,post=>post.post_marks) post: Post;

}