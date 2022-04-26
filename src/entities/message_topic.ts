import {DTO} from "../core/models/dto";
import {Column, Entity, ManyToMany, OneToMany} from "typeorm";
import {Post} from "./post";
import {Comment} from "./comment";
import {Picture} from "./picture";

@Entity()
export class Message_topic extends DTO {
    @Column({nullable:true})
    topic_name: string;

    @ManyToMany(() => Post, post => post.message_topics)
    posts: Post[]

    @ManyToMany(() => Comment, comment => comment.message_topics)
    comments: Comment[]

    @ManyToMany(() => Picture, picture => picture.message_topics)
    pictures: Picture[]
}