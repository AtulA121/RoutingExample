import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,routingModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataService } from './employee-data.service';

// import {EmployeeDataService} from "./employee-data.service";
// import { EmployeeOVerviewComponent } from './employee-overview/employee-overview.component';
// import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
// import { from } from 'rxjs';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DepartmentComponent } from './department/department.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingModules,
    // no need bcz it included in 'routingModules'
    // EmployeeListComponent,
    // EmployeeOVerviewComponent,
    // EmployeeContactComponent,
    // DepartmentComponent,
    // PageNotFoundComponent,
    // EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [EmployeeDataService], // no need to specify bcz in new version in services "providedIn: 'root'" this added.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
