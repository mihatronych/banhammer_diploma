import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {UserRepository} from "../../repositories/user-repository";
import {Request, Response} from "express";
import {Role} from "../../entities/role";

export class UserController extends BasicController<UserRepository> {
    constructor(connection:Connection) {
        super(connection, UserRepository, false);
        this.initDefault();
    }

    async methodPost(req: Request, res: Response, next: any): Promise<Response> {
        req.body.role = await this._repository.manager.findOne(Role, {where: {id: req.params.keyrole}})
        return super.methodPost(req, res, next)
    }
}
