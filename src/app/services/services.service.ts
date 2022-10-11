import { TabBarModel } from './../models/tabBar.model';
import { ServiceModel, ServicesResponse } from './../models/services.model';

// import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { KeyValuePipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  localJsonPath:string = './../../assets/json/Services.json'
  constructor(private http: HttpClient, private keyValue: KeyValuePipe) { }

  getData(){
    return this.http.get<ServicesResponse>(this.localJsonPath).pipe(map(res => {
      const ServicesData = res.data;
      // this is not good way... we should have another api to get ServicesTypes
      let ServicesTypes: string[] = [];
      ServicesData.map(dataItem => {
        const currentType = dataItem.type;
        // check type is already exist?
        ServicesTypes.indexOf(currentType) === -1 ? ServicesTypes.push(currentType) : null;
      });
      let tbModel: TabBarModel = {
        services: ServicesData,
        types: ServicesTypes
      };
      return tbModel;
    }));
  }
}
