import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeOVerviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

const routes: Routes = [
  // {path : "", component : EmployeeListComponent},
  {path : "", redirectTo : "employee", pathMatch : "full"},
  {path : "employee", component : EmployeeListComponent},
  {
    path : "employee/:name", component : EmployeeDetailsComponent,
    children : [
      {path : "overview", component : EmployeeOVerviewComponent},
      {path : "contact", component : EmployeeContactComponent}
    ]
  },
  {path : "department", component : DepartmentComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules=[EmployeeListComponent,DepartmentComponent,PageNotFoundComponent,EmployeeDetailsComponent,EmployeeOVerviewComponent,EmployeeContactComponent];