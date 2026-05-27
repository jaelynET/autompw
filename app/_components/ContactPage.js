export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-16">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Have a question about a product, shipping, or your order?
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg mb-3">Customer Support</h2>

          <p className="text-sm text-gray-600 mb-2">
            Email us for the fastest response:
          </p>

          <p className="text-sm font-medium">sales@tubvilla.com</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-lg mb-3">Phone Support</h2>

          <p className="text-sm font-medium mb-2">510-274-9796</p>

          <p className="text-sm text-gray-600">
            Phone Hours: Mon, Wed, Fri • 11:00 AM – 1:00 PM PT
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Email support is available 7 days a week. Most inquiries are
            answered within 24 hours.
          </p>
        </div>
      </section>

      {/* Optional message form 
      <section className="border-t pt-10">
        <h2 className="text-xl font-semibold mb-4">
          Send us a message
        </h2>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="border p-3 rounded-md text-sm"
          />

          <input
            type="email"
            placeholder="Your email"
            className="border p-3 rounded-md text-sm"
          />

          <textarea
            placeholder="How can we help?"
            rows={5}
            className="border p-3 rounded-md text-sm"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-md text-sm hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      */}
    </main>
  );
}
