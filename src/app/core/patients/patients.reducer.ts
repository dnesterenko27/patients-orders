import { createReducer, on } from '@ngrx/store';
import { Patient, PatientsState } from '../../shared/models/patient.model';
import {
  actionAddPatientToFavourites,
  actionGetPatients,
  actionGetPatientsFailure,
  actionGetPatientsSuccess,
  actionRemovePatientFromFavourites,
} from './patients.actions';

export const initialState: PatientsState = {
  items: [],
  loading: false,
  error: null,
  favourites: [],
};

export const toggleFavourite = (state: PatientsState, code: Patient['code']) => state.items.map(item => {
  if (item.code === code) {
    return { ...item, inFavourites: !item.inFavourites };
  }
  return item;
});

export const patientsReducer = createReducer(
  initialState,
  on(actionGetPatients, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(actionGetPatientsSuccess, (state, { patients }) => ({
    ...state,
    items: patients,
    loading: false,
  })),
  on(actionGetPatientsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(actionAddPatientToFavourites, (state, patient) => ({
    ...state,
    items: toggleFavourite(state, patient.code),
    favourites: [...state.favourites, { ...patient, inFavourites: true }],
  })),
  on(actionRemovePatientFromFavourites, (state, { code }) => ({
    ...state,
    items: toggleFavourite(state, code),
    favourites: state.favourites.filter(item => item.code !== code),
  })),
);
