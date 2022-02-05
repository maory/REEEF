
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CoupounType {
    FLAT_SUM = "FLAT_SUM",
    PERCENTAGE_BASED = "PERCENTAGE_BASED"
}

export class OrderInput {
    customerId: number;
    couponIds?: number[];
    storeFrontId?: number;
}

export abstract class IQuery {
    abstract getAllStorefronts(): Storefront[] | Promise<Storefront[]>;

    abstract getAllStorefrontsInMyArea(zipCode?: number): Storefront[] | Promise<Storefront[]>;

    abstract getStorefrontMenu(storeFrontId: string): Menu | Promise<Menu>;
}

export abstract class IMutation {
    abstract createCustomerOrder(customerOrder: Order): number | Promise<number>;
}

export class Storefront {
    id: string;
    name?: string;
    zipCode: number;
    address: string;
    imageUrl?: string;
    menu?: Menu;
    orders?: Order[];
}

export class Menu {
    storefrontId: string;
    items?: MenuItem[];
}

export class MenuItem {
    item: string;
    priceInCents: number;
}

export class Customer {
    id: string;
    name: string;
    address: string;
}

export class Order {
    id: string;
    customer: Customer;
    coupons?: Coupon[];
    storefront: Storefront;
}

export class Coupon {
    id: string;
    type: CoupounType;
    value: number;
}
