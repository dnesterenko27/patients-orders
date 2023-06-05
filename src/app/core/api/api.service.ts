import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Order } from '../../shared/models/order.model';
import { Patient } from '../../shared/models/patient.model';

const API_URL = 'https://api.mocki.io/v2/';

@Injectable({
              providedIn: 'root',
            })
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${API_URL}51597ef3`).pipe(pluck('patient'));
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_URL}79fb05cb`).pipe(pluck('order'));
  }

}
