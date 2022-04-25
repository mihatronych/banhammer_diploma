import BasicRepository from "../core/repositories/basic-repository";
import {Comment_Mark} from "../entities/comment_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Comment_Mark)
export class Comment_MarkRepository extends BasicRepository<Comment_Mark> {
    _tableName = 'comment_marks'
    _urlSegment = '/comment_marks'
}