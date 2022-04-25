import {Connection} from "typeorm";
import {Router} from "express";
import {UserController} from "./user-controller";
import {RoleController} from "./role-controller";
import {RouterBuilder} from "../../core/controllers/router-builder";

const loadUser = (connection: Connection): Router => {
    const role = new RoleController(connection);
    const user = new UserController(connection);
    const router = RouterBuilder.build([{
        controller: role,
        children:[{controller:user}]
    }])
    return  router;
}
export {UserController, RoleController, loadUser}
