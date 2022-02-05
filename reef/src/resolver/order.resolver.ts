import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { StorefrontService } from "src/service/storefront/storefront.service";
import { Storefront, Order } from 'src/graphql';

@Resolver('Order')
export class OrderResolver {
    constructor(private storefrontService : StorefrontService) {}

    @Mutation()
    createCustomerOrder(inputOrder : Order) : Order {
        return null;
    }

   
}