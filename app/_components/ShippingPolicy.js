export default function ShippingPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-semibold mb-6">Shipping Policy</h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-semibold mb-2">Shipping Area</h2>
          <p>
            We currently ship within the 48 contiguous United States. At this
            time, we do not ship to Alaska, Hawaii, or international
            destinations.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Processing Time</h2>
          <p>
            Orders are typically processed and shipped within 1–2 business days.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Delivery Time</h2>
          <p>
            Transit times are usually 4–8 business days depending on your
            location, excluding weekends and holidays.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Shipping Method</h2>
          <p>
            Smaller items are shipped via parcel carriers such as UPS, FedEx,
            USPS, or DHL. Larger items (over 100 lbs) are shipped via freight
            (LTL carriers).
          </p>
        </section>

        {/* <section>
          <h2 className="font-semibold mb-2">Freight Delivery</h2>
          <p>
            Freight deliveries are curbside only. The carrier will deliver the
            item to the end of your driveway or nearest accessible point.
            Delivery inside the home or to specific rooms is not included.
          </p>
        </section> */}

        <section>
          <h2 className="font-semibold mb-2">Scheduling Delivery</h2>
          <p>Once your order ships, you will receive tracking information.</p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Delays</h2>
          <p>
            While we work with reliable carriers, delivery delays may
            occasionally occur due to weather, carrier issues, or other factors
            outside our control.
          </p>
        </section>
      </div>
    </main>
  );
}
