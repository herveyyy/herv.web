import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/organisms/Nav";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Herv.Web | Specialized System Engineer",
    description: "Engineering Custom Web Application Systems",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth sm:scroll-auto">
            <body
                className={`${inter.className} antialiased selection:bg-emerald-100 selection:text-emerald-900 `}
            >
                <Nav />
                {children}
                <Script src="https://cdn.tailwindcss.com" />
                <Script src="https://cdn.jsdelivr.net/npm/chart.js" />
            </body>
        </html>
    );
}
