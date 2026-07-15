export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ Items */}
      <section className="space-y-6">
        <div className="border-b pb-5">
          <h2 className="font-semibold text-base mb-2">
            How long does shipping take?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            All orders are processed upon receipt. Delivery times: 4-8 days .
          </p>
        </div>

        <div className="border-b pb-5">
          <h2 className="font-semibold text-base mb-2">
            Are all items in photo's included?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Auto parts are sold separately unless otherwise stated on the
            product page.
          </p>
        </div>

        <div className="border-b pb-5">
          <h2 className="font-semibold text-base mb-2">
            Do parts require professional installation?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We recommend professional installation for auto parts
          </p>
        </div>

        <div className="border-b pb-5">
          <h2 className="font-semibold text-base mb-2">
            What should I do if my order arrives damaged?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Please inspect your shipment upon delivery and contact us within 48
            hours if there is any damage.
          </p>
        </div>

        <div className="border-b pb-5">
          <h2 className="font-semibold text-base mb-2">Can I return a part?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Returns may be accepted on unused products in original packaging
            within the return window outlined in our Return Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
