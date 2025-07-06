import { ShoppingCart, Search } from 'lucide-react';
import { useContext } from 'react';
import { SearchContext, CartContext } from '../app/AppShell';
import Link from 'next/link';

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <header className="bg-white w-full">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-white text-3xl font-bold tracking-wide">Logo</div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xl flex items-center">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-md bg-transparent text-white border-2 border-white text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition placeholder-white h-12"
            />
          </div>
        </div>
        {/* Cart */}
        <div className="flex items-center">
          <Link href="/cart" className="relative">
            <span className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 transition text-white font-bold rounded-md px-6 py-3 h-12 text-base shadow-md">
              <ShoppingCart className="w-6 h-6 text-white" />
              Cart
              <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow">
                {cartCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
} 