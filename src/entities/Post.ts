import {DTO} from "../core/models/dto";
import {Column, Entity, ManyToMany, OneToMany} from "typeorm";
import {Picture} from "./Picture";
import {Comment} from "./Comment";
import {Message_Topic} from "./Message_Topic";
import {JoinTable} from "typeorm/browser";
import {Post_Mark} from "./Post_Mark";
import {Message} from "./message";

@Entity()
export class Post extends Message {
    @OneToMany(type=>Comment,comment=>comment.post)
    comments: Comment[];

    @OneToMany(type=>Picture,picture=>picture.post)
    pictures: Picture[];

    @OneToMany(type=>Post_Mark,post_mark=>post_mark.post)
    post_marks: Post_Mark[];

    @ManyToMany(()=>Message_Topic, message_topic => message_topic.posts)
    @JoinTable()
    message_topics:Message_Topic[];
}