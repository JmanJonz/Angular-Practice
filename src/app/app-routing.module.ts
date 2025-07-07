import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoldReportComponent } from './bold-report/bold-report.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {path: "", component: RootComponent},
  {path: "bold-report", component: BoldReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
