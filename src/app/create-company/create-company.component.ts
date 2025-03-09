import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { CompanyService } from "../services/company.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-create-company",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="p-8 mt-[50px] max-w-lg mx-auto bg-white shadow-2xl rounded-lg">
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Create Company</h1>
      <form
        [formGroup]="createCompanyForm"
        (ngSubmit)="onSubmit()"
        class="space-y-6"
      >
        <!-- Account Name -->
        <div>
          <label
            for="accountName"
            class="block text-base font-medium text-gray-700"
            >Account Name</label
          >
          <input
            id="accountName"
            type="text"
            formControlName="accountName"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter account name"
          />
          <div
            *ngIf="
              createCompanyForm.get('accountName')?.invalid &&
              createCompanyForm.get('accountName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Account Name is required.
          </div>
        </div>

        <!-- Bank Name -->
        <div>
          <label
            for="bankName"
            class="block text-base font-medium text-gray-700"
            >Bank Name</label
          >
          <input
            id="bankName"
            type="text"
            formControlName="bankName"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter bank name"
          />
          <div
            *ngIf="
              createCompanyForm.get('bankName')?.invalid &&
              createCompanyForm.get('bankName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Bank Name is required.
          </div>
        </div>

        <!-- Current Balance -->
        <div>
          <label
            for="currentBalance"
            class="block text-base font-medium text-gray-700"
            >Current Balance</label
          >
          <input
            id="currentBalance"
            type="number"
            formControlName="currentBalance"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter current balance"
            [min]="0"
          />
          <div
            *ngIf="
              createCompanyForm.get('currentBalance')?.invalid &&
              createCompanyForm.get('currentBalance')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Current Balance is required and must be non-negative.
          </div>
        </div>

        <!-- Branch Name -->
        <div>
          <label
            for="branchName"
            class="block text-base font-medium text-gray-700"
            >Branch Name</label
          >
          <input
            id="branchName"
            type="text"
            formControlName="branchName"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter branch name"
          />
          <div
            *ngIf="
              createCompanyForm.get('branchName')?.invalid &&
              createCompanyForm.get('branchName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Branch Name is required.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            [disabled]="createCompanyForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Create Company
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
  styleUrls: ["./create-company.component.css"],
})
export class CreateCompanyComponent {
  createCompanyForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.createCompanyForm = this.fb.group({
      accountName: ["", Validators.required],
      bankName: ["", Validators.required],
      currentBalance: ["", [Validators.required, Validators.min(0)]], // Add min validator
      branchName: ["", Validators.required],
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.createCompanyForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to create a new company account
    this.companyService
      .createCompanyAccount(this.createCompanyForm.value)
      .subscribe({
        next: (response) => {
          // Show success notification
          this.notificationMessage = response.meta.message;
          this.isError = false;

          // Navigate back to the company page after 2.5 seconds
          setTimeout(() => {
            this.router.navigate(["/company"]);
          }, 2500);
        },
        error: (error) => {
          // Show failure notification in red
          this.notificationMessage =
            error.message ||
            "Failed to create company account. Please try again.";
          this.isError = true;
          console.error("Error creating company account:", error);
        },
      });
  }
}
