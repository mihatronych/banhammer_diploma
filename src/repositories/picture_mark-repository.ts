import BasicRepository from "../core/repositories/basic-repository";
import {Picture_mark} from "../entities/picture_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Picture_mark)
export class Picture_MarkRepository extends BasicRepository<Picture_mark> {
    _tableName = 'picture_marks'
    _urlSegment = '/picture_marks'
}