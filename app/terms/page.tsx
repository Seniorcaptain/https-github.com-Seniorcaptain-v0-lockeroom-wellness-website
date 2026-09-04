import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of the Lockeroom Wellness platform.",
}

export default function TermsPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the Lockeroom Wellness website and booking services, you agree to be bound by
              these Terms of Service and our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. Nature of Our Service</h2>
            <p className="text-muted-foreground">
              Lockeroom Wellness is a platform that connects clients with independent, licensed mental health
              professionals. We do not ourselves provide medical or psychiatric care, and we do not guarantee
              specific treatment outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Not for Emergencies</h2>
            <p className="text-muted-foreground">
              Lockeroom Wellness is not an emergency service. If you are experiencing a mental health crisis or
              are in danger, call{" "}
              <a href="tel:999" className="text-primary underline">
                999
              </a>{" "}
              or Kenya Red Cross at{" "}
              <a href="tel:1199" className="text-primary underline">
                1199
              </a>{" "}
              immediately, or visit our{" "}
              <a href="/emergency" className="text-primary underline">
                Emergency Resources
              </a>{" "}
              page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Bookings, Fees & Cancellations</h2>
            <p className="text-muted-foreground">
              Session fees are shown in Kenyan Shillings (KES) at the time of booking. Cancellation and rescheduling
              policies will be communicated at the time of booking and may vary by professional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. User Responsibilities</h2>
            <p className="text-muted-foreground">
              You agree to provide accurate information when creating an account or booking a session, and to use
              the platform lawfully and respectfully toward professionals and staff.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Confidentiality</h2>
            <p className="text-muted-foreground">
              Communications with your therapist are confidential, subject to the legal and ethical obligations that
              apply to licensed mental health professionals in Kenya (including duty-to-warn exceptions where there
              is risk of serious harm).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Lockeroom Wellness facilitates connections between clients and independent professionals and is not
              liable for the clinical judgment or conduct of individual professionals, to the extent permitted by
              Kenyan law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">8. Changes to These Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of the platform after changes constitutes
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">9. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these Terms can be sent to{" "}
              <a href="mailto:support@lockeroomwellness.ke" className="text-primary underline">
                support@lockeroomwellness.ke
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-muted-foreground italic">
            This is a template and should be reviewed by a Kenyan-qualified lawyer before publishing, to reflect
            your actual booking, payment, and cancellation policies.
          </p>
        </div>
      </section>
    </main>
  )
}
