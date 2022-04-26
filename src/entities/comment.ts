import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from "typeorm";

import {Post} from "./post";
import {Picture} from "./picture";
import {Message_topic} from "./message_topic";
import {JoinTable} from "typeorm";
import {Comment_mark} from "./comment_mark";
import {Message} from "./message";

@Entity()
export class Comment extends Message {

    @ManyToOne(type=>Post,post=>post.comments) post: Post;

    @OneToMany(type=>Picture,picture=>picture.comment)
    pictures: Picture[];

    @OneToMany(type=>Comment_mark, comment_mark=>comment_mark.comment)
    comment_marks: Comment_mark[];

    @ManyToMany(()=>Message_topic, message_topic => message_topic.comments)
    @JoinTable()
    message_topics:Message_topic[];
}