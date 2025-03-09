import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: "app-create-employee",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div
      class="p-8 mt-[50px] mb-[180px]  max-w-lg mx-auto bg-white shadow-2xl rounded-lg"
    >
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Create Employee</h1>
      <form
        [formGroup]="createEmployeeForm"
        (ngSubmit)="onSubmit()"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:space-y-0"
      >
        <!-- Name -->
        <div class="sm:col-span-2">
          <label for="name" class="block text-base font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            formControlName="name"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter employee name"
          />
          <div
            *ngIf="
              createEmployeeForm.get('name')?.invalid &&
              createEmployeeForm.get('name')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Name is required.
          </div>
        </div>

        <!-- Grade -->
        <div>
          <label for="grade" class="block text-base font-medium text-gray-700">
            Grade (1-6)
          </label>
          <input
            id="grade"
            type="number"
            formControlName="grade"
            [min]="1"
            [max]="6"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter grade (1-6)"
          />
          <div
            *ngIf="
              createEmployeeForm.get('grade')?.invalid &&
              createEmployeeForm.get('grade')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Grade is required and must be between 1 and 6.
          </div>
        </div>

        <!-- Account Number -->
        <div>
          <label
            for="accountNumber"
            class="block text-base font-medium text-gray-700"
          >
            Account Number
          </label>
          <input
            id="accountNumber"
            type="text"
            formControlName="accountNumber"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter account number"
          />
          <div
            *ngIf="
              createEmployeeForm.get('accountNumber')?.invalid &&
              createEmployeeForm.get('accountNumber')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Account Number is required.
          </div>
        </div>

        <!-- Account Name -->
        <div>
          <label
            for="accountName"
            class="block text-base font-medium text-gray-700"
          >
            Account Name
          </label>
          <input
            id="accountName"
            type="text"
            formControlName="accountName"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter account name"
          />
          <div
            *ngIf="
              createEmployeeForm.get('accountName')?.invalid &&
              createEmployeeForm.get('accountName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Account Name is required.
          </div>
        </div>

        <!-- Mobile Number -->
        <div>
          <label
            for="mobileNumber"
            class="block text-base font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="text"
            formControlName="mobileNumber"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter mobile number (11 digits)"
          />
          <div
            *ngIf="
              createEmployeeForm.get('mobileNumber')?.invalid &&
              createEmployeeForm.get('mobileNumber')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Mobile Number is required and must be 11 digits.
          </div>
        </div>

        <!-- Address -->
        <div class="sm:col-span-2">
          <label
            for="address"
            class="block text-base font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            formControlName="address"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter address"
          />
          <div
            *ngIf="
              createEmployeeForm.get('address')?.invalid &&
              createEmployeeForm.get('address')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Address is required.
          </div>
        </div>

        <!-- Submit Button -->
        <div class="sm:col-span-2">
          <button
            type="submit"
            [disabled]="createEmployeeForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Create Employee
          </button>
        </div>
      </form>

      <!-- Notification -->
      <div
        *ngIf="notificationMessage"
        [ngClass]="{
          'bg-green-100 border border-green-400 text-green-700': !isError,
          'bg-red-100 border border-red-400 text-red-700': isError
        }"
        class="mt-6 p-4 rounded-lg"
      >
        {{ notificationMessage }}
      </div>
    </div>
  `,
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent {
  createEmployeeForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.createEmployeeForm = this.fb.group({
      name: ["", Validators.required],
      grade: ["", [Validators.required, Validators.min(1), Validators.max(6)]],
      accountNumber: ["", Validators.required],
      accountName: ["", Validators.required],
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]{11}$/)],
      ],
      address: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.createEmployeeForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to create an employee
    this.employeeService
      .createEmployee(this.createEmployeeForm.value)
      .subscribe({
        next: (response) => {
          this.notificationMessage = response.meta.message;
          this.isError = false;
          setTimeout(() => {
            this.router.navigate(["/employee"]);
          }, 2500);
        },
        error: (error) => {
          this.notificationMessage =
            error.message || "Failed to create employee. Please try again.";
          this.isError = true;
          console.error("Error creating employee:", error);
        },
      });
  }
}
