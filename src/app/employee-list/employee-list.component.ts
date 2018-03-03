import { element } from 'protractor';
import { Employee } from './../employees/shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList : Employee[];

  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = []
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      })

    })
  }

  onEdit(emp :Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key : string){
    if(confirm('Are you sure to delete this record?') === true){
    this.employeeService.deleteEmployee(key);
    this.tostr.warning('Deleted!', "Employee regigter")
    }
  }

}
