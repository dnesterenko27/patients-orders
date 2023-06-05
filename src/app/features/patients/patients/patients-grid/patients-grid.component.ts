import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { AppState } from '../../../../core/core.state';
import {
  actionAddPatientToFavourites,
  actionRemovePatientFromFavourites,
} from '../../../../core/patients/patients.actions';
import { Patient } from '../../../../shared/models/patient.model';
import { filterInputValue } from '../../../../shared/utils/util';

@Component({
             selector: 'st-patients-grid',
             templateUrl: './patients-grid.component.html',
             styleUrls: ['./patients-grid.component.scss'],
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class PatientsGridComponent implements OnInit {
  displayedColumns = ['age', 'name', 'sex', 'code', 'searchedBy', 'favourite'];
  @Input() dataSource: Patient[] | null;
  @Input() loading: boolean;
  @Input() showSearch: boolean = false;
  searchQuery$: Observable<string>;

  searchControl = new FormControl('');

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.initSearchQuery();
  }

  initSearchQuery(): void {
    this.searchQuery$ = this.searchControl?.valueChanges.pipe(
      filter((v) => filterInputValue(v, 1)),
      debounceTime(300),
    );
  }

  getPatientAge(patient: Patient): number | string {
    return new Date().getFullYear() - new Date(patient.birthDate.formattedDate).getFullYear() || '-';
  }

  toggleFavourite(patient: Patient): void {
    this.store.dispatch(patient.inFavourites ? actionRemovePatientFromFavourites({ code: patient.code }) : actionAddPatientToFavourites(patient));
  }

  trackByFn(item: Patient): boolean {
    return item.inFavourites;
  }
}
