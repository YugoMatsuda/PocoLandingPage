'use client'

import { useLocale } from '@/contexts/LocaleContext'
import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  const { translations: t } = useLocale()
  
  console.log('translations:', t); // デバッグ用

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1024-EIzYLxy841Bi12Gi7ssYrzqcZnTRfP.png"
              alt="Poco AI Logo"
              className="h-8 w-8"
              width={32}
              height={32}
            />
            <span className="font-bold">{t.header.title}</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <div className="prose dark:prose-invert">
            <p className="mb-4">Welcome to PomodoLog (hereinafter referred to as &quot;the App&quot;). These Terms of Service (hereinafter referred to as &quot;Terms&quot;) govern your use of the App. By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Service Description</h2>
            <p>PomodoLog provides users with tools to record, analyze, and receive notifications regarding their caffeine intake. Additionally, the App offers subscription-based services that provide enhanced features and functionalities.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. User Accounts</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Account Registration:</strong> Users are not required to create a separate account to use the App. Instead, data is stored securely on Apple&apos;s iCloud servers.</li>
              <li><strong>Required Information:</strong> To use the App, users must have an active iCloud account. The App utilizes the user&apos;s iCloud account for data storage purposes.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <p>Since all data is used exclusively within the App and is not shared with others, there are no additional responsibilities imposed on users beyond adhering to these Terms.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Prohibited Activities</h2>
            <p>Users agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Unauthorized Access:</strong> Attempting to gain unauthorized access to the App, its servers, or any related systems.</li>
              <li><strong>Intellectual Property Infringement:</strong> Violating the intellectual property rights of others, including copyright and trademark infringements.</li>
              <li><strong>Spam:</strong> Engaging in spamming activities, including sending unsolicited messages or advertisements through the App.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>All rights, titles, and interests in and to the App, including all intellectual property rights, are owned by the developer. Users are granted a limited, non-exclusive, non-transferable license to use the App in accordance with these Terms.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes and Termination of Service</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Modifications:</strong> The developer reserves the right to modify or discontinue the App or any of its features at any time without prior notice.</li>
              <li><strong>Subscription Features:</strong> Features available through subscription may be changed or removed without notice.</li>
              <li><strong>Termination:</strong> The developer may terminate or suspend access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
            <p>The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The developer disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. The developer does not warrant that the App will be uninterrupted, secure, or error-free.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <p>In no event shall the developer be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use the App;</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App by any third party;</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Privacy</h2>
            <p>Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms of Service</h2>
            <p>The developer reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting of the revised Terms in the App. It is your responsibility to review these Terms periodically for any updates or changes.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law and Jurisdiction</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Japan.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">12. Other Provisions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Payment Terms:</strong> For subscription services and any in-app purchases, payments are processed through Apple&apos;s App Store. All transactions are subject to Apple&apos;s <a href="https://www.apple.com/legal/internet-services/terms/site.html" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="https://www.apple.com/legal/privacy/" className="text-blue-600 hover:underline">Privacy Policy</a>.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">13. Contact Information</h2>
            <p>pomodologappdevelopment@gmail.com</p>

            <p className="mt-8 text-sm text-gray-600">Last Updated: December 15 2024</p>
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