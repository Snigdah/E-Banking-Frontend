import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export interface BankAccount {
  accountName: string;
  accountNumber: string;
  currentBalance: number;
  bankName: string;
  branchName: string;
  accountType: string;
}

export interface ApiResponse {
  data: BankAccount[];
  meta: {
    code: number;
    message: string;
    status: string;
  };
}

export interface CreateBankAccountRequest {
  accountName: string;
  bankName: string;
  branchName: string;
  accountType: string;
}

@Injectable({
  providedIn: "root",
})
export class BankService {
  private apiUrl = "http://localhost:8080/api/bank-accounts";

  constructor(private http: HttpClient) {}

  // Fetch all bank accounts
  getBankAccounts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Create a new bank account
  createBankAccount(data: CreateBankAccountRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, data).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => ({ message: errorMessage }));
  }
}
