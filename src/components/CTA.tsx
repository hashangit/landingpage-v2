"use client";

import { useState } from "react";
import { Send, ArrowRight, Loader2 } from "lucide-react";
import Toast from "./Toast";

interface FormSubmitData {
  name: string;
  role: string;
  org: string;
  email: string;
  message: string;
}

interface FormcarryResponse {
  code: number;
  message: string;
  id?: string;
}

const initialFormState = {
  isSubmitting: false,
  submitError: null as string | null,
  isSuccess: false,
  showToast: false,
};

export default function CTA() {
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check honeypot - silent fail if filled (bot)
    if (formData.get("_honey")) {
      return;
    }

    const data: FormSubmitData = {
      name: String(formData.get("name") ?? ""),
      role: String(formData.get("role") ?? ""),
      org: String(formData.get("org") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setFormState(prev => ({ ...prev, isSubmitting: true, submitError: null, showToast: false }));

    // Validate environment variable
    const formcarryUrl = process.env.NEXT_PUBLIC_FORMCARRY_URL;
    if (!formcarryUrl) {
      console.error("Formcarry URL is not defined. Please set NEXT_PUBLIC_FORMCARRY_URL environment variable.");
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitError: "Form submission is currently unavailable. Please try again later.",
        showToast: true,
      }));
      return;
    }

    try {
      const response = await fetch(formcarryUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: FormcarryResponse = await response.json();

      if (response.ok && result.code === 200) {
        setFormState({
          isSubmitting: false,
          submitError: null,
          isSuccess: true,
          showToast: false,
        });
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again.";

      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitError: errorMessage,
        showToast: true,
      }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&apos;s Talk</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              If transport constraints are limiting your ability to deliver care, we&apos;d be happy to explore whether our model can support your operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="font-bold">No commitments</p>
                  <p className="text-sm text-gray-400">An initial conversation to explore fit.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="font-bold">Operational focus</p>
                  <p className="text-sm text-gray-400">Discussion led by care-sector understanding.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl">
              {formState.isSuccess ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Message Sent</h3>
                  <p className="text-gray-600">Thank you. One of our operational leads will be in touch shortly.</p>
                  <button
                    onClick={() => setFormState(initialFormState)}
                    className="mt-8 text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-brand-navy">Full Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-bold text-brand-navy">Role</label>
                      <input
                        required
                        type="text"
                        id="role"
                        name="role"
                        placeholder="Operations Manager"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org" className="text-sm font-bold text-brand-navy">Organisation</label>
                    <input
                      required
                      type="text"
                      id="org"
                      name="org"
                      placeholder="Your Care Company Ltd"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-brand-navy">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-brand-navy">Message</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help your operations?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Honeypot field for spam protection */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-5000px",
                      width: 0,
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="honey" className="sr-only">
                      Don&apos;t fill this out if you&apos;re human
                    </label>
                    <input
                      type="text"
                      id="honey"
                      name="_honey"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState.isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Toast
        message={formState.submitError || ""}
        type="error"
        isVisible={formState.showToast}
        onClose={() => setFormState(prev => ({ ...prev, showToast: false }))}
      />
    </section>
  );
}
