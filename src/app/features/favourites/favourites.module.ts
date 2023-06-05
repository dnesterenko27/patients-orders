import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { OrdersModule } from '../orders/orders.module';
import { PatientsModule } from '../patients/patients.module';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
            declarations: [FavouritesComponent],
            imports: [CommonModule, SharedModule, FavouritesRoutingModule, PatientsModule, OrdersModule],
          })
export class FavouritesModule {
}
