import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <section
          class="py-20 bg-gradient-to-r from-blue-400 to-sky-900 text-white text-center"
        >
          <div class="container mx-auto px-6">
            <h1 class="text-5xl font-bold mb-6">Welcome to E-Banking</h1>
            <p class="text-xl">
              Delivering excellence in Industry and Commerce.
            </p>
          </div>
        </section>

        <!-- About Section -->
        <section class="py-16 bg-white">
          <div class="container mx-auto px-6">
            <div class="text-center mb-12">
              <h2
                class="text-4xl font-bold text-gray-800 inline-block relative"
              >
                About Us
                <span
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] h-1.5 bg-sky-500 rounded-full mb-[-18px]"
                ></span>
              </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <!-- Image -->
              <img
                src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?t=st=1741477609~exp=1741481209~hmac=96880785afbf4b3652e66a9ea29ef04565b6e644b4e8ceb06123ffe30977612f&w=1380"
                alt="About Us"
                class="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />

              <!-- Description with Visual Hierarchy -->
              <div>
                <p class="text-gray-600 text-lg leading-relaxed">
                  <span
                    class="text-5xl font-bold text-sky-500 float-left mr-2 leading-none"
                    >W</span
                  >
                  e provide a comprehensive multi-vendor eBanking and company
                  management system that facilitates seamless operations across
                  multiple businesses. Our platform empowers companies to create
                  accounts, manage employees, and execute critical financial
                  transactions such as salary payments effortlessly. Employees
                  can create individual bank accounts, and companies can manage
                  their operations more effectively. Additionally, our robust
                  system supports research and collaboration, serving multiple
                  vendors harmoniously.
                </p>

                <div class="mt-8 space-y-6">
                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg
                        class="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-4 text-gray-600">
                      <span class="font-semibold text-gray-800"
                        >Efficiency:</span
                      >
                      Streamline operations for multiple companies under one
                      platform.
                    </p>
                  </div>

                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg
                        class="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-4 text-gray-600">
                      <span class="font-semibold text-gray-800"
                        >Flexibility:</span
                      >
                      Adaptable solutions that evolve with your business needs.
                    </p>
                  </div>

                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg
                        class="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <p class="ml-4 text-gray-600">
                      <span class="font-semibold text-gray-800"
                        >Collaboration:</span
                      >
                      Foster a collaborative ecosystem among multiple
                      businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Our Services Section -->
        <section class="py-16 bg-white">
          <div class="container mx-auto px-6">
            <div class="text-center mb-12">
              <h2
                class="text-4xl font-bold text-gray-800 inline-block relative"
              >
                Our Services
                <span
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180px] h-1.5 bg-sky-500 rounded-full mb-[-18px]"
                ></span>
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                class="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div class="flex items-center justify-center mb-4">
                  <div
                    class="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center"
                  >
                    <!-- Icon, use any preferred icon -->
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3
                  class="text-2xl font-semibold mb-4 text-gray-800 text-center"
                >
                  Online Banking
                </h3>
                <p class="text-gray-600 text-center">
                  High-quality service tailored to your needs.
                </p>
              </div>
              <div
                class="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div class="flex items-center justify-center mb-4">
                  <div
                    class="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center"
                  >
                    <!-- Icon, use any preferred icon -->
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3
                  class="text-2xl font-semibold mb-4 text-gray-800 text-center"
                >
                  Multi Vendor
                </h3>
                <p class="text-gray-600 text-center">
                  Innovative solutions for modern businesses.
                </p>
              </div>
              <div
                class="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div class="flex items-center justify-center mb-4">
                  <div
                    class="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center"
                  >
                    <!-- Icon, use any preferred icon -->
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3
                  class="text-2xl font-semibold mb-4 text-gray-800 text-center"
                >
                  Life Time Support
                </h3>
                <p class="text-gray-600 text-center">
                  Sustainable practices for long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Us Section -->
        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-6">
            <div class="text-center mb-12">
              <h2
                class="text-4xl font-bold text-gray-800 inline-block relative"
              >
                Contact Us
                <span
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] h-1.5 bg-sky-500 rounded-full mb-[-18px]"
                ></span>
              </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <!-- Image -->
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact Us"
                class="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />

              <!-- Contact Info -->
              <div class="ml-[20px]">
                <div class="mb-6">
                  <div class="flex items-start">
                    <div
                      class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white"
                    >
                      <!-- Location Icon -->
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 3c-4.418 0-8 3.582-8 8 0 6.048 8 11 8 11s8-4.952 8-11c0-4.418-3.582-8-8-8z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 11a2 2 0 100-4 2 2 0 000 4z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-800">Address</h4>
                      <p class="text-gray-600">
                        680//1/2 Monipur Mirpur Dhaka, 1216 Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <div class="flex items-start">
                    <div
                      class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white"
                    >
                      <!-- Phone Icon -->
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 6v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 8a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v1a2 2 0 002 2h16z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-800">Phone</h4>
                      <p class="text-gray-600">+880-177-858-8910</p>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <div class="flex items-start">
                    <div
                      class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white"
                    >
                      <!-- Email Icon -->
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5h18M5 5a2 2 0 100 4h14a2 2 0 100-4M5 14h14c1.11 0 2.08.9 2.47 2.07a10.79 10.79 0 01-.47 1.93c-.08.21-.46 1.07-1.1 1.51a11.04 11.04 0 01-1.65.87c-.74.3-1.89.58-3.16.62a11 11 0 01-3.38-.55 10.92 10.92 0 01-1.67-.76 7.1 7.1 0 01-1.12-.67 10.81 10.81 0 01-1.1-.98 9.97 9.97 0 01-.92-1.1c-.2-.33-.37-1.01-.46-1.82-.11-.99.13-3.91 2.92-6.1A9.9 9.9 0 0112.9 8C12.21 8 11.57 8.03 11 8c-1.35-.07-3.09-.12-4.68.48C4.22 8.86 3 10.09 3 11.5c0 1.05.95 1.5 2 1.5z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-800">Email</h4>
                      <p class="text-gray-600">farhatsnigdho1392@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div class="mb-6">
                  <div class="flex items-start">
                    <div
                      class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white"
                    >
                      <!-- Social Media Icon -->
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.75 9.75 0 0 1-2.9 1.13A4.44 4.44 0 0 0 11.54 8h-.08a12.66 12.66 0 0 1-9.16-4.7 4.48 4.48 0 0 0 1.39 6A4.44 4.44 0 0 1 1 9.71v.1a4.48 4.48 0 0 0 3.58 4.43 4.51 4.51 0 0 1-2 .07 4.48 4.48 0 0 0 4.18 3.12A9 9 0 0 1 1 18.12a12.8 12.8 0 0 0 7 2"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-800">Follow Us</h4>
                      <div class="flex space-x-2 mt-2">
                        <a href="#" class="text-gray-500 hover:text-sky-500">
                          Facebook Instragram Twiters
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
