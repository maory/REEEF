import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { StorefrontService } from "src/service/storefront/storefront.service";
import { Storefront } from 'src/graphql';

@Resolver('Order')
export class OrderResolver {
    constructor(private storefrontService : StorefrontService) {}

    @Mutation()
    createOrder() : Storefront[] {
        return this.storefrontService.getAllStoreFronts();
    }

   
}