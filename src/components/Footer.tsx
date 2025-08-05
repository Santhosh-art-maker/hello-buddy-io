import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Village Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">SAGAM CHERUVU</h3>
            <p className="text-muted-foreground mb-4">
              A beautiful village known for its rich cultural heritage, traditional values, 
              and scenic landscapes. Home to a vibrant community that welcomes visitors 
              from around the world.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary">About Village</a></li>
              <li><a href="/tourism" className="text-muted-foreground hover:text-primary">Tourism</a></li>
              <li><a href="/community" className="text-muted-foreground hover:text-primary">Community</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-primary">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Sagam Cheruvu Village, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">info@sagamcheruvu.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Sagam Cheruvu Village. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;