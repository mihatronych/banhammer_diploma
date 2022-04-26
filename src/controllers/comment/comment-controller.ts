import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {CommentRepository} from "../../repositories/comment-repository";

export class CommentController extends BasicController<CommentRepository> {
    constructor(connection:Connection) {
        super(connection, CommentRepository);
    }
}
