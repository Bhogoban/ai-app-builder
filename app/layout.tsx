import type { Metadata } from "next";
import { DM_Sans,Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/ui/theme-provider";

import Header from "@/components/ui/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const lora= Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Forge - AI App Builder",
  description: "Build AI apps with ease using Forge, the AI app builder that simplifies the development process and empowers you to create powerful applications in no time.",
  icons: {
    icon: "/logo-short2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html
      lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
         <Header />
         <main>{children}</main>
        <Toaster richColors/>
         </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>

  );
}
