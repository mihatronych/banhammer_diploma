import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {PostRepository} from "../../repositories/post-repository";

export class PostController extends BasicController<PostRepository> {
    constructor(connection:Connection) {
        super(connection, PostRepository);
    }
}
