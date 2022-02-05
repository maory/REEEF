import { Injectable } from '@nestjs/common';
import { Order } from 'src/graphql';

@Injectable()
export class OrderService {

    getAllStorefrontOrders(storeFrontId : number): Order[] {
        return [];
    }
}
