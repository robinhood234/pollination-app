"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";

const categories = ["Medicinal", "Herbal", "Ornamental", "Commercial", "Indigenous"] as const;
const MIN_PRICE = 15;
const MAX_PRICE = 1000;

export default function ProductListingPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) => current.includes(category)
      ? current.filter((item) => item !== category)
      : [...current, category]);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return categoryMatches && product.priceValue >= minPrice && product.priceValue <= maxPrice;
  });

  const resetFilters = () => {
    setSelectedCategories([]);
    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
  };

  return (
    <main className="product-page">
      <section className="product-list-hero">
        <div className="page-shell">
          <p className="eyebrow">Pollination / Product library</p>
          <h1>Find something<br /><em>good to grow.</em></h1>
          <p>Thoughtful plants for windowsills, gardens and all the hopeful spaces in between.</p>
        </div>
      </section>

      <section className="product-list-section section-pad">
        <div className="page-shell">
          <div className="product-list-heading">
            <p className="eyebrow">Our current collection</p>
            <p>{filteredProducts.length} of {products.length} plants</p>
          </div>
          <div className="product-browser">
            <aside className="product-filter" aria-label="Filter products">
              <div className="filter-heading"><p className="eyebrow">Refine collection</p><button type="button" onClick={resetFilters}>Reset</button></div>
              <fieldset>
                <legend>Plant category</legend>
                {categories.map((category) => (
                  <label className="filter-check" key={category}>
                    <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => toggleCategory(category)} />
                    <span>{category}</span>
                  </label>
                ))}
              </fieldset>
              <fieldset className="price-filter">
                <legend>Price range</legend>
                <div className="price-inputs"><label><span>From</span><input type="number" min={MIN_PRICE} max={maxPrice} value={minPrice} onChange={(event) => setMinPrice(Math.min(Number(event.target.value) || MIN_PRICE, maxPrice))} /></label><span className="price-dash">—</span><label><span>To</span><input type="number" min={minPrice} max={MAX_PRICE} value={maxPrice} onChange={(event) => setMaxPrice(Math.max(Number(event.target.value) || MAX_PRICE, minPrice))} /></label></div>
                <input className="price-range" type="range" min={MIN_PRICE} max={MAX_PRICE} value={minPrice} onChange={(event) => setMinPrice(Math.min(Number(event.target.value), maxPrice))} aria-label="Minimum price" />
                <input className="price-range price-range-top" type="range" min={MIN_PRICE} max={MAX_PRICE} value={maxPrice} onChange={(event) => setMaxPrice(Math.max(Number(event.target.value), minPrice))} aria-label="Maximum price" />
                <div className="price-limits"><span>${MIN_PRICE}</span><span>${MAX_PRICE}</span></div>
              </fieldset>
            </aside>
            <div className="product-grid product-list-grid">
              {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <Link className="product-image" href={`/product/${product.id}`} aria-label={`View ${product.name}`}>
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </Link>
                  <div className="product-info">
                    <div><p className="card-kicker">{product.category} · {product.type}</p><h3>{product.name}</h3><p className="product-summary">{product.shortDescription}</p></div>
                    <span className="price">{product.price}</span>
                  </div>
                  <Link className="card-action" href={`/product/${product.id}`}>Read about {product.name} <span aria-hidden="true">↗</span></Link>
                </article>
              )) : <div className="empty-products"><p className="eyebrow">No plants found</p><h2>Try opening<br /><em>your range.</em></h2><button className="button button-green" type="button" onClick={resetFilters}>Clear filters <span aria-hidden="true">↗</span></button></div>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
