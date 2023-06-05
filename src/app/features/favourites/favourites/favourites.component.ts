import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../core/core.state';
import { selectOrdersFavourites } from '../../../core/orders/orders.selectors';
import { selectPatientsFavourites } from '../../../core/patients/patients.selectors';
import { Patient } from '../../../shared/models/patient.model';

@Component({
             selector: 'st-favourites',
             templateUrl: './favourites.component.html',
             styleUrls: ['./favourites.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class FavouritesComponent {
  patientsFavourites$: Observable<Patient[]> = this.store.pipe(select(selectPatientsFavourites));
  ordersFavourites$: Observable<Patient[]> = this.store.pipe(select(selectOrdersFavourites));

  constructor(private store: Store<AppState>) {
  }
}
