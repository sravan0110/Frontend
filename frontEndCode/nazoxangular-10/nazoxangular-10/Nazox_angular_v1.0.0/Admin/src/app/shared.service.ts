import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// the observables are for generating asynchronous requests and handle asynchronous responses
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //here u need to write the API URL, but first that Web API project
  readonly APIUrl = "http://localhost:49764/api";
  //dont't forget to instantiate the http client constructor
  constructor(private http:HttpClient) { }
  // this function will get the sales revenue waali table ka data
  getSalesRevenue():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/customer')
  }

  getRecentEarnings():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/customer/getRecentEarnings') 
  }

  getCustomerNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/customer/getCustomerNames')
  }

  getTransactionDetails():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/customer/getTransactionDetails');
  }

  getRealTimeSales():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/customer/getRealTimeSales');
  }

  getRetentionDetails():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/customer/getRetentionDetails');
  }
}
