import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      let updated = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "All"), category];
      if (updated.length === 0) updated = ["All"];
      setSelectedCategories(updated);
    }
  };

  const filteredProducts =
    selectedCategories.includes("All")
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));

  return (
    <div className="flex gap-8 py-8">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-lg shadow p-6 hidden lg:block">
        <div className="font-bold text-lg mb-4">Filters</div>
        {/* Category filter */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Category</div>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
        {/* Price range placeholder */}
        <div>
          <div className="font-semibold mb-2">Price</div>
          <input type="range" min={0} max={1000} className="w-full" disabled />
        </div>
      </aside>
      {/* Product Grid */}
      <section className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
