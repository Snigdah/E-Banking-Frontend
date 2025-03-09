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
export class FundService {
  private apiUrl = "http://localhost:8080/api/company-accounts";

  constructor(private http: HttpClient) {}

  // Add funds to a company account
  addFunds(accountNumber: string, amount: number): Observable<ApiResponse> {
    const url = `${this.apiUrl}/add-funds`;
    const payload = { accountNumber, amount };
    return this.http
      .post<ApiResponse>(url, payload)
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
