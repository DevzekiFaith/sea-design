export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-blue-600 p-8 rounded-2xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Address</h3>
          <p className="mb-2">
            <strong>Email Address:</strong> addluckenergy41@gmail.com
          </p>
          <p className="mb-2">
            <strong>Whatsapp 24/7:</strong> +2347063506072
          </p>
          <p className="mb-2">
            <strong>Head Office:</strong> +33630645197
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">U.S.A Liaison Office</h3>
          <p className="mb-2">
            3901 East Perkinsville Street, Gilbert, Arizona 85295, United States
            of America.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">
            Port Harcourt Operation Base
          </h3>
          <p className="mb-2">
            Plot 40 Eneka Airport Road, Port Harcourt, Rivers State, Nigeria,
            West Africa.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Office Addresses</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">Athens, Greece</li>
            <li className="mb-2">Copenhagen, Denmark</li>
            <li className="mb-2">Singapore</li>
            <li className="mb-2">Seoul, South Korea</li>
            <li className="mb-2">Texas, U.S.A</li>
            <li className="mb-2">Aberdeen, Scotland</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
