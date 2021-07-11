import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AvenuesService {
  constructor(private http: HttpClient) {}
  private avenidasUrl = environment.avenueURL; // URL to web api

  getAvenidas(): Observable<any> {
    return this.http.get<any>(this.avenidasUrl);
  }
}
