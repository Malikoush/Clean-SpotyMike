import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IUser } from '../interfaces/user';
import { FirestoreService } from './firestore.service';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private fireStore = inject(FirestoreService);
  private localStorage = inject(LocalstorageService);

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.apiUrl}/user`)
      .pipe(map((res) => res));
  }

  // login(email: string, password: string): Observable<any> {
  //   return this.http
  //     .post<any>(`${this.apiUrl}/login`, {
  //       email: email, // Modifier "username" en "email"
  //       password: password,
  //     })
  //     .pipe(map((res) => res));

  //   // .pipe(catchError(this.errorRequest));
  // }

  // private route = environment.url_api;
  // constructor() { }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'auth/user/signin', {
      email: email,
      password: password,
    });
    // .pipe(catchError(this.errorRequest));
  }
  register() {}

  // errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
  //   return of({ ...httpError.error, error: true });
  // }
}
