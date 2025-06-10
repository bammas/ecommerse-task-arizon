export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-3">Quality Bearings</h3>
          <p className="text-sm text-gray-400">
            Your trusted online source for industrial bearings and power transmission products.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-gray-300">
            Email: support@qualitybearings.ca<br />
            Phone: +1 800-123-4567
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Quality Bearings Online. All rights reserved.
      </div>
    </footer>
  );
}
