import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pars-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabName = "سایر محصولات";
  @Input() iconName = "other";
  @Input() tabCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
