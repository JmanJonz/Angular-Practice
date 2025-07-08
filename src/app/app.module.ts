import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoldReportComponent } from './bold-report/bold-report.component';
import { CustomReportComponent } from './custom-report/custom-report.component';
import { DynamicReportComponent } from './dynamic-report/dynamic-report.component';
import { RootComponent } from './root/root.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoldReportComponent,
    CustomReportComponent,
    DynamicReportComponent,
    RootComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
