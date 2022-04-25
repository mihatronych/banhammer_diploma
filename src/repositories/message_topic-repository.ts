import BasicRepository from "../core/repositories/basic-repository";
import {Message_Topic} from "../entities/message_topic";
import {EntityRepository} from "typeorm";

@EntityRepository(Message_Topic)
export class Message_TopicRepository extends BasicRepository<Message_Topic> {
    _tableName = 'message_topics'
    _urlSegment = '/message_topics'
}