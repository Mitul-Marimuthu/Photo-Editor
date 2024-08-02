// layout of the entire app - sign in button sign out button - starting screen

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
 } from "@clerk/nextjs"; 

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex' // variable that changed font
});

export const metadata: Metadata = {
  title: "Bangeditor", // website name
  description: "Ai-powered image generator", // website desc
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <SignedOut>
            {/* <SignInButton /> */}
          </SignedOut>
          <SignedIn>
            {/* <UserButton /> */}
          </SignedIn>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
