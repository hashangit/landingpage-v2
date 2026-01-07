"use client";

import LegalModal from "./LegalModal";
import { useModals } from "@/contexts/ModalContext";

export default function PrivacyPolicyModal() {
  const { isPrivacyPolicyOpen, closePrivacyPolicy } = useModals();

  return (
    <LegalModal isOpen={isPrivacyPolicyOpen} onClose={closePrivacyPolicy} title="Privacy Policy">
      <p className="text-sm text-gray-600 mb-6">
        <em>Last updated: 7 January 2026</em>
      </p>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">1. Introduction</h3>
        <p className="text-gray-600 mb-3">
          HassleFreeCare ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our transport services for home care providers. Please read this policy carefully.
        </p>
        <p className="text-gray-600">
          We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our services, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">2. Information We Collect</h3>

        <h4 className="font-medium text-brand-navy mt-4 mb-2">2.1 Personal Information</h4>
        <p className="text-gray-600 mb-3">We may collect personal information that includes, but is not limited to:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
          <li>Name and contact details (phone number, email address)</li>
          <li>Organisation name and billing information</li>
          <li>Booking and scheduling information</li>
          <li>Communication preferences</li>
        </ul>

        <h4 className="font-medium text-brand-navy mt-4 mb-2">2.2 How We Collect Information</h4>
        <p className="text-gray-600">We collect information directly from you when you:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Book our transport services</li>
          <li>Communicate with us via phone, email, or our website</li>
          <li>Request a quote or meeting through our booking system</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">3. How We Use Your Information</h3>
        <p className="text-gray-600 mb-3">We use the information we collect to:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Provide, maintain, and improve our transport services</li>
          <li>Process bookings and schedule transport</li>
          <li>Communicate with you regarding bookings and inquiries</li>
          <li>Send you relevant updates, marketing communications (with your consent)</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="text-gray-600 mt-3">
          Our lawful basis for processing your data includes contract performance, legitimate business interests, and where applicable, your consent.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">4. Data Sharing and Disclosure</h3>
        <p className="text-gray-600 mb-3">We may share your information with:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li><strong>Service Providers:</strong> Third-party drivers and transport partners who assist in delivering our services</li>
          <li><strong>Business Partners:</strong> Care organisations and home care providers with whom we jointly deliver services</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or government authorities</li>
        </ul>
        <p className="text-gray-600 mt-3">
          We do not sell your personal information to third parties for marketing purposes.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">5. Data Security</h3>
        <p className="text-gray-600 mb-3">
          We implement appropriate technical and organisational measures to protect your personal information against unauthorised or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the internet is 100% secure.
        </p>
        <p className="text-gray-600">
          We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">6. Your Rights</h3>
        <p className="text-gray-600 mb-3">Under UK GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data (subject to certain conditions)</li>
          <li><strong>Restrict Processing:</strong> Request restriction of processing</li>
          <li><strong>Data Portability:</strong> Request transfer of your data to another organisation</li>
          <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
        </ul>
        <p className="text-gray-600 mt-3">
          To exercise these rights, please contact us at hello@hasslefreecare.uk. We will respond to your request within 30 days.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">7. Cookies and Tracking</h3>
        <p className="text-gray-600">
          Our website may use cookies and similar technologies to enhance user experience, analyse usage, and assist in our marketing efforts. You can control cookie settings through your browser preferences. Our booking partner Cal.com may also use cookies; please refer to their privacy policy for details.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-brand-navy mb-3">8. Contact Us</h3>
        <p className="text-gray-600 mb-3">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
        <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
          <p><strong>Email:</strong> hello@hasslefreecare.uk</p>
          <p><strong>Phone:</strong> 02039099746</p>
          <p><strong>Address:</strong> 20 Wenlock Road, London, N1 7GU</p>
        </div>
        <p className="text-gray-600 mt-3 text-sm">
          You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe our processing of your personal data infringes UK data protection laws.
        </p>
      </section>
    </LegalModal>
  );
}
