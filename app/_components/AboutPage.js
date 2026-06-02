export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Modern Bathtubs Designed for Everyday Luxury
        </h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          TUBVILLA is a California-based authorized reseller of premium bathroom
          fixtures. We partner directly with approved manufacturers and
          distributors to provide authentic products from trusted brands. All
          products are sourced through authorized channels and shipped from
          manufacturer warehouses throughout the United States. Our team is
          committed to providing responsive customer support and a secure
          shopping experience for homeowners, contractors, and designers.
        </p>
      </section>

      {/* Why choose us */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Why customers choose TubVilla
        </h2>

        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• Curated modern designs</li>
          <li>• Secure checkout</li>
          <li>• Fast customer support</li>
          <li>• Nationwide shipping</li>
        </ul>
      </section>

      {/* Support */}
      <section className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-3">
          Need help choosing a tub?
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          Contact our support team:
        </p>

        <div className="mt-3 text-sm md:text-base">
          <p>📧 sales@tubvilla.com</p>
          <p>📞 707-315-6575</p>
        </div>
      </section>
    </main>
  );
}
