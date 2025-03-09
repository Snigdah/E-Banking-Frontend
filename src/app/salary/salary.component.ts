import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SalaryService } from "../services/salary.service";

@Component({
  selector: "app-salary",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="p-8 mt-[50px] max-w-lg mx-auto bg-white shadow-2xl rounded-lg">
      <h1 class="text-4xl font-bold text-sky-900 mb-6">Calculate Salary</h1>
      <form [formGroup]="salaryForm" (ngSubmit)="onSubmit()" class="space-y-6">
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
              salaryForm.get('grade')?.invalid &&
              salaryForm.get('grade')?.touched
            "
            class="text-red-500 text-sm mt-1"
          >
            Grade is required and must be between 1 and 6.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            [disabled]="salaryForm.invalid"
            class="w-full px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-600 transition duration-300 disabled:opacity-50"
          >
            Calculate Salary
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

      <!-- Salary Details -->
      <div *ngIf="salaryDetails" class="mt-6 space-y-4">
        <h2 class="text-2xl font-bold text-sky-900">Salary Details</h2>
        <div class="text-gray-700">
          <p><strong>Grade:</strong> {{ salaryDetails.grade }}</p>
          <p>
            <strong>Basic Salary:</strong>
            {{ salaryDetails.basicSalary | currency }}
          </p>
          <p>
            <strong>House Rent:</strong>
            {{ salaryDetails.houseRent | currency }}
          </p>
          <p>
            <strong>Medical Allowance:</strong>
            {{ salaryDetails.medicalAllowance | currency }}
          </p>
          <p>
            <strong>Total Salary:</strong>
            {{ salaryDetails.totalSalary | currency }}
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./salary.component.css"],
})
export class SalaryComponent {
  salaryForm: FormGroup;
  notificationMessage: string = "";
  isError: boolean = false;
  salaryDetails: any = null;

  constructor(private fb: FormBuilder, private salaryService: SalaryService) {
    this.salaryForm = this.fb.group({
      grade: ["", [Validators.required, Validators.min(1), Validators.max(6)]],
    });
  }

  onSubmit(): void {
    if (this.salaryForm.invalid) {
      this.isError = true;
      return;
    }

    // Call the API to calculate salary
    this.salaryService.calculateSalary(this.salaryForm.value.grade).subscribe({
      next: (response) => {
        this.salaryDetails = response.data;
        this.notificationMessage = response.meta.message;
        this.isError = false;
      },
      error: (error) => {
        this.notificationMessage =
          error.message || "Failed to calculate salary. Please try again.";
        this.isError = true;
        console.error("Error calculating salary:", error);
      },
    });
  }
}
