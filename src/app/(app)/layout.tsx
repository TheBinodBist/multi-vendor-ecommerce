import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans= DM_Sans({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Multi vendor ecommerce",
  description: "Multi vendor ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  suppressHydrationWarning
        className={`${dmSans.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
