import BasicRepository from "../core/repositories/basic-repository";
import {Comment} from "../entities/comment";
import {EntityRepository} from "typeorm";

@EntityRepository(Comment)
export class CommentRepository extends BasicRepository<Comment> {
    _tableName = 'comments'
    _urlSegment = '/comments'
}