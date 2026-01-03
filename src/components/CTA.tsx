"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Talk</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              If transport constraints are limiting your ability to deliver care, we'd be happy to explore whether our model can support your operations.
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
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Message Sent</h3>
                  <p className="text-gray-600">Thank you. One of our operational leads will be in touch shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
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
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-brand-navy">Message</label>
                    <textarea 
                      required
                      id="message" 
                      rows={4} 
                      placeholder="How can we help your operations?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
