import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IUser } from '../interfaces/user';
import { FirestoreService } from './firestore.service';
import { LocalstorageService } from './localstorage.service';
import { RequestError } from '../interfaces/requestError';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private fireStore = inject(FirestoreService);
  private localStorage = inject(LocalstorageService);

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.apiUrl + 'auth/user/signin', {
        email: email,
        password: password,
      })
      .pipe(catchError(this.errorRequest));
  }
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<RequestError> {
    return of({ ...httpError.error, error: true });
  }
}
