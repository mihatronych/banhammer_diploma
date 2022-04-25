import BasicRepository from "../core/repositories/basic-repository";
import {Post} from "../entities/post";
import {EntityRepository} from "typeorm";

@EntityRepository(Post)
export class PostRepository extends BasicRepository<Post> {
    _tableName = 'posts'
    _urlSegment = '/posts'
}