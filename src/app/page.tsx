"use client";
import { useState, useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { SearchContext } from "./AppShell";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [price, setPrice] = useState<number>(1000);

  // Initialize filter state from URL on mount
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlPrice = searchParams.get("price");
    const urlSearch = searchParams.get("search");
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
    if (urlPrice) {
      setPrice(Number(urlPrice));
    }
    if (urlSearch !== null) {
      setSearchTerm(urlSearch);
    }
    // eslint-disable-next-line
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== "All") {
      params.set("category", selectedCategory);
    }
    if (price !== 1000) {
      params.set("price", String(price));
    }
    if (searchTerm.trim() !== "") {
      params.set("search", searchTerm);
    }
    router.replace("/?" + params.toString(), { scroll: false });
    // eslint-disable-next-line
  }, [selectedCategory, price, searchTerm]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const filteredProducts = (selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory))
    .filter((p) => p.price <= price)
    .filter((p) =>
      (searchTerm?.trim() ?? "") === ""
        ? true
        : p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0">
            <div className="bg-blue-800 rounded-2xl p-8 flex flex-col gap-8 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-white text-xl font-bold">Filters</h2>
              </div>
              {/* Category filter */}
              <div>
                <div className="font-bold mb-2 text-white text-base">Category</div>
                <div className="flex flex-col gap-3">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 text-white text-base font-normal cursor-pointer select-none">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => handleCategoryChange(cat)}
                        className="accent-blue-800 w-4 h-4 border-blue-800 border-2 focus:ring-2 focus:ring-blue-800"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
              {/* Price slider */}
              <div className="mt-6">
                <div className="font-bold mb-2 text-white text-base">Price</div>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm">0</span>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full accent-white cursor-pointer"
                  />
                  <span className="text-white text-sm">${price}</span>
                </div> 
              </div>
            </div>

            {/* Cacyroy card */}
            <div className="bg-white p-6 mt-8  flex flex-col gap-6">
              <div className="font-bold text-base mb-2">Cacyroy</div>
              <div className="flex flex-col gap-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 text-black text-base font-normal cursor-pointer select-none">
                    <input
                      type="radio"
                      name="cacyroy-category"
                      checked={selectedCategory === cat}
                      onChange={() => handleCategoryChange(cat)}
                      className="accent-blue-800 w-4 h-4"
                    />
                    {cat}
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <div className="font-bold mb-2 text-base">Price</div>
                <input
                  type="number"
                  min={0}
                  max={1000}
                  value={price}
                  onChange={handlePriceChange}
                  className="w-full px-3 py-2 border-2 rounded-lg text-black text-base focus:outline-none  bg-white"
                />
              </div>
            </div>
          </aside>
          {/* Product Grid */}
          <main className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">No products found.</div>
              ) : (
                filteredProducts.map((product, idx) => {
                  const isLast = idx === filteredProducts.length - 1;
                  return (
                    <div
                      key={product.id}
                      className={
                        isLast
                          ? 'lg:col-span-2 lg:col-start-2'
                          : ''
                      }
                    >
                      <ProductCard product={product} featured={isLast} />
                    </div>
                  );
                })
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
