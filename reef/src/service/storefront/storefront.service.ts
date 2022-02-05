import { Injectable } from '@nestjs/common';
import { Storefront } from 'src/graphql';
import { DBService } from 'src/db/db.service';

@Injectable()
export class StorefrontService {

    constructor(private dbService : DBService){}

    getAllStoreFronts() : Storefront[] {
        return ;
    }

    getAllStorefrontsInMyArea(zipCode: number): Storefront[] {
        return [{ id: '1', name : "storefront1", zipCode: 1122,address : "storefront1 address", imageUrl: "imageUrl" }];
    }
}
