import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import {Post} from "./Post";
import {Comment} from "./Comment";
import {Message_Topic} from "./Message_Topic";
import {JoinTable} from "typeorm/browser";
import {Picture_Mark} from "./Picture_Mark";
import {Message} from "./message";

@Entity()
export class Picture extends Message {

    @Column({nullable:true})
    url: string;

    @ManyToOne(type=>Post,post=>post.pictures) post: Post;

    @ManyToOne(type=>Comment,comment=>comment.pictures) comment: Comment;

    @OneToMany(type=>Picture_Mark,picture_mark=>picture_mark.picture)
    picture_marks: Picture_Mark[];

    @ManyToMany(()=>Message_Topic, message_topic => message_topic.pictures)
    @JoinTable()
    message_topics:Message_Topic[];

}