import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 py-10 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Filters */}
        <div className="min-w-[160px]">
          <div className="font-bold text-lg mb-3">Filters</div>
          <div className="flex gap-4 mb-3 text-base">
            <span className="hover:underline cursor-pointer">All</span>
            <span className="hover:underline cursor-pointer">Electronics</span>
            <span className="hover:underline cursor-pointer">Clothing</span>
            <span className="hover:underline cursor-pointer">Home</span>
          </div>
          <div className="text-xs text-white/80 mt-6">© 2024 American</div>
        </div>
        {/* About Us */}
        <div className="min-w-[160px]">
          <div className="font-bold text-lg mb-3">About Us</div>
          <div className="flex flex-col gap-1 text-base">
            <span className="hover:underline cursor-pointer">About Us</span>
            <span className="hover:underline cursor-pointer">Contact</span>
          </div>
        </div>
        {/* Social Icons */}
        <div className="min-w-[160px]">
          <div className="font-bold text-lg mb-3">Follow Us</div>
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <Facebook className="w-7 h-7 text-blue-300" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform">
              <Twitter className="w-7 h-7 text-blue-300" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7 text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
