import {DTO} from "../core/models/dto";
import {Column, Entity, ManyToMany, OneToMany} from "typeorm";
import {Picture} from "./picture";
import {Comment} from "./comment";
import {Message_topic} from "./message_topic";
import {JoinTable} from "typeorm";
import {Post_mark} from "./post_mark";
import {Message} from "./message";

@Entity()
export class Post extends Message {
    @OneToMany(type=>Comment,comment=>comment.post)
    comments: Comment[];

    @OneToMany(type=>Picture,picture=>picture.post)
    pictures: Picture[];

    @OneToMany(type=>Post_mark, post_mark=>post_mark.post)
    post_marks: Post_mark[];

    @ManyToMany(()=>Message_topic, message_topic => message_topic.posts)
    @JoinTable()
    message_topics:Message_topic[];
}