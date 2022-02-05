import { Injectable } from '@nestjs/common';
import { Menu } from 'src/graphql';

@Injectable()
export class MenuService {

    getStorefrontMenu(storeFrontId : number) : Menu {
        return new Menu();
    }
}
