import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Request, Response} from "express";
import BasicRepository from "../../core/repositories/basic-repository";
import {PictureRepository} from "../../repositories/picture-repository";
import {Picture} from "../../entities/picture";
import {Comment} from "../../entities/comment";
import {Post} from "../../entities/post";
import {Message_topic} from "../../entities/message_topic";

export class PictureController extends BasicController<PictureRepository> {
    constructor(connection:Connection) {
        super(connection, PictureRepository, false);

        this.getAllMerged = this.getAllMerged.bind(this);
        this.router.get('/merged', this.getAllMerged)

        this.initDefault();
    }

    //переделать под апи flask
    async methodPost(req: Request, res: Response, next: any): Promise<Response> {
        req.body.preprocessed_text = req.body.text
        if(req.body.comment_id){
            req.body.comment = await this._repository.manager.findOne(Comment, {where: {id: req.body.comment_id}})
        }
        if(req.body.post_id){
            req.body.post = await this._repository.manager.findOne(Post, {where: {id: req.body.post_id}})
        }
        req.body.message_topics_ids.map(mt_id => (
            req.body.message_topics.push(this._repository.manager.findOne(Message_topic, {where: {id: mt_id}}))
        ))
        return super.methodPost(req, res, next)
    }

    async getAllMerged(req: Request, res: Response, next: any): Promise<Response> {
        let merged_entities = []
        let entities = await (this._repository as BasicRepository<Picture>).find()
        entities.map(picture =>
        {
            let temp = {}
            temp["id"] = picture.id
            temp["text"] = picture.text
            temp["publication_date"] = picture.publication_date
            temp["message_topics"] = picture.message_topics
            temp["preprocessed_text"] = picture.preprocessed_text
            temp["post"] = picture.post
            temp["comment"] = picture.comment
            temp["is_toxic"] = 0
            temp["is_toxic_sexist"] = 0
            temp["is_toxic_to_person"] = 0
            temp["is_toxic_to_group"] = 0
            temp["is_negative"] = 0
            temp["is_positive"] = 0
            temp["is_neutral"] = 0
            temp["skip"] = 0
            let counter = 0
            picture.picture_marks.map(mark => {
                counter += 1
                temp["is_toxic"] += mark.is_toxic
                temp["is_toxic_sexist"] += mark.is_toxic_sexist
                temp["is_toxic_to_person"] += mark.is_toxic_to_person
                temp["is_toxic_to_group"] += mark.is_toxic_to_group
                temp["is_negative"] += mark.is_negative
                temp["is_positive"] += mark.is_positive
                temp["is_neutral"] += mark.is_neutral
                temp["skip"] += mark.skip
            })
            temp["is_toxic"] = temp["is_toxic"] / counter
            temp["is_toxic_sexist"] = temp["is_toxic_sexist"] / counter
            temp["is_toxic_to_person"] = temp["is_toxic_to_person"] / counter
            temp["is_toxic_to_group"] = temp["is_toxic_to_group"] / counter
            temp["is_negative"] = temp["is_negative"] / counter
            temp["is_positive"] = temp["is_positive"] / counter
            temp["is_neutral"] = temp["is_neutral"] / counter
            temp["skip"] = temp["skip"] / counter
            merged_entities.push(temp)
        })

        // Здесь будет обращение к классификатору

        return res.json(merged_entities);
    }
}
