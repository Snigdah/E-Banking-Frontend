import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "../services/employee.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-employee-details",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="p-8 bg-gray-200 min-h-screen">
      <div
        class="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8"
      >
        <h1 class="text-4xl font-bold text-sky-800 mb-8">Employee Details</h1>

        <ng-container *ngIf="employee; else loadingOrError">
          <!-- Employee Basic Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 class="text-2xl font-semibold text-sky-700 mb-4">Profile</h2>
              <div class="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {{ employee.name }}</p>
                <p><strong>Address:</strong> {{ employee.address }}</p>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-sky-700 mb-4">
                Employee Info
              </h2>
              <div class="space-y-2 text-gray-700">
                <p><strong>Employee ID:</strong> {{ employee.employeeId }}</p>
                <p><strong>Grade:</strong> {{ employee.grade }}</p>
                <p><strong>Mobile:</strong> {{ employee.mobileNumber }}</p>
              </div>
            </div>
          </div>

          <!-- Bank Account Details -->
          <div class="mb-8">
            <h2
              class="text-2xl font-semibold pl-[15px] py-1 text-white mb-5 bg-sky-800"
            >
              Bank Account Details
            </h2>
            <table class="min-w-full bg-gray-50 shadow-md rounded-lg">
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Account Name
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.accountName }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Account Number
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.accountNumber }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">Bank Name</td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.bankName }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Branch Name
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.branchName }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Account Type
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.accountType }}
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Current Balance
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.bankAccountDetails.currentBalance | currency }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Salary Components -->
          <div class="mb-8">
            <h2
              class="text-2xl font-semibold pl-[15px] py-1  text-white mb-5 bg-sky-800"
            >
              Salary Components
            </h2>
            <table class="min-w-full bg-gray-50 shadow-md rounded-lg">
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Basic Salary
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.salaryComponents.basicSalary | currency }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    House Rent
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.salaryComponents.houseRent | currency }}
                  </td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Medical Allowance
                  </td>
                  <td class="px-4 py-2 text-gray-700">
                    {{ employee.salaryComponents.medicalAllowance | currency }}
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-700">
                    Total Salary
                  </td>
                  <td class="px-4 py-2 text-gray-700 font-bold">
                    {{ employee.salaryComponents.totalSalary | currency }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ng-container>

        <!-- Loading or Error Message -->
        <ng-template #loadingOrError>
          <div *ngIf="isLoading" class="mt-4 text-sky-800">Loading...</div>
          <div *ngIf="errorMessage" class="mt-4 text-red-600">
            {{ errorMessage }}
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | null = null;
  isLoading = true;
  errorMessage = "";

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get("id");
    if (employeeId) {
      this.fetchEmployeeDetails(employeeId);
    } else {
      this.errorMessage = "Employee ID is missing.";
      this.isLoading = false;
    }
  }

  fetchEmployeeDetails(employeeId: string): void {
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: (response) => {
        this.employee = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage =
          error.message ||
          "Failed to load employee details. Please try again later.";
        this.isLoading = false;
        console.error("Error fetching employee details:", error);
      },
    });
  }
}
