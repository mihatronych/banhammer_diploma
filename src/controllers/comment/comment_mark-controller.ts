import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Comment_MarkRepository} from "../../repositories/comment_mark-repository";

export class Comment_MarkController extends BasicController<Comment_MarkRepository> {
    constructor(connection:Connection) {
        super(connection, Comment_MarkRepository);
    }
}
