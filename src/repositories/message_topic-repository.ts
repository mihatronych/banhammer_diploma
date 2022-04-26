import BasicRepository from "../core/repositories/basic-repository";
import {Message_topic} from "../entities/message_topic";
import {EntityRepository} from "typeorm";

@EntityRepository(Message_topic)
export class Message_TopicRepository extends BasicRepository<Message_topic> {
    _tableName = 'message_topics'
    _urlSegment = '/message_topics'
}