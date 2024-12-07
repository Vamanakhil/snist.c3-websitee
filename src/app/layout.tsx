import './globals.css'

import { Inter, Poppins, Ubuntu, Rubik, Open_Sans } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

import Navbar from '../components/Navbar'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const rubik = Rubik({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-rubik',
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['500'],
})

const ubuntu = Ubuntu({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu',
})

const open_sans = Open_Sans({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-open_sans',
})

export const metadata = {
    title: 'Cloud Community Club (C³)',
    description: 'Empowering students to explore and excel in cloud computing and emerging technologies. Join C³ for hands-on experience, research opportunities, and industry collaboration. #Development2Deployment',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactNode {
    return (
        <html
            className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${open_sans.variable}`}
        >
            <Analytics />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
