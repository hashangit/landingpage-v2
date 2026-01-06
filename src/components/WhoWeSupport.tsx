export default function WhoWeSupport() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-brand-blue/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Who We Support</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              We work with care providers of all sizes — especially if your carers struggle to get between visits.
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="font-bold text-brand-blue">Single Branch</p>
                <p className="text-sm text-gray-500 mt-2">Make your local rota reliable</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="font-bold text-brand-blue">Regional Groups</p>
                <p className="text-sm text-gray-500 mt-2">Connect your care teams</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <p className="font-bold text-brand-blue">National Providers</p>
                <p className="text-sm text-gray-500 mt-2">Scale across all your branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
