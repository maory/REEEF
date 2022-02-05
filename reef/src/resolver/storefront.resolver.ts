import { Resolver, Query, Args } from '@nestjs/graphql';
import { StorefrontService } from "src/service/storefront/storefront.service";
import { Storefront } from 'src/graphql';

@Resolver('Storefront')
export class StoreFrontResolver {
    constructor(private storefrontService : StorefrontService) {}

    @Query()
    getAllStorefronts() : Storefront[] {
        return this.storefrontService.getAllStoreFronts();
    }

    @Query()
    getAllStorefrontsInMyArea(@Args('zipCode') zipcode: number): Storefront[] {
        // TODO : return right method
        return [];
    }
}