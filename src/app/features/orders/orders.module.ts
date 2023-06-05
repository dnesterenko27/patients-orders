import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersGridComponent } from './orders/orders-grid/orders-grid.component';

import { OrdersComponent } from './orders/orders.component';

@NgModule({
            declarations: [OrdersComponent, OrdersGridComponent],
            imports: [CommonModule, SharedModule, OrdersRoutingModule, MatTableModule],
            exports: [
              OrdersGridComponent,
            ],
          })
export class OrdersModule {
}
