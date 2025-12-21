import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const fontSerif = EB_Garamond({
    variable: "--font-serif",
});

const fontSans = Inter({
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        template: "%s - Fachri Riyanto",
        default: "Fachri Riyanto",
    },
    description: "Fullstack Developer who build applications using HTML5, CSS3, Tailwind, PHP, WordPress, Laravel, Python, FastAPI, JavaScript, jQuery, ReactJS, NextJS, TypeScript, MySQL, PostgreSQL and Docker.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon-180x180.png" sizes="180x180" />
            </head>
            <body className={`${fontSerif.variable} ${fontSans.variable} antialiased`}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-1XTC88KYJZ" />
        </html>
    );
}