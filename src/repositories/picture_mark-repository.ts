import BasicRepository from "../core/repositories/basic-repository";
import {Picture_Mark} from "../entities/picture_mark";
import {EntityRepository} from "typeorm";

@EntityRepository(Picture_Mark)
export class Picture_MarkRepository extends BasicRepository<Picture_Mark> {
    _tableName = 'picture_marks'
    _urlSegment = '/picture_marks'
}