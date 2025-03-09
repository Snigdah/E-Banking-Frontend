import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { CompanyService, CompanyAccount } from "../services/company.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-company",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="p-8 bg-white min-h-screen">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold text-sky-900">List Of Company</h1>
        <button
          (click)="navigateToCreateCompany()"
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
          Create Company
        </button>
      </div>

      <!-- Display company accounts -->
      <div class="mt-8">
        <div *ngIf="isLoading" class="mt-4 text-sky-900">Loading...</div>
        <div *ngIf="errorMessage" class="mt-4 text-red-600">
          {{ errorMessage }}
        </div>
        <div
          *ngIf="!isLoading && companyAccounts.length > 0"
          class="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            *ngFor="let account of companyAccounts"
            class="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
          >
            <!-- Delete Button -->
            <button
              (click)="
                openDeleteModal(account.accountNumber, account.accountName)
              "
              class="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>

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
              <strong>Current Balance:</strong>
              {{ account.currentBalance | currency }}
            </p>
            <p class="text-gray-700">
              <strong>Paid Balance:</strong>
              {{ account.paidBalance | currency }}
            </p>
          </div>
        </div>
        <div
          *ngIf="!isLoading && companyAccounts.length === 0"
          class="mt-4 text-gray-600"
        >
          No company accounts found.
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div
        *ngIf="showDeleteModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 class="text-xl font-bold text-sky-900 mb-4">Confirm Deletion</h3>
          <p class="text-gray-700 mb-6">
            Are you sure you want to delete this company account?
          </p>
          <div class="flex justify-end gap-4">
            <button
              (click)="closeDeleteModal()"
              class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              (click)="confirmDelete()"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {
  companyAccounts: CompanyAccount[] = [];
  isLoading = true;
  errorMessage = "";
  showDeleteModal = false; // Controls modal visibility
  accountToDelete: { accountNumber: string; accountName: string } | null = null; // Stores the account details to delete

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.fetchCompanyAccounts();
  }

  // Fetch company accounts from the API
  fetchCompanyAccounts(): void {
    this.companyService.getCompanyAccounts().subscribe({
      next: (response) => {
        this.companyAccounts = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage =
          error.message ||
          "Failed to load company accounts. Please try again later.";
        this.isLoading = false;
        console.error("Error fetching company accounts:", error);
      },
    });
  }

  // Open delete confirmation modal
  openDeleteModal(accountNumber: string, accountName: string): void {
    this.accountToDelete = { accountNumber, accountName };
    this.showDeleteModal = true;
  }

  // Close delete confirmation modal
  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.accountToDelete = null;
  }

  // Confirm deletion
  confirmDelete(): void {
    if (this.accountToDelete) {
      const { accountNumber, accountName } = this.accountToDelete;
      this.companyService
        .deleteCompanyAccount(accountNumber, accountName)
        .subscribe({
          next: (response) => {
            console.log("Account deleted successfully:", response);
            this.fetchCompanyAccounts(); // Refresh the list
            this.closeDeleteModal();
          },
          error: (error) => {
            console.error("Error deleting account:", error);
            this.errorMessage =
              error.message ||
              "Failed to delete account. Please try again later.";
            this.closeDeleteModal();
          },
        });
    }
  }

  // Navigate to the CreateCompany page
  navigateToCreateCompany(): void {
    this.router.navigate(["/create-company"]);
  }
}
