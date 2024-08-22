import { ThemeProvider } from "~/context/themeContext";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Roboto, Oxygen, Ubuntu, Cantarell, Fira_Sans } from "next/font/google";
import "~/styles/index.css";
import "~/styles/_themes.scss";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
});

const roboto = Roboto({
    weight: ["400"],
    variable: "--font-roboto",
    subsets: ["latin"],
    display: "swap"
});

const oxygen = Oxygen({
    weight: ["400"],
    variable: "--font-oxygen",
    subsets: ["latin"],
    display: "swap"
});

const ubuntu = Ubuntu({
    weight: ["400"],
    variable: "--font-ubuntu",
    subsets: ["latin"],
    display: "swap"
});

const cantarell = Cantarell({
    weight: ["400"],
    variable: "--font-cantarell",
    subsets: ["latin"],
    display: "swap"
});

const firaSans = Fira_Sans({
    weight: ["400"],
    variable: "--font-fira-sans",
    subsets: ["latin"],
    display: "swap"
});

export const metadata: Metadata = {
    title: "Strut components gallery"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${roboto.variable} ${oxygen.variable} ${ubuntu.variable} ${cantarell.variable} ${firaSans.variable}`}
        >
            <head>
                <Script id="theme-detection" strategy="beforeInteractive">
                    {`
                        const savedTheme = localStorage.getItem("theme");
                        const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                        let theme = deviceTheme;

                        switch (savedTheme) {
                            case "light":
                                theme = "light";
                                break;
                            case "dark":
                                theme = "dark";
                                break;
                            default:
                                theme = deviceTheme;
                        }
                        document.documentElement.setAttribute("data-theme", theme);
                    `}
                </Script>
            </head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
