import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {ConfigService} from '../../globalServices/config.service'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  api_url:string;
  constructor(
    private configSer:ConfigService,
    private http:HttpClient) { 
    this.api_url=this.configSer.apiUrl;
  }
  addRegistration(regObj:any): Observable<any> {
    //const obj = {regObj:regObj};      
    return this.http.post<any>(`${this.api_url}profiles/add`,regObj).pipe(map(userData => {
      if (userData) {
        if(userData.status==200){

        }else{
          console.log(userData.data.message);
        }                                    
      }
    return userData.message;
    })); 
  }
}
