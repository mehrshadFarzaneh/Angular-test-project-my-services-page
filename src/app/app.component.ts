import { ServicesService } from './services/services.service';
import { Component, OnInit } from '@angular/core';
import { TabBarModel } from './models/tabBar.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $serviceList!: Observable<TabBarModel>;
  filterDataQuery: string = "";
  constructor(private dataServices: ServicesService) { }
  ngOnInit(): void {
    this.$serviceList = this.dataServices.getData();
  }
  setSearchQuery(value: string) {
    this.filterDataQuery = value;
  }
}
