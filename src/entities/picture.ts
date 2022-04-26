import {Column, Entity, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import {Post} from "./post";
import {Comment} from "./comment";
import {Message_topic} from "./message_topic";
import {JoinTable} from "typeorm";
import {Picture_mark} from "./picture_mark";
import {Message} from "./message";

@Entity()
export class Picture extends Message {

    @Column({nullable:true})
    url: string;

    @ManyToOne(type=>Post,post=>post.pictures) post: Post;

    @ManyToOne(type=>Comment,comment=>comment.pictures) comment: Comment;

    @OneToMany(type=>Picture_mark, picture_mark=>picture_mark.picture)
    picture_marks: Picture_mark[];

    @ManyToMany(()=>Message_topic, message_topic => message_topic.pictures)
    @JoinTable()
    message_topics:Message_topic[];

}