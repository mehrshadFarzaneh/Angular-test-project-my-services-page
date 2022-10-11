import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModel } from '../models/services.model';

@Pipe({
  name: 'serviceCounter'
})
export class ServiceCounterPipe implements PipeTransform {

  transform(typeValue: string, listForSearch: ServiceModel[]): number {
    if (typeValue && listForSearch) {
      return listForSearch.filter
        (
          (item) => item.type === typeValue
        ).length;
    }
    return 0;
  }

}
