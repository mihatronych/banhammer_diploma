import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Post_MarkRepository} from "../../repositories/post_mark-repository";
import {Request, Response} from "express";
import {Post} from "../../entities/post";

export class Post_MarkController extends BasicController<Post_MarkRepository> {
    constructor(connection:Connection) {
        super(connection, Post_MarkRepository, false);
        this.initDefault();
    }

    async methodPost(req: Request, res: Response, next: any): Promise<Response> {
        req.body.post = await this._repository.manager.findOne(Post, {where: {id: req.params.keypost}})
        return super.methodPost(req, res, next)
    }
}
