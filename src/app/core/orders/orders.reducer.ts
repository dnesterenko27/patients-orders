import { createReducer, on } from '@ngrx/store';
import { Order, OrdersState } from '../../shared/models/order.model';
import {
  actionAddOrderToFavourites,
  actionGetOrders,
  actionGetOrdersFailure,
  actionGetOrdersSuccess,
  actionRemoveOrderFromFavourites,
} from './orders.actions';

export const initialState: OrdersState = {
  items: [],
  loading: false,
  error: null,
  favourites: [],
};

export const toggleFavourite = (state: OrdersState, orderNum: Order['orderNum']) => state.items.map(item => {
  if (item.orderNum === orderNum) {
    return { ...item, inFavourites: !item.inFavourites };
  }
  return item;
});

export const ordersReducer = createReducer(
  initialState,
  on(actionGetOrders, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(actionGetOrdersSuccess, (state, { orders }) => ({
    ...state,
    items: orders,
    loading: false,
  })),
  on(actionGetOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(actionAddOrderToFavourites, (state, order) => ({
    ...state,
    items: toggleFavourite(state, order.orderNum),
    favourites: [...state.favourites, { ...order, inFavourites: true }],
  })),
  on(actionRemoveOrderFromFavourites, (state, { orderNum }) => ({
    ...state,
    items: toggleFavourite(state, orderNum),
    favourites: state.favourites.filter(item => item.orderNum !== orderNum),
  })),
);
