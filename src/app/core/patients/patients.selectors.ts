import { createSelector } from '@ngrx/store';
import { PatientsState } from '../../shared/models/patient.model';
import { selectPatientsState } from '../core.state';

export const selectPatients = createSelector(
  selectPatientsState,
  (state: PatientsState) => state,
);

export const selectPatientsList = createSelector(
  selectPatients,
  (state: PatientsState) => state.items,
);
export const selectPatientsLoading = createSelector(
  selectPatients,
  (state: PatientsState) => state.loading,
);

export const selectPatientsFavourites = createSelector(
  selectPatients,
  (state: PatientsState) => state.favourites,
);
