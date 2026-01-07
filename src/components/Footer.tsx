"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsConditionsModal from "./TermsConditionsModal";
import { useModals } from "@/contexts/ModalContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openPrivacyPolicy, openTermsConditions } = useModals();

  return (
    <>
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <div className="relative h-36 w-120">
                <Image
                  src="/logo.svg"
                  alt="HassleFreeCare Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Operational transport infrastructure for the UK home care sector.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Contact</h4>
              <a
                href="https://maps.google.com/?q=20+Wenlock+Road+London+N1+7GU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>20 Wenlock Road<br />London, N1 7GU</span>
              </a>
              <a
                href="tel:02039099746"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>02039099746</span>
              </a>
              <a
                href="mailto:hello@hasslefreecare.uk"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@hasslefreecare.uk</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Company</h4>
              <Link
                href="#problem"
                className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                The Challenge
              </Link>
              <Link
                href="#solution"
                className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                Our Solution
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
              >
                How It Works
              </Link>
            </div>

            {/* Legal & Copyright */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide">Legal</h4>
              <button
                onClick={openPrivacyPolicy}
                className="text-sm text-gray-500 hover:text-brand-blue transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={openTermsConditions}
                className="text-sm text-gray-500 hover:text-brand-blue transition-colors text-left"
              >
                Terms & Conditions
              </button>
              <p className="text-xs text-gray-400 mt-2">
                © {currentYear} HassleFreeCare.<br />All rights reserved.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="pt-8 border-t border-gray-50 text-center">
            <a
              href="https://www.inferencequotient.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-brand-blue transition-colors"
            >
              Designed and Developed by Inference Quotient (Pvt) Ltd
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal />
      <TermsConditionsModal />
    </>
  );
}
