import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModel } from '../models/services.model';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: ServiceModel[], filterQuery:string,filterByType:string): ServiceModel[]
  {
    debugger;
    let result = value.filter(a => (a.name as string).toLowerCase().includes(filterQuery));
     result = value.filter(a => (a.type as string).toLowerCase().includes(filterByType.toLocaleLowerCase()));
    if(result){
      return result;
    } else {
      return []
    }
  }

}
