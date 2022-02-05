
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

export abstract class IQuery {
    abstract getAllStoreFronts(): StoreFront[] | Promise<StoreFront[]>;

    abstract getAllStoreFrontsInMyArea(zipCode?: number): StoreFront[] | Promise<StoreFront[]>;

    abstract getStoreFrontMenu(storeFrontId: string): Menu | Promise<Menu>;
}

export abstract class IMutation {
    abstract createCustomerOrder(customerOrder: Order): number | Promise<number>;
}

export class StoreFront {
    id: string;
    zipCode: number;
    address: string;
    imageUrl?: string;
    menu?: Menu;
    orders?: Order[];
}

export class Menu {
    id: string;
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
    orderingCustomer: number;
    coupons?: Coupon[];
    storeFront: StoreFront;
}

export class Coupon {
    id: string;
    type: CoupounType;
    value: number;
}
