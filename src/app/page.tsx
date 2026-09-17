"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";

const gallerySlides = [
  {
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.01.jpeg",
    title: "A garden in motion",
    description: "Small moments of colour, texture and life from our growing spaces.",
  },
  {
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.00 (2).jpeg",
    title: "Colour with a purpose",
    description: "We choose plants that make room for pollinators at every stage of the season.",
  },
  {
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.00.jpeg",
    title: "Made for gathering",
    description: "A closer look at the flowers and rituals that keep our community connected.",
  },
];

const plants = [
  {
    name: "Manuka",
    detail: "Fragrant and drought-friendly, with soft blooms bees return to all summer.",
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.58 (1).jpeg",
  },
  {
    name: "Bee balm",
    detail: "A bright, generous perennial that brings hummingbirds and butterflies close.",
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.59 (2).jpeg",
  },
  {
    name: "Echinacea",
    detail: "A resilient native favourite with a long bloom window and architectural seed heads.",
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.00 (3).jpeg",
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
          <p className="eyebrow hero-eyebrow">Plant well. Live lightly.</p>
          <h1>Make room<br /><em>for wonder.</em></h1>
          <p className="hero-copy">Pollination is a living collection of plants, tools and ideas for people who want their gardens to give more back.</p>
          <a className="button button-light" href="#mission">Discover our purpose <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note">Growing good things<br /><span>since 2026</span></div>
      </section>

      <section id="mission" className="mission-section section-pad">
        <div className="page-shell mission-grid">
          <div>
            <p className="eyebrow">01 / Our mission</p>
            <h2>Every garden<br /><em>can be a beginning.</em></h2>
          </div>
          <div className="mission-copy">
            <p className="lead">We believe the smallest patch of green can create a ripple of change.</p>
            <p>Pollination brings together thoughtful plants, practical knowledge and a generous community. We are here to make growing feel possible, beautiful and useful, wherever you are starting from.</p>
            <a className="text-link" href="#plants">See what is growing <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="mission-line page-shell" aria-hidden="true"><span>Care</span><span>Curiosity</span><span>Connection</span></div>
      </section>

      <section id="products" className="products-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Featured products</p><h2>Start with<br /><em>something small.</em></h2></div>
            <p>Good growing does not need to be complicated. Meet a few considered essentials for bringing more life into your space.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image"><Image src={product.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="product-info"><div><p className="card-kicker">{product.type}</p><h3>{product.name}</h3></div><span className="price">{product.price}</span></div>
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
          <div className="section-heading plants-heading"><div><p className="eyebrow">03 / Popular plants</p><h2>Meet the<br /><em>good neighbours.</em></h2></div><p>The flowers we return to, season after season. Chosen for their character, resilience and welcome to local pollinators.</p></div>
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
          <div className="team-photo"><Image src="/gallery/WhatsApp Image 2026-05-06 at 19.02.57 (2).jpeg" alt="Plants growing together" fill sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div className="team-copy"><p className="eyebrow">04 / Our team</p><h2>People who<br /><em>keep showing up.</em></h2><p className="lead">We are gardeners, teachers, makers and hopeful beginners.</p><p>Pollination is built by people who believe care is a practice. We share what we learn, make space for questions and keep our hands in the soil.</p><a className="text-link" href="/about">Meet the people behind Pollination <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section id="gallery" className="gallery-section section-pad">
        <div className="page-shell">
          <div className="section-heading"><div><p className="eyebrow">05 / Featured gallery</p><h2>From our<br /><em>little world.</em></h2></div><div className="gallery-controls"><button type="button" onClick={() => changeSlide(-1)} aria-label="Previous gallery image">←</button><span>{String(currentGalleryIndex + 1).padStart(2, "0")} / 03</span><button type="button" onClick={() => changeSlide(1)} aria-label="Next gallery image">→</button></div></div>
          <div className="gallery-feature"><div className="gallery-image"><Image src={currentSlide.image} alt={currentSlide.title} fill sizes="(max-width: 768px) 100vw, 68vw" /></div><div className="gallery-caption"><p className="card-kicker">Field notes</p><h3>{currentSlide.title}</h3><p>{currentSlide.description}</p><span className="gallery-index">0{currentGalleryIndex + 1}</span></div></div>
        </div>
      </section>

      <section id="contact" className="location-section section-pad">
        <div className="page-shell location-grid"><div><p className="eyebrow">06 / Where we are</p><h2>Come find<br /><em>your corner.</em></h2><p className="lead">A working garden, a warm cup and a place to begin again.</p><p>Visit our studio garden in Nairobi for seasonal plants, workshops and honest conversations about growing.</p><a className="button button-green" href="mailto:hello@pollination.co">Plan a visit <span aria-hidden="true">↗</span></a></div><div className="location-map"><div className="map-mark">P</div><p>Pollination Studio Garden</p><span>Magumu, Nakuru<br />Open Mon–Sat · 9am–5pm</span></div></div>
      </section>
    </main>
  );
}