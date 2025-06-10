import {
  FaHandshake,
  FaShippingFast,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const brandHighlights = [
  { name: "Trusted Partnerships", icon: <FaHandshake className="text-blue-700" /> },
  { name: "Fast Shipping", icon: <FaShippingFast className="text-orange-500" /> },
  { name: "Award-Winning Service", icon: <FaAward className="text-yellow-500" /> },
  { name: "Certified Quality", icon: <FaCertificate className="text-green-600" /> },
];

export default function Brands() {
  return (
    <section className="py-12 bg-[#edf0f5]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0d1c45] mb-10">
        Distributing World Renowned Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto text-center">
        {brandHighlights.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div className="text-5xl">{item.icon}</div>
            <span className="text-sm font-medium text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
