export default function ReturnPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-semibold mb-6">Return & Refund Policy</h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-semibold mb-2">Returns</h2>
          <p>
            We accept returns on items within 30 days of delivery for a refund.
            To be eligible for a return, your item must be unused, in its
            original condition, and returned in the original packaging with all
            electromagnetic components included.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2">
            Defective or Transit-Damaged Items (Required Protocol)
          </h2>
          <p>
            Because our high-ticket displays involve sensitive, premium
            electromagnetic components, every unit is carefully inspected and
            video-tested before leaving the warehouse.
          </p>
          <br />
          <p>
            In the rare event that your package is handled roughly or damaged
            during transit, **we require an uninterrupted unboxing and initial
            usage video** (showing the parcel opening and the initial plug-in
            test) to process an immediate, free replacement. This raw video file
            acts as our verification for shipping insurance claims. Please
            forward this media to support within 48 hours of delivery.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Return Authorization</h2>
          <p>
            To start a return, please contact our customer support team to
            receive a Return Authorization (RA) number. Returns sent without an
            RA number cannot be accepted or processed.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Return Shipping Costs</h2>
          <p>
            Customers are responsible for return shipping and handling costs.
            Original shipping charges are non-refundable. Expedited shipping
            fees are also non-refundable.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Return Process & Destination</h2>
          <p>
            To ensure your return is processed acurately, do not mail items back
            to the address on your shipping label. Once your return is approved
            and you recieve your Return Authorization (RA) number, our support
            team will provide you the exact designated US warehouse return
            address and a prepaid or customer-provided shipping label.
          </p>
        </section>

        {/* <section>
          <h2 className="font-semibold mb-2">Restocking Fee</h2>
          <p>
            All approved returns are subject to a 25% restocking fee.
          </p>
        </section> */}

        <section>
          <h2 className="font-semibold mb-2">Refunds</h2>
          <p>
            Once your return is received, inspected, and verified by our
            warehouse team, we will issue a refund for the product price minus
            original shipping fees. Refunds will be applied directly back to
            your original method of payment within 3-5 business days.
          </p>
        </section>
      </div>
    </main>
  );
}
