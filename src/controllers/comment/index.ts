import {Connection} from "typeorm";
import {Router} from "express";
import {Comment_MarkController} from "./comment_mark-controller";
import {CommentController} from "./comment-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";

const loadComment = (connection: Connection): Router => {
    const comment = new CommentController(connection);
    const comment_mark = new Comment_MarkController(connection);
    const router = RouterBuilder.build([{
        controller: comment,
        children:[{controller:comment_mark}]
    }])
    return  router;
}
export {Comment_MarkController, CommentController, loadComment}
