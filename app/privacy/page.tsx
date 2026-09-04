import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lockeroom Wellness collects, uses, and protects your personal and health information, in line with Kenya's Data Protection Act, 2019.",
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              Lockeroom Wellness ("we", "us", "our") provides an online platform connecting clients with licensed
              mental health professionals in Kenya. We are committed to protecting your privacy and handling your
              personal data, including sensitive health information, in accordance with the{" "}
              <strong>Data Protection Act, 2019</strong> of Kenya and its subsidiary regulations, as registered with
              the Office of the Data Protection Commissioner (ODPC).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Identity data: name, email address, phone number.</li>
              <li>Booking data: appointment times, chosen professional, session type.</li>
              <li>
                Health-related data: information you share with your therapist or through intake forms, which is
                treated as <strong>sensitive personal data</strong> under the Data Protection Act.
              </li>
              <li>Payment data: transaction records (payment card details are processed by our payment provider, not stored by us).</li>
              <li>Technical data: IP address, browser type, and usage data collected via cookies and analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use your information to schedule and deliver therapy sessions, communicate with you about your
              account and bookings, process payments, improve our services, and comply with legal obligations. We do
              not sell your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Sharing Your Information</h2>
            <p className="text-muted-foreground">
              Your health-related information is shared only with the licensed professional(s) you book sessions
              with. We may share limited data with trusted service providers (e.g. payment processors, hosting
              providers) under confidentiality obligations, or where required by Kenyan law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground">
              We use encryption in transit and access controls to protect your data. No online platform can
              guarantee absolute security, but we take reasonable technical and organizational measures appropriate
              to the sensitivity of the data we hold.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground">
              Under the Data Protection Act, 2019, you have the right to access, correct, or delete your personal
              data, to object to or restrict certain processing, and to lodge a complaint with the Office of the
              Data Protection Commissioner. To exercise these rights, contact us at{" "}
              <a href="mailto:support@lockeroomwellness.ke" className="text-primary underline">
                support@lockeroomwellness.ke
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal and session data only for as long as necessary to provide our services and meet
              legal or regulatory obligations, after which it is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground">
              Questions about this policy or your data can be sent to{" "}
              <a href="mailto:support@lockeroomwellness.ke" className="text-primary underline">
                support@lockeroomwellness.ke
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+254702123456" className="text-primary underline">
                +254 702 123 456
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-muted-foreground italic">
            This is a template policy and should be reviewed by a Kenyan-qualified lawyer and registered with the
            ODPC before publishing, to ensure it accurately reflects your actual data practices and vendors.
          </p>
        </div>
      </section>
    </main>
  )
}
