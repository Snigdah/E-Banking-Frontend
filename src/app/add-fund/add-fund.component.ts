import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { FundService } from "../services/fund.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-add-fund",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="p-8 mt-[50px] max-w-lg mx-auto bg-white shadow-2xl rounded-lg">
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Add Funds</h1>
      <form [formGroup]="addFundForm" (ngSubmit)="onSubmit()" class="space-y-6">
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
              addFundForm.get('accountNumber')?.invalid &&
              addFundForm.get('accountNumber')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Account Number is required.
          </div>
        </div>

        <!-- Amount -->
        <div>
          <label for="amount" class="block text-base font-medium text-gray-700">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            formControlName="amount"
            [min]="0"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            placeholder="Enter amount"
          />
          <div
            *ngIf="
              addFundForm.get('amount')?.invalid &&
              addFundForm.get('amount')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Amount is required and must be non-negative.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            [disabled]="addFundForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Add Funds
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
  styleUrls: ["./add-fund.component.css"],
})
export class AddFundComponent {
  addFundForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private fundService: FundService,
    private router: Router
  ) {
    this.addFundForm = this.fb.group({
      accountNumber: ["", Validators.required],
      amount: ["", [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.addFundForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to add funds
    this.fundService
      .addFunds(
        this.addFundForm.value.accountNumber,
        this.addFundForm.value.amount
      )
      .subscribe({
        next: (response) => {
          this.notificationMessage = response.meta.message;
          this.isError = false;
          setTimeout(() => {
            this.router.navigate(["/company"]);
          }, 2500);
        },
        error: (error) => {
          this.notificationMessage =
            error.message || "Failed to add funds. Please try again.";
          this.isError = true;
          console.error("Error adding funds:", error);
        },
      });
  }
}
