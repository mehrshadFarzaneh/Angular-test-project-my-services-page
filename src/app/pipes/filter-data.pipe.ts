import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModel } from '../models/services.model';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: ServiceModel[], filterQuery:string): ServiceModel[] {
    const result = value.filter(a => (a.name as string).toLowerCase().includes(filterQuery));
    if(result){
      return result;
    } else {
      return []
    }
  }

}
