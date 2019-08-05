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
    //const obj = {loginObj:loginObj};	
    return this.http.post<any>(`${this.api_url}profiles/login`,loginObj).pipe(map(userData => {
      if (userData) {
        if(userData.status==200){
          let consumerArray=userData.user;
          let userName=userData.user.FirstName+' '+userData.user.LastName;
          localStorage.setItem('ConsumerId', userData.user._id);
          localStorage.setItem('email', userData.user.Email);
          localStorage.setItem('userType', userData.user.UserType);
          localStorage.setItem('userName', userName);
        }else{
          console.log(userData.message);
        }                                    
      }
    return userData.user;
    })); 
  }
}
