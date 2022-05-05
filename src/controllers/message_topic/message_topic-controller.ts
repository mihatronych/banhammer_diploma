import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Message_TopicRepository} from "../../repositories/message_topic-repository";
import {Request, Response} from "express";
import BasicRepository from "../../core/repositories/basic-repository";
import {Message_topic} from "../../entities/message_topic";

export class Message_TopicController extends BasicController<Message_TopicRepository> {
    constructor(connection:Connection) {
        super(connection, Message_TopicRepository,false);
        this.getPostsByMessageTopicId = this.getPostsByMessageTopicId.bind(this);
        this.router.get(`/:${this.repositoryKey}/posts/`, this.getPostsByMessageTopicId)
        this.getPicturesByMessageTopicId = this.getPicturesByMessageTopicId.bind(this);
        this.router.get(`/:${this.repositoryKey}/pictures/`, this.getPicturesByMessageTopicId)
        this.getCommentsByMessageTopicId = this.getCommentsByMessageTopicId.bind(this);
        this.router.get(`/:${this.repositoryKey}/comments/`, this.getCommentsByMessageTopicId)
        this.initDefault()
    }

    async getPostsByMessageTopicId(req: Request, res: Response, next: any): Promise<Response> {
        let entities = await (this._repository as BasicRepository<Message_topic>).findOne({
            relations: ["posts"],
            where: {id: req.params.keymessage_topic}
        })
        return res.json(entities.posts)
    }

    async getPicturesByMessageTopicId(req: Request, res: Response, next: any): Promise<Response> {
        let entities = await (this._repository as BasicRepository<Message_topic>).findOne({
            relations: ["pictures"],
            where: {id: req.params.keymessage_topic}
        })
        return res.json(entities.pictures)
    }

    async getCommentsByMessageTopicId(req: Request, res: Response, next: any): Promise<Response> {
        let entities = await (this._repository as BasicRepository<Message_topic>).findOne({
            relations: ["comments"],
            where: {id: req.params.keymessage_topic}
        })
        return res.json(entities.comments)
    }
}