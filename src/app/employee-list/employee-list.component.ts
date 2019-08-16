import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee works...!
    </p>
    <div *ngFor="let item of array" [class.isSelected]="isSelected(item.name)" class="mouseHoverClass">
      <h3 (click)="showDetails(item)">{{item.name}}</h3>
    </div>
  `,
  styles: [
    `
      .isSelected {
        color : red;
      }

      .mouseHoverClass {
        cursor : pointer;
      }
    `
  ]
})
export class EmployeeListComponent implements OnInit {

  public empName;
  public array=[];
  constructor(private employeeDataServcie : EmployeeDataService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.employeeDataServcie.getEmployeeData().subscribe((data)=>{
      this.array=data;
    },(error)=>{
      console.log("error : ",error);
    });

    this.route.paramMap.subscribe((params)=>{
      this.empName=params.get("empName");
      console.log("name is : "+this.empName);
    });

  }

  showDetails(item)
  {
    this.router.navigate(["/employee",item.name]);
    // this.router.navigate([item.name],{relativeTo : this.route});
  }

  isSelected(name : any)
  {
    // console.log("... : "+name);
    return (this.empName==name) ? true : false;
  }

}
