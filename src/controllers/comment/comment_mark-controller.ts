import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Comment_MarkRepository} from "../../repositories/comment_mark-repository";
import {Request, Response} from "express";
import {Comment} from "../../entities/comment";

export class Comment_MarkController extends BasicController<Comment_MarkRepository> {
    constructor(connection:Connection) {
        super(connection, Comment_MarkRepository, false);
        this.initDefault()
    }

    async methodPost(req: Request, res: Response, next: any): Promise<Response> {
        req.body.comment = await this._repository.manager.findOne(Comment, {where: {id: req.params.keycomment}})
        return super.methodPost(req, res, next)
    }
}
