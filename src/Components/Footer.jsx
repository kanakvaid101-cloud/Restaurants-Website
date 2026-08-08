import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Food<span className="text-orange-500">Hub</span>
          </h2>

          <p className="text-gray-400 leading-8">
            Fresh ingredients, delicious meals, and memorable dining
            experiences. We serve happiness on every plate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link href="/menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-orange-500">
                About
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-orange-500">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              123 Food Street, Jaipur, Rajasthan
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              +91 9876543210
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              info@foodhub.com
            </p>

            <p className="flex items-center gap-3">
              <FaClock className="text-orange-500" />
              10:00 AM - 11:00 PM
            </p>

          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 duration-300"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-5 text-gray-400 text-sm">
        © {new Date().getFullYear()} FoodHub. All Rights Reserved.
      </div>
    </footer>
  );
}