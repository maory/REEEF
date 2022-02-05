import { Injectable } from '@nestjs/common';
import { Storefront } from 'src/graphql';

@Injectable()
export class StorefrontService {

    getAllStoreFronts() : Storefront[] {
        return [{ id: '1', name : "storefront1", zipCode: 1122,address : "storefront1 address", imageUrl: "imageUrl" }];
    }

    getAllStoreFrontsInMyArea(zipCode: number) {
        return [{ id: '1', name : "storefront1", zipCode: 1122,address : "storefront1 address", imageUrl: "imageUrl" }];
    }
}
