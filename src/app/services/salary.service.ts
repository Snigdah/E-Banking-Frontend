import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export interface ApiResponse {
  data: {
    grade: number;
    basicSalary: number;
    houseRent: number;
    medicalAllowance: number;
    totalSalary: number;
  };
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class SalaryService {
  private apiUrl = "http://localhost:8080/api/salary";

  constructor(private http: HttpClient) {}

  // Calculate salary based on grade
  calculateSalary(grade: number): Observable<ApiResponse> {
    const url = `${this.apiUrl}/calculateSalary`;
    const payload = { grade };
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
