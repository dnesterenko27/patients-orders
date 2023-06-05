import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { OrdersState } from '../shared/models/order.model';
import { PatientsState } from '../shared/models/patient.model';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { debug } from './meta-reducers/debug.reducer';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { ordersReducer } from './orders/orders.reducer';
import { patientsReducer } from './patients/patients.reducer';
import { RouterStateUrl } from './router/router.state';
import { SettingsState } from './settings/settings.model';
import { settingsReducer } from './settings/settings.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  patients: patientsReducer,
  orders: ordersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage,
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth',
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectPatientsState = createFeatureSelector<
  AppState,
  PatientsState
>('patients');

export const selectOrdersState = createFeatureSelector<
  AppState,
  OrdersState
>('orders');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  patients: PatientsState;
  orders: OrdersState;
}
