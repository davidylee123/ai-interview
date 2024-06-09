import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <Header />
      <section className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-screen-md">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-none mb-4 dark:text-white">
            AI Mock Interview
          </h1>
          <p className="text-lg lg:text-xl font-normal text-gray-500 mb-8 dark:text-gray-400">
            Practice your interview with my AI-powered interview project!
          </p>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center py-3 px-6 text-base font-medium text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
