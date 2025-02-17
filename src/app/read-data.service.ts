import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  info: any = {};
  cargada = false;
  constructor(private http: HttpClient) {
    console.log("servicio corriendo");
    http.get('../../src/assets/data-json.json').subscribe(Resp => {
      this.info = Resp; this.cargada = true;
    });
    console.log(http);
  }

  
}
