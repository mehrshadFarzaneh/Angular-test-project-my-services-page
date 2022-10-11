import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pars-admin-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @Input() titleDisplayed: string = "Default Title";
  constructor() { }

  ngOnInit(): void {
  }

}
