import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="bg-sky-900 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-sm">
          &copy; {{ currentYear }} Banking System. All rights reserved.
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-400 transition duration-300"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-gray-400 transition duration-300"
            >Terms of Service</a
          >
          <a href="#" class="hover:text-gray-400 transition duration-300"
            >Contact Us</a
          >
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
      }
      a {
        font-weight: 500;
      }
    `,
  ],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
