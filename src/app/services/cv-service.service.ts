import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICvData } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<ICvData> {
    return this.http.get<ICvData>('./assets/data/data.json');
  }
}
