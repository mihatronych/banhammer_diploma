import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {UserRepository} from "../../repositories/user-repository";

export class PictureController extends BasicController<UserRepository> {
    constructor(connection:Connection) {
        super(connection, UserRepository);
    }
}
