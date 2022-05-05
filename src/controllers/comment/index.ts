import {Connection} from "typeorm";
import {Router} from "express";
import {Comment_MarkController} from "./comment_mark-controller";
import {CommentController} from "./comment-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";
import {Message_TopicController} from "../message_topic";

const loadComment = (connection: Connection): Router => {
    const comment = new CommentController(connection);
    const comment_mark = new Comment_MarkController(connection);
    const message_topic = new Message_TopicController(connection);
    const router = RouterBuilder.build([{
        controller: comment,
        children:[{controller:comment_mark}, {controller:message_topic}]
    }])
    return  router;
}
export {Comment_MarkController, CommentController, loadComment}
