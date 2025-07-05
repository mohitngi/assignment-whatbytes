import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="flex gap-8 py-8">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-lg shadow p-6 hidden lg:block">
        <div className="font-bold text-lg mb-4">Filters</div>
        {/* Category filter placeholder */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Category</div>
          <div className="flex flex-col gap-2">
            <label><input type="checkbox" className="mr-2" />All</label>
            <label><input type="checkbox" className="mr-2" />Electronics</label>
            <label><input type="checkbox" className="mr-2" />Clothing</label>
            <label><input type="checkbox" className="mr-2" />Home</label>
          </div>
        </div>
        {/* Price range placeholder */}
        <div>
          <div className="font-semibold mb-2">Price</div>
          <input type="range" min={0} max={1000} className="w-full" />
        </div>
      </aside>
      {/* Product Grid */}
      <section className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
