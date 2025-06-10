import {
  FaGlobeAmericas,
  FaUsers,
  FaWarehouse,
  FaHeadset,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "International Presence",
      description:
        "We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.",
      icon: <FaGlobeAmericas className="text-[#0d1c45] text-5xl mb-4" />,
    },
    {
      title: "Professional Team",
      description:
        "Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.",
      icon: <FaUsers className="text-[#0d1c45] text-5xl mb-4" />,
    },
    {
      title: "Warehouse & Logistics",
      description:
        "We’re an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.",
      icon: <FaWarehouse className="text-[#0d1c45] text-5xl mb-4" />,
    },
    {
      title: "Customer Service",
      description:
        "With more than 75 years’ industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.",
      icon: <FaHeadset className="text-[#0d1c45] text-5xl mb-4" />,
    },
  ];

  return (
    <section className="bg-white py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0d1c45] mb-12">
        Other Services We Offer
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {services.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.icon}
            <h3 className="text-lg font-bold mt-2 mb-2 text-[#0d1c45]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
