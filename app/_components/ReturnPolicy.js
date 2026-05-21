export default function ReturnPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">

      <h1 className="text-3xl font-semibold mb-6">
        Return & Refund Policy
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">

        <section>
          <h2 className="font-semibold mb-2">Returns</h2>
          <p>
            We accept returns on most items within 30 days of delivery for a refund.
            Items must be unused, in original condition, and returned in original packaging.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Non-Returnable Items</h2>
          <p>
            Vanity tops are final sale and cannot be returned or refunded.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Return Authorization</h2>
          <p>
            To start a return, please contact our customer support team to receive a Return Authorization (RA) number.
            Returns sent without an RA number cannot be accepted.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Return Shipping Costs</h2>
          <p>
            Customers are responsible for return shipping and handling costs.
            Original shipping charges are non-refundable.
            Expedited shipping fees are also non-refundable.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Restocking Fee</h2>
          <p>
            All approved returns are subject to a 25% restocking fee.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Refunds</h2>
          <p>
            Once your return is received and inspected, we will issue a refund
            for the product price minus shipping costs and applicable restocking fees.
          </p>
        </section>

      </div>
    </main>
  );
}