import { FaShippingFast, FaThumbsUp, FaTrophy, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-blue-900 mb-3" />,
      title: "Super-Fast, Hassle Free Delivery",
      description:
        "Delivered within 1-3 days, with all tax & duties paid within Canada. The price you see online is the price you pay."
    },
    {
      icon: <FaThumbsUp className="text-4xl text-blue-900 mb-3" />,
      title: "Unrivalled Customer Service",
      description:
        "With over 75 years' industry experience, you can trust Quality Bearings Online."
    },
    {
      icon: <FaTrophy className="text-4xl text-blue-900 mb-3" />,
      title: "Multi-Award-Winning",
      description:
        "Winners Of The Queen’s Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-900 mb-3" />,
      title: "World Renowned Brands",
      description:
        "Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more."
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Industry Leading Bearings Supplier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
