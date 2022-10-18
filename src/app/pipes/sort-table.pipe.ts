import { Pipe, PipeTransform } from '@angular/core';
import { ServiceModel } from '../models/services.model';

@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

  transform(value: ServiceModel[],flag:boolean):ServiceModel[] {
    if (flag) {
      return value.slice().sort(this.compare);
    }else{
      return value;
    }
  }
  compare( a:ServiceModel, b:ServiceModel ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

}
