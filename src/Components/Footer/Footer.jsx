const Footer = () => {
  return (
    <div className="px-4 py-10 bg-base-100 text-gray-700">
      {/* Top Title + Subtitle */}
      <div className="max-w-6xl mx-auto text-center border-b pb-6">
        <h2 className="text-2xl font-bold text-black">Gadget Heaven</h2>
        <p className="text-sm text-gray-500 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      {/* Footer Links */}
      <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-2">Services</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#">Product Support</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
