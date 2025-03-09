import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const handleDownloadPdf = () => {
//   // Create a temporary link element
//   const link = document.createElement("a");
//   link.href = ResumefileUrl;
//   link.download = fileName; // Sets the filename for download
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link); // Clean up
// };

export const handleOpenPdf = (pdfPath: string) => {
  // window.open creates a new browser tab with the PDF
  window.open(pdfPath, "_blank");
};
