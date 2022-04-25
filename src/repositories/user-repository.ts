import BasicRepository from "../core/repositories/basic-repository";
import {User} from "../entities/user";
import {EntityRepository} from "typeorm";

@EntityRepository(User)
export class UserRepository extends BasicRepository<User> {
    _tableName = 'users'
    _urlSegment = '/users'
}