import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Quattrocento } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
});

// Configure the font
const quattrocento = Quattrocento({
    weight: ['400', '700'], // Choose the weights you need
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Harmony Hill - 100% vegan luxury villas in Bali",
    description: "Escape to a private 100% vegan villa north of Ubud. Enjoy jungle views, a private infinity pool, and a private chef. Waterfall nearby—book your luxury Bali retreat.",
    
    metadataBase: new URL('https://harmonyhillbali.com'),
    alternates: {
        canonical: '/',
    },
    
    // Beautiful lookiong link when sharing it on social media
    openGraph: {
        title: 'Harmony Hill | Vegan Luxury Villa',
        description: 'Private infinity pool, jungle views, and vegan private chef.',
        images: [{
            url: `${baseUrl}/images/nook-bed-view.avif`,
            width: 1000,
            height: 750,
        }],
    },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-N5VDX2B4" />

            <body className={`${geistSans.variable} ${geistMono.variable} ${quattrocento.className}`}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
