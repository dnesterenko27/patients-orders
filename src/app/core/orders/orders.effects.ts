import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { actionGetOrders, actionGetOrdersFailure, actionGetOrdersSuccess } from './orders.actions';

@Injectable()
export class OrdersEffects {
  getOrders$ = createEffect(() =>
                              this.actions$.pipe(
                                ofType(actionGetOrders),
                                mergeMap(() =>
                                           this.api.getOrders().pipe(
                                             map(orders => actionGetOrdersSuccess({ orders })),
                                             catchError(error => of(actionGetOrdersFailure({ error: error.message }))),
                                           ),
                                ),
                              ),
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) {
  }
}
