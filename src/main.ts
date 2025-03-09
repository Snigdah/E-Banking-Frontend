import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

// Define the routes
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Default route (HOME)
  {
    path: "home",
    loadComponent: () =>
      import("./app/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "company",
    loadComponent: () =>
      import("./app/company/company.component").then((m) => m.CompanyComponent),
  },
  {
    path: "employee",
    loadComponent: () =>
      import("./app/employee/employee.component").then(
        (m) => m.EmployeeComponent
      ),
  },
  {
    path: "bank",
    loadComponent: () =>
      import("./app/bank/bank.component").then((m) => m.BankComponent),
  },
  {
    path: "salary",
    loadComponent: () =>
      import("./app/salary/salary.component").then((m) => m.SalaryComponent),
  },
  {
    path: "add-fund",
    loadComponent: () =>
      import("./app/add-fund/add-fund.component").then(
        (m) => m.AddFundComponent
      ),
  },
  {
    path: "pay-salary",
    loadComponent: () =>
      import("./app/pay-salary/pay-salary.component").then(
        (m) => m.PaySalaryComponent
      ),
  },
  {
    path: "create-company",
    loadComponent: () =>
      import("./app/create-company/create-company.component").then(
        (m) => m.CreateCompanyComponent
      ),
  },
  {
    path: "create-employee",
    loadComponent: () =>
      import("./app/create-employee/create-employee.component").then(
        (m) => m.CreateEmployeeComponent
      ),
  },
  {
    path: "create-bank-account",
    loadComponent: () =>
      import("./app/create-bank-account/create-bank-account.component").then(
        (m) => m.CreateBankAccountComponent
      ),
  },
  {
    path: "employee/:id",
    loadComponent: () =>
      import("./app/employee-details/employee-details.component").then(
        (m) => m.EmployeeDetailsComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
