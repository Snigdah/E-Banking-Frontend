import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-sky-900 shadow-md p-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo or Brand Name -->
        <div class="text-white text-3xl font-bold">
          <a routerLink="/" class="hover:text-blue-300 transition duration-300"
            >Banking System</a
          >
        </div>
        <!-- Navigation Links -->
        <ul class="flex space-x-8">
          <li>
            <a
              routerLink="/home"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >HOME</a
            >
          </li>
          <li>
            <a
              routerLink="/company"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >COMPANY</a
            >
          </li>
          <li>
            <a
              routerLink="/employee"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >EMPLOYEE</a
            >
          </li>
          <li>
            <a
              routerLink="/bank"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >BANK</a
            >
          </li>
          <li>
            <a
              routerLink="/salary"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >SALARY</a
            >
          </li>
          <li>
            <a
              routerLink="/add-fund"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >ADD-FUND</a
            >
          </li>
          <li>
            <a
              routerLink="/pay-salary"
              class="text-white font-semibold hover:text-blue-300 transition duration-300"
              >PAY-SALARY</a
            >
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {}
