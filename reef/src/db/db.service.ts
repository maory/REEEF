import { DataStore } from 'notarealdb';
import { Storefront } from 'src/graphql';
import { Injectable } from '@nestjs/common';

const storefronts = require('../../resources/data/storefronts.json');

// not real db getting data from files.
@Injectable()
export class DBService {
    getAllStoreFronts() : Storefront[] {
        return storefronts;
    }

    getAllStorefrontsNearZipCode(zipCode: number) : Storefront[] {
        return storefronts
        .filter(x=> zipCode <= x.zipCode + 10 && zipCode >= x.zipCode - 10);
    }
};