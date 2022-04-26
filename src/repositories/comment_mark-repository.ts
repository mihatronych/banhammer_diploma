import BasicRepository from "../core/repositories/basic-repository";
import {Comment_mark} from "../entities/comment_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Comment_mark)
export class Comment_MarkRepository extends BasicRepository<Comment_mark> {
    _tableName = 'comment_marks'
    _urlSegment = '/comment_marks'
}