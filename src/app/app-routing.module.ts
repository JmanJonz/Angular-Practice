import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoldReportComponent } from './bold-report/bold-report.component';
import { RootComponent } from './root/root.component';
import { CustomReportComponent } from './custom-report/custom-report.component';
import { DynamicReportComponent } from './dynamic-report/dynamic-report.component';

const routes: Routes = [
  {path: "", component: RootComponent},
  {path: "bold-report", component: BoldReportComponent},
  {path: "custom-report", component: CustomReportComponent},
  {path: "dynamic-report", component: DynamicReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
