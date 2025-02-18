'use client'

import { useLocale } from '@/contexts/LocaleContext'
import Link from 'next/link'

export default function PrivacyPage() {
  const { translations: t } = useLocale()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024-EIzYLxy841Bi12Gi7ssYrzqcZnTRfP.png"
              alt="Poco AI Logo"
              className="h-8 w-8"
            />
            <span className="font-bold">{t.header.title}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              This Privacy Policy (hereinafter referred to as "this Policy") explains how personal information of users (hereinafter referred to as "Users") is handled when using Poco (hereinafter referred to as "this App"). By using this App, you are deemed to have agreed to this Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Types of Information Collected</h2>
            <p>This App automatically collects the following information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Log Data: Data related to app usage and operation history.</li>
              <li>Crash Data: Data generated when the app malfunctions or errors occur.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Methods of Information Collection</h2>
            <p>This App collects information through the following methods:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>In-App Behavior Logs: Sends and analyzes Users' operation history within the app using analysis tools.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Purpose of Using Information</h2>
            <p>The collected information is used for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>App Improvement and Feature Addition: Analyzes user usage to enhance app quality and develop new features.</li>
              <li>Notifications and Communications to Users: Provides important updates and announcements to Users.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Provision of Information to Third Parties</h2>
            <p>This App provides information to third parties only in the following cases:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sharing with Advertising Partners and Analysis Tools: Shares information with third-party services for advertising display and usage analysis.</li>
              <li>Provision Based on Legal Demands: Provides information when required by laws or court orders.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Storage and Protection</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Data Storage Locations: Collected data is stored in reliable cloud services.</li>
              <li>Security Measures: Implements appropriate security measures such as encryption and access restrictions to protect data.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Age Restrictions</h2>
            <p>There are no age restrictions for using this App.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Privacy Policy</h2>
            <p>We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting the updated privacy policy on Poco. We encourage you to review this privacy policy periodically for any updates.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Information</h2>
            <p>If you have any questions or concerns regarding this Policy, please contact us at the following:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email Address: pomodologappdevelopment@gmail.com</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-gray-600">
          <p>{t.footer.subtitle}</p>
        </div>
      </footer>
    </div>
  )
} 