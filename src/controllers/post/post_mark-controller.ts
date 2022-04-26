import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {Post_MarkRepository} from "../../repositories/post_mark-repository";

export class Post_MarkController extends BasicController<Post_MarkRepository> {
    constructor(connection:Connection) {
        super(connection, Post_MarkRepository);
    }
}
