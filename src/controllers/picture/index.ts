import {Connection} from "typeorm";
import {Router} from "express";
import {PictureController} from "./picture-controller";
import {Picture_MarkController} from "./picture_mark-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";
import {Message_TopicController} from "../message_topic";

const loadPicture = (connection: Connection): Router => {
    const picture_mark = new Picture_MarkController(connection);
    const picture = new PictureController(connection);
    const message_topic = new Message_TopicController(connection);
    const router = RouterBuilder.build([{
        controller: picture,
        children:[{controller:picture_mark}, {controller:message_topic}]
    }])
    return  router;
}
export {PictureController, Picture_MarkController, loadPicture}
