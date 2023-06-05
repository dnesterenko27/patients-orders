import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../core/core.module';
import { actionGetPatients } from '../../../core/patients/patients.actions';
import { selectPatientsList, selectPatientsLoading } from '../../../core/patients/patients.selectors';
import { Patient } from '../../../shared/models/patient.model';

@Component({
             selector: 'st-patients',
             templateUrl: './patients.component.html',
             styleUrls: ['./patients.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PatientsComponent {
  patientsList$: Observable<Patient[]> = this.store.pipe(select(selectPatientsList));
  patientsLoading$: Observable<boolean> = this.store.pipe(select(selectPatientsLoading));

  constructor(private store: Store<AppState>) {
  }

  getPatients(): void {
    this.store.dispatch(actionGetPatients());
  }
}
