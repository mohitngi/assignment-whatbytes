import { ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}

export default function Header({ searchTerm, onSearchTermChange }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-500 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">Logo</div>
      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={e => onSearchTermChange(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-md focus:outline-none"
        />
      </div>
      {/* Cart and Profile */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <ShoppingCart className="text-white w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-xs font-bold rounded-full px-1.5">0</span>
        </button>
        <User className="text-white w-6 h-6" />
      </div>
    </header>
  );
} 