import BasicRepository from "../core/repositories/basic-repository";
import {Role} from "../entities/role";
import {EntityRepository} from "typeorm";

@EntityRepository(Role)
export class RoleRepository extends BasicRepository<Role> {
    _tableName = 'roles'
    _urlSegment = '/roles'
}