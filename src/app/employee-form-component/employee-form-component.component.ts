import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeListComponent } from '../employeeList/employeeList.component';
import { EmployeeService } from 'src/services/employee.service';
import { Employee, GetEmployees } from 'src/models/employee.model';

@Component({
  selector: 'app-employee-form-component',
  templateUrl: './employee-form-component.component.html',
  styleUrls: ['./employee-form-component.component.scss']
})

export class EmployeeFormComponentComponent implements OnInit {
  @ViewChild(EmployeeListComponent) employeeListComponent!: EmployeeListComponent;

  form!: FormGroup;
  isUpdate:boolean=true;
  refreshEvent: number = 0;
  @ViewChild('employeeForm') employeeForm!: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onAddNewEmployee():void{
    this.isUpdate=true;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.employeeForm);
    dialogRef.afterClosed().subscribe(() => {
      this.form.reset(); 
    });
  }

  updateEmployeeList(): void {
    this.refreshEvent++;
    this.employeeListComponent.refreshDataEvent = this.refreshEvent;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const employeeData: Employee = this.form.value;
  
      const subscription = employeeData.id ? this.employeeService.updateEmployeeData(employeeData) : this.employeeService.saveEmployeeData(employeeData);
  
      subscription.subscribe({
        next: () => {
          this.updateEmployeeList();
          this.snackBar.open(employeeData.id ? "Updated Successfully" : "Created Successfully", 'Close', { duration: 5000 });
          this.dialog.closeAll();
        },
        error: () => {
          this.snackBar.open('Error occurred while updating data', 'Close', { duration: 5000 });
        }
      });
    }
  }

  editEmployee(employee: GetEmployees): void {
    this.isUpdate=false;
    this.form.patchValue(employee);
    this.openDialog();
  }

  onCancel(): void {
    this.dialog.closeAll();
  }
}
