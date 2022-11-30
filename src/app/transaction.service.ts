import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from './transaction';
import { catchError, map, tap } from 'rxjs/operators';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
};

const requestOptions = {
  headers: new HttpHeaders(headerDict)
};

@Injectable({ providedIn: 'root' })
export class TransactionService {

  // TODO: Move this to some config property file
  private transactionUrl = 'http://localhost:8080/transactions';

  constructor(
    private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl, requestOptions)
      .pipe(
        catchError(this.handleError<Transaction[]>('getTransactions, []'))
      );
  }

  // TODO implement getting a transaction by id

  // TODO add transactions

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO more detailed error
      console.error("Something went wrong");

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
