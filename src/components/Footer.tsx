import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 py-8 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Filters & Copyright */}
        <div>
          <div className="font-semibold mb-2">Filters</div>
          <div className="flex gap-4 mb-2 text-sm">
            <span>All</span>
            <span>Electronics</span>
            <span>Clothing</span>
            <span>Home</span>
          </div>
          <div className="text-xs">© 2024 American</div>
        </div>
        {/* About Us */}
        <div>
          <div className="font-semibold mb-2">About Us</div>
          <div className="flex flex-col gap-1 text-sm">
            <span>About Us</span>
            <span>Contact</span>
          </div>
        </div>
        {/* Social Icons */}
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
} 