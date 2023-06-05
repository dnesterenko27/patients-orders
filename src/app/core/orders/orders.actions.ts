import { createAction, props } from '@ngrx/store';
import { Order } from '../../shared/models/order.model';

export enum EOrdersActions {
  GetOrders = '[Order] Get Orders',
  GetOrdersSuccess = '[Order] Get Orders Success',
  GetOrdersFailure = '[Order] Get Orders Failure',
  AddOrderToFavourites = '[Order] Add To Favourites',
  RemoveOrderFromFavourites = '[Order] Remove From Favourites',
}

export const actionGetOrders = createAction(EOrdersActions.GetOrders);

export const actionGetOrdersSuccess = createAction(
  EOrdersActions.GetOrdersSuccess,
  props<{ orders: Order[] }>(),
);

export const actionGetOrdersFailure = createAction(
  EOrdersActions.GetOrdersFailure,
  props<{ error: string }>(),
);

export const actionAddOrderToFavourites = createAction(
  EOrdersActions.AddOrderToFavourites,
  props<Order>(),
);

export const actionRemoveOrderFromFavourites = createAction(
  EOrdersActions.RemoveOrderFromFavourites,
  props<{ orderNum: Order['orderNum'] }>(),
);
