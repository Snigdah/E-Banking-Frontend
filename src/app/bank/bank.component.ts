import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { BankService, BankAccount } from "../services/bank.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-bank",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="p-8 bg-white min-h-screen">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold text-sky-900">List Of Bank Accounts</h1>
        <button
          (click)="navigateToCreateBankAccount()"
          class="
            px-6 py-2 
            bg-sky-800 text-white    
            rounded-md              
            shadow-md               
            hover:bg-sky-600       
            transition duration-300 
            focus:outline-none      
            focus:ring-2 focus:ring-sky-400 
            text-base
          "
        >
          Create Bank Account
        </button>
      </div>

      <!-- Display bank accounts -->
      <div class="mt-8">
        <div *ngIf="isLoading" class="mt-4 text-sky-900">Loading...</div>
        <div *ngIf="errorMessage" class="mt-4 text-red-600">
          {{ errorMessage }}
        </div>
        <div
          *ngIf="!isLoading && bankAccounts.length > 0"
          class="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            *ngFor="let account of bankAccounts"
            class="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 class="text-2xl font-bold text-sky-900">
              {{ account.accountName }}
            </h3>
            <p class="mt-3 text-gray-700">
              <strong>Account Number:</strong> {{ account.accountNumber }}
            </p>
            <p class="text-gray-700">
              <strong>Bank Name:</strong> {{ account.bankName }}
            </p>
            <p class="text-gray-700">
              <strong>Branch Name:</strong> {{ account.branchName }}
            </p>
            <p class="text-gray-700">
              <strong>Account Type:</strong> {{ account.accountType }}
            </p>
            <p class="text-gray-700">
              <strong>Current Balance:</strong>
              {{ account.currentBalance | currency }}
            </p>
          </div>
        </div>
        <div
          *ngIf="!isLoading && bankAccounts.length === 0"
          class="mt-4 text-gray-600"
        >
          No bank accounts found.
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./bank.component.css"],
})
export class BankComponent implements OnInit {
  bankAccounts: BankAccount[] = [];
  isLoading = true;
  errorMessage = "";

  constructor(private router: Router, private bankService: BankService) {}

  ngOnInit(): void {
    this.fetchBankAccounts();
  }

  // Fetch bank accounts from the API
  fetchBankAccounts(): void {
    this.bankService.getBankAccounts().subscribe({
      next: (response) => {
        this.bankAccounts = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage =
          error.message ||
          "Failed to load bank accounts. Please try again later.";
        this.isLoading = false;
        console.error("Error fetching bank accounts:", error);
      },
    });
  }

  // Method to navigate to the CreateBankAccount page
  navigateToCreateBankAccount(): void {
    this.router.navigate(["/create-bank-account"]);
  }
}
