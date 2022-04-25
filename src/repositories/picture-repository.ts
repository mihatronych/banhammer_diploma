import BasicRepository from "../core/repositories/basic-repository";
import {Picture} from "../entities/picture";
import {EntityRepository} from "typeorm";

@EntityRepository(Picture)
export class PictureRepository extends BasicRepository<Picture> {
    _tableName = 'pictures'
    _urlSegment = '/pictures'
}