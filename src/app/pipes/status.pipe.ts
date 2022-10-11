import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "Active":
      return "مدیریت سرویس"
        break;
      case "Pending":
      return "مشاهده فاکتور"
        break;
      case "Cancelled":
      return "لغو شده"
        break;
      default:
        return "لغو شده"
        break;
    }
  }

}
