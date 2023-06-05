import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { actionGetPatients, actionGetPatientsFailure, actionGetPatientsSuccess } from './patients.actions';

@Injectable()
export class PatientEffects {
  getPatients$ = createEffect(() =>
                                this.actions$.pipe(
                                  ofType(actionGetPatients),
                                  mergeMap(() =>
                                             this.api.getPatients().pipe(
                                               map(patients => actionGetPatientsSuccess({ patients })),
                                               catchError(error => of(actionGetPatientsFailure({ error: error.message }))),
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
