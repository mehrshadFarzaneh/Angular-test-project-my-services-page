import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TableComponent } from './components/table/table.component';
import { TabComponent } from './components/tab-bar/tab/tab.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { ServiceCounterPipe } from './pipes/service-counter.pipe';
import { SortTablePipe } from './pipes/sort-table.pipe';
import { FilterDataPipe } from './pipes/filter-data.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { PriceTablePipe } from './pipes/price-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SearchBarComponent,
    TabBarComponent,
    TableComponent,
    TabComponent,
    ServiceCounterPipe,
    SortTablePipe,
    FilterDataPipe,
    StatusPipe,
    PriceTablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
    
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
