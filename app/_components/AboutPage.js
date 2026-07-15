export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Quality Auto Parts You Can Count On
        </h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          We provide quality replacement auto parts for a wide range of
          vehicles, helping drivers and repair professionals keep their vehicles
          running at their best. We work with trusted manufacturers and
          suppliers to offer dependable aftermarket parts at competitive prices.
          Every order is backed by secure checkout, responsive customer support,
          and fast shipping from warehouses across the United States.
        </p>
      </section>

      {/* Why choose us */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Why customers choose AutoMPW
        </h2>

        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• Quality aftermarket replacement parts</li>
          <li>• Competitive prices</li>
          <li>• Secure online checkout</li>
          <li>• Fast nationwide shipping</li>
          <li>• Responsive customer support</li>
          <li>• Fitment information to help you order with confidence</li>
        </ul>
      </section>

      {/* Support */}
      <section className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-3">
          Need help finding the right part?
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          Contact our support team:
        </p>

        <div className="mt-3 text-sm md:text-base">
          <p>📧 autompwsupport@gmail.com</p>
          <p>📞 510-977-0587</p>
        </div>
      </section>
    </main>
  );
}
