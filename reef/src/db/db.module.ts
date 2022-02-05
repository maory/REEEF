import { DataStore } from 'notarealdb';
import { Storefront } from 'src/graphql';
import { Injectable } from '@nestjs/common';

const db = new DataStore('./../../resources/data');

@Injectable()
export class DBModule {
    getAllStoreFronts() : Storefront[] {
        return db.collection<Storefront>('storefronts').list();
    }
};