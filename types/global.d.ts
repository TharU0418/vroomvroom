export {};

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

//declare function gtag_report_conversion(url?: string): boolean;
