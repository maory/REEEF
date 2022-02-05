import { DataStore } from 'notarealdb';
import { StoreFront } from 'src/graphql';
import { Injectable } from '@nestjs/common';

const db = new DataStore('./../../resources/data');

@Injectable()
export class DBModule {
    getAllStoreFronts() : StoreFront[] {
        return db.collection<StoreFront>('storefronts').list();
    }
};