import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export interface ApiResponse {
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class PaySalaryService {
  private apiUrl = "http://localhost:8080/api/company-accounts";

  constructor(private http: HttpClient) {}

  // Pay salary to an employee
  paySalary(
    companyAccountNumber: string,
    employeeId: string
  ): Observable<ApiResponse> {
    const url = `${this.apiUrl}/transfer-salary`;
    const payload = { companyAccountNumber, employeeId };
    return this.http
      .post<ApiResponse>(url, payload)
      .pipe(catchError(this.handleError));
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage =
        error.error.message ||
        `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => ({ message: errorMessage }));
  }
}
