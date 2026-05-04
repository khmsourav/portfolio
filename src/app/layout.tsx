import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Kazi Sourav — Frontend Developer",
  description:
    "BSc CSE graduate and Frontend Developer specializing in React.js, Vue.js, TypeScript, Shopify Polaris, and AI-powered web applications.",
  keywords: ["frontend developer", "react developer", "vue.js", "shopify polaris", "bangladesh"],
  authors: [{ name: "Kazi Sourav" }],
  openGraph: {
    title: "Kazi Sourav — Frontend Developer",
    description: "Building beautiful, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
