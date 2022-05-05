import BasicController from "../../core/controllers/basic-controller";
import {Connection, Like} from "typeorm";
import {RoleRepository} from "../../repositories/role-repository";

export class RoleController extends BasicController<RoleRepository> {
    constructor(connection:Connection) {
        super(connection, RoleRepository, false);
        this.initDefault();
    }
}
