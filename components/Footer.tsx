import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Youtube } from "lucide-react";
import { useTranslation, Language } from "../utils/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = useTranslation(language);
  return (
    <footer style={{ backgroundColor: '#205A28' }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-semibold">FarmerAssist</span>
            </div>
            <p className="text-green-100 mb-4">
              {t.empoweringFarmers}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-green-200" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-green-200" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-green-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ask Query</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weather Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Prices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subsidies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Crop Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pest Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soil Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expert Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>1800-180-1551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>help@farmerassist.gov.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>Ministry of Agriculture</div>
                  <div>Government of India</div>
                  <div>New Delhi - 110001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-green-100">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 FarmerAssist. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}