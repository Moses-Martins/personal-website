import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import './globals.css';

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '500', '700'], 
  // Omit the 'variable' property
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moses Martins - Portfolio",
  description: "Learn more about Moses Martins, web developer.",
  icons: {
    icon: "/ProfilePic.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body
        className={`${firaCode.className} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
