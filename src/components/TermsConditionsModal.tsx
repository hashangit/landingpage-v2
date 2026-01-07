"use client";

import LegalModal from "./LegalModal";
import { useModals } from "@/contexts/ModalContext";

export default function TermsConditionsModal() {
  const { isTermsConditionsOpen, closeTermsConditions } = useModals();

  return (
    <LegalModal isOpen={isTermsConditionsOpen} onClose={closeTermsConditions} title="Terms & Conditions">
      <p className="text-sm text-gray-600 mb-6">
        <em>Last updated: 7 January 2026</em>
      </p>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">1. Introduction</h3>
        <p className="text-gray-600 mb-3">
          These Terms & Conditions ("Terms") govern the use of the transport services provided by HassleFreeCare ("we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms.
        </p>
        <p className="text-gray-600">
          If you do not agree with these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services following any changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">2. Service Description</h3>
        <p className="text-gray-600 mb-3">
          HassleFreeCare provides driver-led transport infrastructure services for home care providers in the United Kingdom. Our services include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
          <li>Transporting care workers to and from patient visits</li>
          <li>Providing vehicles and qualified drivers</li>
          <li>Scheduling and route optimisation</li>
          <li>Real-time tracking and coordination</li>
        </ul>
        <p className="text-gray-600">
          We endeavour to provide reliable and timely services but do not guarantee uninterrupted or error-free service availability.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">3. Booking and Scheduling</h3>
        <h4 className="font-medium text-brand-navy mt-4 mb-2">3.1 Booking Process</h4>
        <p className="text-gray-600 mb-3">
          Bookings can be made through our website, phone, or email. All bookings are subject to availability and confirmation by HassleFreeCare.
        </p>

        <h4 className="font-medium text-brand-navy mt-4 mb-2">3.2 Cancellations</h4>
        <p className="text-gray-600 mb-3">
          <strong>Cancellation by Client:</strong> Cancellations must be made at least 24 hours before the scheduled pickup time. Late cancellations may incur a fee.
        </p>
        <p className="text-gray-600">
          <strong>Cancellation by HassleFreeCare:</strong> We reserve the right to cancel bookings due to unforeseen circumstances (e.g., severe weather, vehicle breakdown). In such cases, we will provide reasonable notice and attempt to arrange alternative transport where possible.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">4. Fees and Payment</h3>
        <h4 className="font-medium text-brand-navy mt-4 mb-2">4.1 Pricing</h4>
        <p className="text-gray-600 mb-3">
          Our pricing is based on distance, time, and service type. A quote will be provided prior to service confirmation. Prices may be adjusted with 30 days' notice for ongoing contracts.
        </p>

        <h4 className="font-medium text-brand-navy mt-4 mb-2">4.2 Payment Terms</h4>
        <p className="text-gray-600 mb-3">
          For one-off services, payment is due within 7 days of invoice. For ongoing contracts, payment terms are agreed upon in the service contract.
        </p>
        <p className="text-gray-600">
          <strong>Late Payments:</strong> Late payments may incur interest at the statutory maximum rate under the Late Payment of Commercial Debts Regulations 2013.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">5. Client Responsibilities</h3>
        <p className="text-gray-600 mb-3">As a client, you agree to:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
          <li>Provide accurate and complete booking information</li>
          <li>Ensure care workers are ready at the scheduled pickup time</li>
          <li>Supervise care workers during transport where appropriate</li>
          <li>Inform us of any special requirements or accessibility needs</li>
          <li>Not use our services for any unlawful purpose</li>
        </ul>
        <p className="text-gray-600">
          We are not responsible for delays caused by client unavailability or incorrect information provided.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">6. Limitation of Liability</h3>
        <h4 className="font-medium text-brand-navy mt-4 mb-2">6.1 Service Limitations</h4>
        <p className="text-gray-600 mb-3">
          While we strive to provide excellent service, we do not guarantee:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-3">
          <li>Exact pickup or drop-off times (traffic, weather, and other factors may cause delays)</li>
          <li>Availability of specific vehicles or drivers</li>
          <li>Uninterrupted service availability</li>
        </ul>

        <h4 className="font-medium text-brand-navy mt-4 mb-2">6.2 Liability Caps</h4>
        <p className="text-gray-600 mb-3">
          Our liability is limited to the amount paid for the specific service in question. We are not liable for:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of business, revenue, or profits</li>
          <li>Delays beyond our reasonable control</li>
        </ul>
        <p className="text-gray-600 mt-3 text-sm">
          Nothing in these Terms limits our liability for death or personal injury resulting from our negligence, or for fraud.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">7. Insurance</h3>
        <p className="text-gray-600 mb-3">
          We maintain appropriate insurance cover for our vehicles and operations as required by UK law, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Motor vehicle insurance (third party and comprehensive)</li>
          <li>Employer's liability insurance</li>
          <li>Public liability insurance</li>
        </ul>
        <p className="text-gray-600 mt-3">
          Clients should maintain their own appropriate insurance coverage.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">8. Data Protection</h3>
        <p className="text-gray-600">
          Your privacy is important to us. Personal data is processed in accordance with our Privacy Policy, which complies with the UK GDPR and the Data Protection Act 2018.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">9. Termination</h3>
        <p className="text-gray-600 mb-3">
          <strong>By Client:</strong> You may terminate ongoing services by providing 30 days' written notice.
        </p>
        <p className="text-gray-600">
          <strong>By HassleFreeCare:</strong> We may terminate services if you breach these Terms, with reasonable notice. Immediate termination may occur for material breaches such as non-payment or abusive behaviour towards our staff.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold text-brand-navy mb-3">10. Governing Law and Dispute Resolution</h3>
        <p className="text-gray-600 mb-3">
          These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
        <p className="text-gray-600">
          We aim to resolve disputes amicably. If you have a concern, please contact us at hello@hasslefreecare.uk.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-brand-navy mb-3">11. Contact Information</h3>
        <p className="text-gray-600 mb-3">For questions about these Terms, please contact us:</p>
        <div className="bg-gray-50 p-4 rounded-lg text-gray-600">
          <p><strong>Email:</strong> hello@hasslefreecare.uk</p>
          <p><strong>Phone:</strong> 02039099746</p>
          <p><strong>Address:</strong> 20 Wenlock Road, London, N1 7GU</p>
        </div>
      </section>
    </LegalModal>
  );
}
