import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { StorefrontService } from "src/service/storefront/storefront.service";
import { Storefront, Menu } from 'src/graphql';
import { MenuService } from 'src/service/menu/menu.service';
import { OrderService } from 'src/service/order/order.service';

@Resolver('Storefront')
export class StoreFrontResolver {
    constructor(
        private storefrontService : StorefrontService,
        private menuService : MenuService,
        private orderService : OrderService
        ) {}

    @Query()
    getAllStorefronts() : Storefront[] {
        return this.storefrontService.getAllStoreFronts();
    }

    @Query()
    getAllStorefrontsInMyArea(@Args('zipCode') zipcode: number): Storefront[] {
        return this.storefrontService.getAllStorefrontsInMyArea(zipcode);
    }

    @Resolver('Storefront')
    @ResolveField()
    menu(@Parent() storefront) : Menu {
        const { id } = storefront; // must be a cleaner way doing that.
        return this.menuService.getStorefrontMenu(id);
    }

    @Resolver('Storefront')
    @ResolveField()
    orders(@Parent() storefront) {
        const { id } = storefront; // must be a cleaner way doing that.
        return this.orderService.getAllStorefrontOrders(id);
    }
}