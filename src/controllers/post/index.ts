import {Connection} from "typeorm";
import {Router} from "express";
import {PostController} from "./post-controller";
import {Post_MarkController} from "./post_mark-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";
import {Message_TopicController} from "../message_topic";

const loadPost = (connection: Connection): Router => {
    const post_mark = new Post_MarkController(connection);
    const post = new PostController(connection);
    const message_topic = new Message_TopicController(connection);
    const router = RouterBuilder.build([{
        controller: post,
        children:[{controller:post_mark}, {controller:message_topic}]
    }])
    return  router;
}
export {PostController, Post_MarkController, loadPost}
