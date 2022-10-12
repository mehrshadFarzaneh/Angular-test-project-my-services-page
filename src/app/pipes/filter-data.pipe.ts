import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModel } from '../models/services.model';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: ServiceModel[], filterQuery:string,filterByType:string): ServiceModel[]
  {
    let result = value.filter(a => (a.name as string).toLowerCase().includes(filterQuery.toLocaleLowerCase()));
     result = result.filter(a => (a.type as string).toLowerCase().includes(filterByType.toLocaleLowerCase()));
    if(result){
      return result;
    } else {
      return []
    }
  }

}
