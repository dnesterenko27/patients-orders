import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsGridComponent } from './patients/patients-grid/patients-grid.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
            declarations: [PatientsComponent, PatientsGridComponent],
            imports: [CommonModule, SharedModule, PatientsRoutingModule, MatTableModule],
            providers: [],
            exports: [
              PatientsGridComponent,
            ],
          })
export class PatientsModule {
}
