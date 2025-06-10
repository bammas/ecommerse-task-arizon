import { FaHandshake, FaShippingFast, FaAward, FaCertificate } from "react-icons/fa";

export default function InfoStrip() {
  const features = [
    {
      icon: <FaHandshake className="text-xl text-blue-900" />,
      label: "Free Delivery Over $300.00"
    },
    {
      icon: <FaShippingFast className="text-xl text-blue-900" />,
      label: "1-3 Day DHL & UPS Delivery"
    },
    {
      icon: <FaAward className="text-xl text-blue-900" />,
      label: "Queen’s Award For Enterprise Winners"
    },
    {
      icon: <FaCertificate className="text-xl text-blue-900" />,
      label: "ISO 9001 : 2015"
    }
  ];

  return (
    <section className="bg-white border-b">
      <div className="bg-gray-100 border-t py-3">
        <div className="container mx-auto px-4 flex flex-wrap gap-6 justify-center md:justify-between items-center text-sm text-black font-semibold">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
