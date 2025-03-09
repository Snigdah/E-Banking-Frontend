import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export interface CompanyAccount {
  accountName: string;
  accountNumber: string;
  currentBalance: number;
  bankName: string;
  branchName: string;
  paidBalance: number;
}

export interface ApiResponse {
  data: CompanyAccount[];
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  private apiUrl = "http://localhost:8080/api/company-accounts";

  constructor(private http: HttpClient) {}

  // Fetch all company accounts
  getCompanyAccounts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Create a new company account
  createCompanyAccount(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, data);
  }

  // Delete a company account
  deleteCompanyAccount(
    accountNumber: string,
    accountName: string
  ): Observable<ApiResponse> {
    const deleteUrl = `${this.apiUrl}/delete`;
    const payload = { accountNumber, accountName };
    return this.http
      .delete<ApiResponse>(deleteUrl, { body: payload })
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
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => ({ message: errorMessage }));
  }
}
