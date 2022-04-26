import BasicRepository from "../core/repositories/basic-repository";
import {Post_mark} from "../entities/post_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Post_mark)
export class Post_MarkRepository extends BasicRepository<Post_mark> {
    _tableName = 'post_marks'
    _urlSegment = '/post_marks'
}