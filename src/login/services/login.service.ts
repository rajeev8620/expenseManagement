import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {ConfigService} from '../../globalServices/config.service'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url:string;
  constructor(
    private configSer:ConfigService,
    private http:HttpClient) { 
    this.api_url=this.configSer.apiUrl;
  }

  checkLogin(loginObj:any): Observable<any> {
    const obj = {loginObj:loginObj};
      
    return this.http.post<any>(`${this.api_url}profiles/login`,obj).pipe(map(userData => {
      if (userData) {
        if(userData.status==200){
          let consumerArray=userData.data[0];
          let userName=consumerArray.FirstName+' '+consumerArray.LastName;
          localStorage.setItem('ConsumerId', consumerArray.ConsumerId);
          localStorage.setItem('email', consumerArray.Email);
          localStorage.setItem('userType', consumerArray.UserType);
          localStorage.setItem('userName', userName);
        }else{
          console.log(userData.data.message);
        }                                    
      }
    return userData.data[0];
    })); 
  }
}
