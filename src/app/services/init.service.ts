import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WINDOW} from './window-providers'
import { Terminal } from '../models/terminal';
import { InitResponse } from '../models/init-response';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {
    terminals:Array<Terminal>;
    apiUrl:string;

  constructor(@Inject(WINDOW) private window: Window, private httpClient: HttpClient) {
    this.apiUrl = 'http://' + window.location.hostname + ':8080';
    console.log("apiURL", this.apiUrl );
   }

   getTerminals(): Observable<Array<Terminal>> {
    return this.httpClient.get<InitResponse>(`${this.apiUrl}/init`,
    { observe: 'response' }).pipe(
      
      map(res => {

      this.terminals = res.body.terminalsLinked;
      console.log(this.terminals);
      return this.terminals; 
    }));
   }
}
