// // import { clsx, type ClassValue } from "clsx"
// // import { twMerge } from "tailwind-merge"

// import{clsx , type ClassValue} from "clsx";
// import {twmerge} from "tailwind-merge";
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import { clsx, type ClassValue } from "clsx"; // Correct import for clsx
import { twMerge } from "tailwind-merge"; // Correct import for twMerge

// Function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs)); // Ensure proper usage of clsx and twMerge
}
