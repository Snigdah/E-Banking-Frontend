import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { BankService } from "../services/bank.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-create-bank-account",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div
      class="p-8 mt-[50px] mb-[180px]  max-w-lg mx-auto bg-white shadow-2xl rounded-lg"
    >
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Create Bank Account</h1>
      <form
        [formGroup]="createBankAccountForm"
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
              createBankAccountForm.get('accountName')?.invalid &&
              createBankAccountForm.get('accountName')?.touched
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
              createBankAccountForm.get('bankName')?.invalid &&
              createBankAccountForm.get('bankName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Bank Name is required.
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
              createBankAccountForm.get('branchName')?.invalid &&
              createBankAccountForm.get('branchName')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Branch Name is required.
          </div>
        </div>

        <!-- Account Type -->
        <div>
          <label
            for="accountType"
            class="block text-base font-medium text-gray-700"
            >Account Type</label
          >
          <select
            id="accountType"
            formControlName="accountType"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="" disabled>Select account type</option>
            <option value="SAVINGS">Savings</option>
            <option value="CURRENT">Current</option>
          </select>
          <div
            *ngIf="
              createBankAccountForm.get('accountType')?.invalid &&
              createBankAccountForm.get('accountType')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Account Type is required.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            [disabled]="createBankAccountForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Create Bank Account
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
  styleUrls: ["./create-bank-account.component.css"],
})
export class CreateBankAccountComponent {
  createBankAccountForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.createBankAccountForm = this.fb.group({
      accountName: ["", Validators.required],
      bankName: ["", Validators.required],
      branchName: ["", Validators.required],
      accountType: ["", Validators.required],
    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.createBankAccountForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to create a new bank account
    this.bankService
      .createBankAccount(this.createBankAccountForm.value)
      .subscribe({
        next: (response) => {
          this.notificationMessage = response.meta.message;
          this.isError = false;

          setTimeout(() => {
            this.router.navigate(["/bank"]);
          }, 2500);
        },
        error: (error) => {
          this.notificationMessage =
            error.message || "Failed to create bank account. Please try again.";
          this.isError = true;
          console.error("Error creating bank account:", error);
        },
      });
  }
}
