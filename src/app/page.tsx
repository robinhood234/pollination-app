"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { formatStartingPrice, products } from "@/data/products";

const gallerySlides = [
  {
    image: "/gallery/hero-image.jpeg",
    title: "A garden in motion",
    description: "Small moments of colour, texture and life from our growing spaces.",
  },
  {
    image: "/gallery/crimson-bottle-brush-one.jpeg",
    title: "Colour with a purpose",
    description: "We choose plants that make room for pollinators at every stage of the season.",
  },
  {
    image: "/gallery/Jasmine.jpeg",
    title: "Made for gathering",
    description: "A closer look at the flowers and rituals that keep our community connected.",
  },
];

const featuredIds = [
  "manuka",
  "bottlebrush",
  "tree-lucern",
];

const featuredProducts = products.filter((product) =>
  featuredIds.includes(product.id)
);
const plants = [
  {
    name: "Manuka",
    detail: "Renowned for it's medicinal properties, this compact shrub produces an abundance of blooms attracting many pollinators.",
    image: "/gallery/hero-image.jpeg",
  },
  {
    name: "Lavender",
    detail: "A bright, fragrant perennial that brings bees and butterflies to your garden.",
    image: "/gallery/french-lavender-one.jpeg",
  },
  {
    name: "BottleBrush",
    detail: "A small to medium ornamental tree with striking crimson red blooms and highly fragrant leaves.",
    image: "/gallery/crimson-bottle-brush-one.jpeg",
  },
];

export default function Home() {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const currentSlide = gallerySlides[currentGalleryIndex];

  const changeSlide = (direction: number) => {
    setCurrentGalleryIndex((currentGalleryIndex + direction + gallerySlides.length) % gallerySlides.length);
  };

  return (
    <main className="home-page">
      <section id="about" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content page-shell">
          <h1 className="w-full">Trees, Fruits and <span className="text-orange-500"> Herbal Apothecary</span></h1>
          <p className="hero-copy text-lg">PolliNation is a collection of indigenous, commercial, medicinal and ornamental plants selected to support eco-systems and pollinators. </p>
          <a className="button button-light" href="#mission">Discover our purpose <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note">Growing good things<br /><span>since 2026</span></div>
      </section>

      <section id="mission" className="mission-section section-pad">
        <div className="page-shell mission-grid">
          <div>
            <p className="eyebrow">01 / Our mission</p>
            <h2>Every garden<br />can be a <span className="text-orange-500">beginning.</span></h2>
          </div>
          <div className="mission-copy">
            <p className="lead">We believe the smallest patch of green can create a ripple of change.</p>
            <p>At PolliNation Propagators, we grow and supply a diverse variety of trees including vital commercial timber, indigenous species, ornamentals, fruit trees and a selection of herbal plants.</p>
            <a className="text-link" href="#plants">See what is growing <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="mission-line page-shell" aria-hidden="true"><span>Care</span><span>Curiosity</span><span>Connection</span></div>
      </section>

      <section id="products" className="products-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Featured products</p><h2>Start with<br />something small.</h2></div>
            <p>Good growing does not need to be complicated. Meet a few considered essentials for bringing more life into your space.</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  {product.image ? <Image src={product.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" /> : <span className="product-image-placeholder">Product photo needed</span>}
                </div>
                <div className="product-info"><div><p className="card-kicker">{product.type}</p><h3>{product.name}</h3></div><span className="price">{formatStartingPrice(product)}</span></div>
                <Link className="card-action" href={`/product/${product.id}`} aria-label={`View ${product.name}`}>
                  View collection <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plants" className="plants-section section-pad">
        <div className="page-shell">
          <div className="section-heading plants-heading"><div><p className="eyebrow">03 / Popular plants</p><h2>Meet the<br /><span className="text-orange-500">good</span> neighbours.</h2></div><p>The flowers we return to, season after season. Chosen for their character, resilience and welcome to local pollinators.</p></div>
          <div className="plant-grid">
            {plants.map((plant, index) => (
              <article className={`plant-card plant-card-${index + 1}`} key={plant.name}>
                <div className="plant-image"><Image src={plant.image} alt={plant.name} fill sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="plant-caption"><span>0{index + 1}</span><div><h3>{plant.name}</h3><p>{plant.detail}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section section-pad">
        <div className="page-shell team-grid">
          <div className="team-photo"><Image src="/gallery/nursery-image-five.jpeg" alt="Plants growing together" fill sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div className="team-copy"><p className="eyebrow">04 / Our team</p><h2>People who<br />keep showing up.</h2><p className="lead">We are propagators, conservation advocates, and passionate cultivators of resilient landscapes</p><p>At Pollination Propagators, we nurture plants that sustain pollinators, restore biodiversity, and enrich livelihoods. We share practical knowledge, encourage curiosity, and work to make ecological stewardship accessible to everyone.</p><a className="text-link" href="/about">Learn more about us<span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section id="gallery" className="gallery-section section-pad">
        <div className="page-shell">
          <div className="section-heading"><div><p className="eyebrow">05 / Featured gallery</p><h2>From our<br />little <span className="text-orange-500">world.</span></h2></div><div className="gallery-controls"><button type="button" onClick={() => changeSlide(-1)} aria-label="Previous gallery image">←</button><span>{String(currentGalleryIndex + 1).padStart(2, "0")} / 03</span><button type="button" onClick={() => changeSlide(1)} aria-label="Next gallery image">→</button></div></div>
          <div className="gallery-feature"><div className="gallery-image"><Image src={currentSlide.image} alt={currentSlide.title} fill sizes="(max-width: 768px) 100vw, 68vw" /></div><div className="gallery-caption"><p className="card-kicker">Field notes</p><h3>{currentSlide.title}</h3><p>{currentSlide.description}</p><span className="gallery-index">0{currentGalleryIndex + 1}</span></div></div>
        </div>
      </section>

      <section id="contact" className="location-section section-pad">
        <div className="page-shell location-grid"><div><p className="eyebrow">06 / Where we are</p><h2>Visit.<span className="text-orange-500">Experience.</span><br/>Connect.</h2><p className="lead">A thriving nursery, fresh mountain air, and a place to reconnect with nature.</p><p>Visit our nursery to explore indigenous, medicinal, ornamental, and commercial plants carefully selected to support healthy ecosystems and pollinators. Learn, grow, and discover practical ways to cultivate a more sustainable future.</p><a className="button button-green" href="/contact">Plan a visit <span aria-hidden="true">↗</span></a></div><div className="location-map"><iframe className="map-embed" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d867.4892830615!2d36.554188269519045!3d-0.8179179999483721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDknMDQuNSJTIDM2wrAzMycxNy40IkU!5e1!3m2!1sen!2ske!4v1792661671593!5m2!1sen!2ske" title="Pollination Studio Garden location" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div></div>
      </section>
    </main>
  );
}