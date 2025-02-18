'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from '@/contexts/LocaleContext'
import Link from 'next/link'

export default function LandingPage() {
  const { translations: t } = useLocale()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024-EIzYLxy841Bi12Gi7ssYrzqcZnTRfP.png"
              alt="Poco AI Logo"
              className="h-8 w-8"
            />
            <span className="font-bold">{t.header.title}</span>
          </div>
          <div className="flex-1"></div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-100 via-blue-100 to-purple-100 pt-4 pb-8">
          <div className="container relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3%20(6)-WUlp8lZWmNxlSV4rtG2rZb1tTIDlBK.png"
                  alt="Poco AI app interface showing productivity tracking across MacBook with statistics dashboard, iPad with focus goals, Apple Watches with Reading and Work timers, and iPhones displaying AI feedback with beautiful gradients"
                  className="w-full"
                />
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-4 mt-8">
                <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/jp/app/ai-%E3%83%9D%E3%83%A2%E3%83%89%E3%83%BC%E3%83%AD%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-poco/id6739179159?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                    alt="Download on the App Store"
                    className="h-[40px] w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/jp/app/ai-%E3%83%9D%E3%83%A2%E3%83%89%E3%83%BC%E3%83%AD%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-poco/id6739179159?platform=mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=250x83"
                    alt="Download on the Mac App Store"
                    className="h-[40px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-orange-300 opacity-50 blur-2xl"></div>
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-purple-300 opacity-50 blur-2xl"></div>
        </section>

        {/* Features Section */}
        <section className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t.features.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-16 py-8">
            {/* AI Coaching Feature */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.features.aiCoaching.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {t.features.aiCoaching.description}
                </p>
              </div>
              <Card className="w-full max-w-4xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <video controls autoPlay muted loop className="w-full h-full object-cover" playsInline>
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poco-RhF8K6pJ2fXf2okR5ehM8UVKG0NgUV.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Beautiful Work Timer Feature */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.features.timer.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {t.features.timer.description}
                </p>
              </div>
              <div className="relative p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beatutiful_timer-eEvN7W3eTbVqN7UgXTzDeKoPndg0r5.png"
                  alt="Beautiful Timer Interface"
                  className="w-full max-w-2xl rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>

            {/* Focus Goal Setting Feature */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.features.goals.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {t.features.goals.description}
                </p>
              </div>
              <div className="relative p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/focus_target-nydkOQjCsYZoNcqbT9ebuvhwI9hGhX.png"
                  alt="Focus Target Analytics"
                  className="w-full max-w-2xl rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>

            {/* Cross-Device Sync Feature */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.features.sync.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {t.features.sync.description}
                </p>
              </div>
              <div className="relative p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sync_device-YDVtdL0g9BkGmYwklSX4Th2gyrfixM.png"
                  alt="Cross Device Sync"
                  className="w-full max-w-2xl rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>

            {/* Others Feature */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.features.other.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {t.features.other.description}
                </p>
              </div>
              <div className="relative p-4 overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-blue-300 to-purple-300 opacity-30 blur-2xl"></div>
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{t.features.other.stats.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t.features.other.stats.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{t.features.other.calendar.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t.features.other.calendar.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{t.features.other.bgm.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t.features.other.bgm.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{t.features.other.notification.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t.features.other.notification.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 lg:py-24">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024-EIzYLxy841Bi12Gi7ssYrzqcZnTRfP.png"
                alt="Poco AI Logo"
                className="h-8 w-8"
              />
              <span className="font-bold">{t.header.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.subtitle}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">{t.footer.legal.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:underline">
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  {t.footer.legal.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <LocaleSwitcher />
    </div>
  )
}

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'ja' : 'en')}
      className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-lg shadow-lg"
    >
      Switch to {locale === 'en' ? '日本語' : 'English'}
    </button>
  )
}

