
import "./../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Doniyorjon Kuchkarov",
  description: "Personal Resume Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
