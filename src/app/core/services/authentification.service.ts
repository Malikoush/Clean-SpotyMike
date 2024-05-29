import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestError } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private http = inject(HttpClient);
  private route = environment.url_api;
  constructor() { }
  login(email: string, password: string):Observable<LoginRequestError> {
    return this.http
      .post(`${this.route}/auth/login`, {
        email: email,
        password: password,
      })
      .pipe(catchError(this.errorRequest));
  }
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}