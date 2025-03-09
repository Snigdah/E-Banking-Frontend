import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export interface BankAccountDetails {
  accountName: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  accountType: string;
  currentBalance: number;
}

export interface SalaryComponents {
  basicSalary: number;
  houseRent: number;
  medicalAllowance: number;
  totalSalary: number;
}

export interface Employee {
  employeeId: string;
  name: string;
  grade: number;
  address: string;
  mobileNumber: string;
  bankAccountDetails: BankAccountDetails;
  salaryComponents: SalaryComponents;
}

export interface ApiResponse {
  data: Employee[];
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

export interface ApiResponseAllEmployees {
  data: Employee[];
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

export interface ApiResponseSingleEmployee {
  data: Employee;
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private apiUrl = "http://localhost:8080/api/employees";

  constructor(private http: HttpClient) {}

  // Fetch all employees
  getEmployees(): Observable<ApiResponseAllEmployees> {
    return this.http.get<ApiResponseAllEmployees>(`${this.apiUrl}/all`).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Fetch employee by ID
  getEmployeeById(employeeId: string): Observable<ApiResponseSingleEmployee> {
    return this.http
      .get<ApiResponseSingleEmployee>(`${this.apiUrl}/${employeeId}`)
      .pipe(
        catchError(this.handleError) // Handle errors
      );
  }

  // Create a new employee
  createEmployee(data: any): Observable<ApiResponse> {
    const url = `${this.apiUrl}/create`;
    return this.http
      .post<ApiResponse>(url, data)
      .pipe(catchError(this.handleError));
  }

  // Delete an employee by ID
  deleteEmployee(employeeId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${employeeId}`)
      .pipe(catchError(this.handleError));
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage =
        error.error.message ||
        `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => ({ message: errorMessage }));
  }
}
