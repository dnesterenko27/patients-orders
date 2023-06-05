import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { AppState } from '../../../../core/core.state';
import { actionAddOrderToFavourites, actionRemoveOrderFromFavourites } from '../../../../core/orders/orders.actions';
import { Order } from '../../../../shared/models/order.model';
import { filterInputValue } from '../../../../shared/utils/util';

@Component({
             selector: 'st-orders-grid',
             templateUrl: './orders-grid.component.html',
             styleUrls: ['./orders-grid.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class OrdersGridComponent implements OnInit {
  displayedColumns = ['orderName', 'orderNum', 'facility', 'physician', 'status', 'favourite'];
  @Input() dataSource: Order[] | null;
  @Input() loading: boolean;
  @Input() showSearch: boolean = false;

  searchQuery$: Observable<string>;

  searchControl = new FormControl('');

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initSearchQuery();
  }

  initSearchQuery(): void {
    this.searchQuery$ = this.searchControl?.valueChanges.pipe(
      filter((v) => filterInputValue(v, 1)),
      debounceTime(300),
    );
  }

  toggleFavourite(order: Order): void {
    this.store.dispatch(order.inFavourites ? actionRemoveOrderFromFavourites({ orderNum: order.orderNum }) : actionAddOrderToFavourites(order));
  }

  trackByFn(item: Order): boolean {
    return item.inFavourites;
  }
}
