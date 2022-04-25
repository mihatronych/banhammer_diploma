import BasicRepository from "../core/repositories/basic-repository";
import {Post_Mark} from "../entities/post_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Post_Mark)
export class Post_MarkRepository extends BasicRepository<Post_Mark> {
    _tableName = 'post_marks'
    _urlSegment = '/post_marks'
}