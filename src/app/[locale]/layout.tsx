import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { BackToTop } from '../components/back-to-top'
import { ContactForm } from '../components/contact-form'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Toaster } from '../components/toaster'
import { locales } from '../types/locales'
import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: {
    locale: string
  }
}) {
  const messages = useMessages()
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <NextIntlClientProvider
          messages={messages}
        >
          <Analytics />
          <Toaster />
          <Header />
          {children}
          <ContactForm />
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
