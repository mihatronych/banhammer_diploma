import {Connection} from "typeorm";
import {Router} from "express";
import {PostController} from "./post-controller";
import {Post_MarkController} from "./post_mark-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";

const loadPost = (connection: Connection): Router => {
    const post_mark = new Post_MarkController(connection);
    const post = new PostController(connection);
    const router = RouterBuilder.build([{
        controller: post,
        children:[{controller:post_mark}]
    }])
    return  router;
}
export {PostController, Post_MarkController, loadPost}
