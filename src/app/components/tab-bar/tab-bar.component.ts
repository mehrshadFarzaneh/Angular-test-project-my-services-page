import { ServiceModel } from './../../models/services.model';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabBarModel } from 'src/app/models/tabBar.model';

@Component({
  selector: 'pars-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {
  $serviceList!: Observable<TabBarModel>;
  @Output() onTabClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor(private parspackServices:ServicesService) { }

  ngOnInit(): void {
    this.$serviceList = this.parspackServices.getData();
  }
  tabClicked(typeOfTab:string) {
    this.onTabClicked.emit(typeOfTab);
  }
}
