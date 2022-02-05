import { DataStore } from 'notarealdb';
import { Storefront } from 'src/graphql';
import { Injectable } from '@nestjs/common';

const db = new DataStore('./../../resources/data');
// not real db getting data from files.
@Injectable()
export class DBService {
    getAllStoreFronts() : Storefront[] {
        return db.collection<Storefront>('storefronts').list();
    }

    getAllStorefrontsNearZipCode(zipCode: number) : Storefront[] {
        return db.collection<Storefront>('storefronts').list()
        // filtering close zip codes only by number
        .filter(x=> zipCode <= x.zipCode + 10 && zipCode >= x.zipCode - 10);
    }
};