import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "NuanceProductions",
  description: "NuanceProductions Portfolio",
  icons: {
    icon: "/images/logo/logo1.svg",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#171814" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
