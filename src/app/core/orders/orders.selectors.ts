import { createSelector } from '@ngrx/store';
import { OrdersState } from '../../shared/models/order.model';
import { selectOrdersState } from '../core.state';

export const selectOrders = createSelector(
  selectOrdersState,
  (state: OrdersState) => state,
);

export const selectOrdersList = createSelector(
  selectOrders,
  (state: OrdersState) => state.items,
);
export const selectOrdersLoading = createSelector(
  selectOrders,
  (state: OrdersState) => state.loading,
);

export const selectOrdersFavourites = createSelector(
  selectOrders,
  (state: OrdersState) => state.favourites,
);
