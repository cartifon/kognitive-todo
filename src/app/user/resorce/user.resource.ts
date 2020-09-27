import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResource {

  apptoken = environment.apptoken;
  tenantid = environment.tenantid;

  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
  }

  login(email: string, password: string): Observable<any> {
    this.headers.append('apptoken', this.apptoken);
    this.headers.append('content-type', 'application/x-www-form-urlencoded');
    const body = { tenantid: this.tenantid, id_type: 'email', email, password };

    return this.httpClient.post(`${environment.apiUrl}login/password`, body, { headers: this.headers });
  }
}
