import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ApiScryfallService {

  private apiUrl = 'https://api.scryfall.com/';

  constructor(
    private http: HttpClient
  ) { }

  /** Log a ApiScrifall message */
  private log(message: string) {
    console.log(`Api Scrifalls: ${message}`);
  }

  getCard(name: string): Observable<Object> {
      name.replace(' ','+');
      return this.http.get<Object>(this.apiUrl + 'cards/named?fuzzy=' + name).pipe(
        tap((res) => {
            return res;
        }),
        catchError(this.handleError('getCard name='+name))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}