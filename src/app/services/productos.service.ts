
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    public _http: Http,
    private _http_client: HttpClient
  ) {
    this.getProductos();
    
   }

  getProductos():Observable<any>{
 
    return this._http_client.get("https://portaf-test.firebaseio.com/productos_idx.json");

  }

  getProducto(codigo:any):Observable<any>{
    return this._http_client.get(`https://portaf-test.firebaseio.com/productos/${ codigo }.json`);
  }

 
  
}
