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
import { PaySalaryService } from "../services/pay-salary.service";

@Component({
  selector: "app-pay-salary",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div
      class="p-8 mt-[50px] mb-[180px]  max-w-lg mx-auto bg-white shadow-2xl rounded-lg"
    >
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Pay Salary</h1>
      <form
        [formGroup]="paySalaryForm"
        (ngSubmit)="onSubmit()"
        class="space-y-6"
      >
        <!-- Company Account Number -->
        <div>
          <label
            for="companyAccountNumber"
            class="block text-base font-medium text-gray-700"
          >
            Company Account Number
          </label>
          <input
            id="companyAccountNumber"
            type="text"
            formControlName="companyAccountNumber"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter company account number"
          />
          <div
            *ngIf="
              paySalaryForm.get('companyAccountNumber')?.invalid &&
              paySalaryForm.get('companyAccountNumber')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Company Account Number is required.
          </div>
        </div>

        <!-- Employee ID -->
        <div>
          <label
            for="employeeId"
            class="block text-base font-medium text-gray-700"
          >
            Employee ID
          </label>
          <input
            id="employeeId"
            type="text"
            formControlName="employeeId"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter employee ID"
          />
          <div
            *ngIf="
              paySalaryForm.get('employeeId')?.invalid &&
              paySalaryForm.get('employeeId')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Employee ID is required.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            [disabled]="paySalaryForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Pay Salary
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
  styleUrls: ["./pay-salary.component.css"],
})
export class PaySalaryComponent {
  paySalaryForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paySalaryService: PaySalaryService,
    private router: Router
  ) {
    this.paySalaryForm = this.fb.group({
      companyAccountNumber: ["", Validators.required],
      employeeId: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.paySalaryForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to pay salary
    this.paySalaryService
      .paySalary(
        this.paySalaryForm.value.companyAccountNumber,
        this.paySalaryForm.value.employeeId
      )
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
            error.message || "Failed to pay salary. Please try again.";
          this.isError = true;
          console.error("Error paying salary:", error);
        },
      });
  }
}
