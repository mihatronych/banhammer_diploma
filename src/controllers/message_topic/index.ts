import {Connection} from "typeorm";
import {Router} from "express";
import {Message_TopicController} from "./message_topic-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";

const loadMessageTopic = (connection: Connection): Router => {
    const message_topic = new Message_TopicController(connection);
    const router = RouterBuilder.build([{
        controller: message_topic
    }])
    return  router;
}
export {Message_TopicController,  loadMessageTopic}