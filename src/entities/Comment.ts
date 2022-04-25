import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from "typeorm";

import {Post} from "./Post";
import {Picture} from "./Picture";
import {Message_Topic} from "./Message_Topic";
import {JoinTable} from "typeorm/browser";
import {Comment_Mark} from "./Comment_Mark";
import {Message} from "./message";

@Entity()
export class Comment extends Message {

    @ManyToOne(type=>Post,post=>post.comments) post: Post;

    @OneToMany(type=>Picture,picture=>picture.comment)
    pictures: Picture[];

    @OneToMany(type=>Comment_Mark,comment_mark=>comment_mark.comment)
    comment_marks: Comment_Mark[];

    @ManyToMany(()=>Message_Topic, message_topic => message_topic.comments)
    @JoinTable()
    message_topics:Message_Topic[];
}