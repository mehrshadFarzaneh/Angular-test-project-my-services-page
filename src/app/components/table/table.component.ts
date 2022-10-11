import { ServiceModel } from './../../models/services.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pars-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tblArry: ServiceModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
