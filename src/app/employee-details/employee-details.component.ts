import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <button (click)="gotoBack()">Back</button>
    <p>
      employee-details works...!
    </p>
    <div *ngFor="let item of array">
      <h3>{{item.name}}</h3>
    </div>
    <div>
      <button (click)="overview()">Overview</button>
      <button (click)="contact()">Contact</button>
    </div>
    <p>
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public array=[];
  public empName;
  constructor(private route : ActivatedRoute,private router : Router,private employeeDataServcie : EmployeeDataService) { }

  ngOnInit() {
    // let name=this.route.snapshot.paramMap.get("id");
    // console.log("employeeDetails...",name);
    this.route.paramMap.subscribe((params)=>{
      this.empName=this.route.snapshot.paramMap.get("name");
      console.log("employeeDetails...",this.empName);
      this.employeeDataServcie.getEmployeeDataByName(this.empName).subscribe((data)=>{
        this.array=data;
      },(error)=>{
        console.log("error : ",error);
      });
    });

    // this.employeeDataServcie.getEmployeeDataByName(name).subscribe((data)=>{
    //   this.array=data;
    // },(error)=>{
    //   console.log("error : ",error);
    // });
  }

  gotoBack()
  {
    let name=this.empName ? this.empName : null;
    this.router.navigate(["/employee",{empName : this.empName,empAge : 24}]);
    // this.router.navigate(["../",{empName : this.empName}],{relativeTo : this.route});
  }

  overview()
  {
    this.router.navigate(["overview"],{relativeTo : this.route});
  }

  contact()
  {
    this.router.navigate(["contact"],{relativeTo : this.route});
  }
}
