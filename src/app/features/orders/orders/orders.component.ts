import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../core/core.module';
import { actionGetOrders } from '../../../core/orders/orders.actions';
import { selectOrdersList, selectOrdersLoading } from '../../../core/orders/orders.selectors';
import { Order } from '../../../shared/models/order.model';

@Component({
             selector: 'st-orders',
             templateUrl: './orders.component.html',
             styleUrls: ['./orders.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class OrdersComponent {
  ordersList$: Observable<Order[]> = this.store.pipe(select(selectOrdersList));
  ordersLoading$: Observable<boolean> = this.store.pipe(select(selectOrdersLoading));

  constructor(private store: Store<AppState>) {
  }

  getOrders(): void {
    this.store.dispatch(actionGetOrders());
  }
}
