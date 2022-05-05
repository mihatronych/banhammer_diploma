import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Post_MarkRepository} from "../../repositories/post_mark-repository";
import {Request, Response} from "express";
import {Picture} from "../../entities/picture";

export class Picture_MarkController extends BasicController<Post_MarkRepository> {
    constructor(connection:Connection) {
        super(connection, Post_MarkRepository, false);
        this.initDefault()
    }

    async methodPost(req: Request, res: Response, next: any): Promise<Response> {
        req.body.picture = await this._repository.manager.findOne(Picture, {where: {id: req.params.keypicture}})
        return super.methodPost(req, res, next)
    }
}
