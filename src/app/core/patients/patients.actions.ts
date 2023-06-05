import { createAction, props } from '@ngrx/store';
import { Patient } from '../../shared/models/patient.model';

export enum EPatientsActions {
  GetPatients = '[Patient] Get Patients',
  GetPatientsSuccess = '[Patient] Get Patients Success',
  GetPatientsFailure = '[Patient] Get Patients Failure',
  AddPatientToFavourites = '[Patient] Add To Favourites',
  RemovePatientFromFavourites = '[Patient] Remove From Favourites',
}

export const actionGetPatients = createAction(EPatientsActions.GetPatients);

export const actionGetPatientsSuccess = createAction(
  EPatientsActions.GetPatientsSuccess,
  props<{ patients: Patient[] }>(),
);

export const actionGetPatientsFailure = createAction(
  EPatientsActions.GetPatientsFailure,
  props<{ error: string }>(),
);

export const actionAddPatientToFavourites = createAction(
  EPatientsActions.AddPatientToFavourites,
  props<Patient>(),
);

export const actionRemovePatientFromFavourites = createAction(
  EPatientsActions.RemovePatientFromFavourites,
  props<{ code: Patient['code'] }>(),
);
