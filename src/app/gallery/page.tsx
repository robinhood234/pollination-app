"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const galleryItems = [
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.01.jpeg", title: "Morning light", category: "Garden notes", description: "The day begins softly, with flowers opening into the first warmth." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.00 (2).jpeg", title: "Colour with a purpose", category: "Plant stories", description: "A generous bloom makes room for bees, butterflies and a little wonder." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.03.00.jpeg", title: "A growing conversation", category: "Community", description: "Gardens become richer when knowledge and cuttings are passed around." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.59 (1).jpeg", title: "In the green", category: "Garden notes", description: "Texture, shade and the quiet rhythm of a place being cared for." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.58 (3).jpeg", title: "A closer look", category: "Plant stories", description: "There is a whole landscape in every stem, leaf and unfurling petal." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.57.jpeg", title: "Room to gather", category: "Community", description: "The best gardens invite us to slow down and stay a little longer." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.53 (1).jpeg", title: "Wild edges", category: "Garden notes", description: "A little untamed space can become a welcome sign for pollinators." },
  { image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.52 (2).jpeg", title: "The daily tending", category: "Behind the scenes", description: "Small acts, repeated often, are how a living collection takes shape." },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const selectSlide = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const handleSelect = () => selectSlide(emblaApi.selectedScrollSnap());
    handleSelect();
    emblaApi.on("select", handleSelect);
    return () => { emblaApi.off("select", handleSelect); };
  }, [emblaApi, selectSlide]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <main className="gallery-page">
      <section className="gallery-page-hero">
        <div className="page-shell gallery-page-hero-inner">
          <p className="eyebrow">Pollination / Field journal</p>
          <h1>From our<br /><em>little world.</em></h1>
          <p>A visual record of the plants, people and small moments that make this work worth tending.</p>
        </div>
        <span className="gallery-page-mark">Gallery / 01</span>
      </section>

      <section className="gallery-archive section-pad">
        <div className="page-shell">
          <div className="gallery-archive-heading">
            <div><p className="eyebrow">An ongoing collection</p><h2>Look closer.<br /><em>Stay awhile.</em></h2></div>
            <p>Every image is a small reminder that the living world is already doing more than we notice.</p>
          </div>

          <div className="gallery-carousel-shell">
            <div className="gallery-carousel-viewport" ref={emblaRef}>
              <div className="gallery-carousel-container">
                {galleryItems.map((item) => (
                  <article className="gallery-carousel-slide" key={item.title}>
                    <div className="gallery-slide-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 70vw" /></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="gallery-carousel-footer">
              <div className="gallery-slide-caption"><p className="card-kicker">{galleryItems[selectedIndex].category}</p><h3>{galleryItems[selectedIndex].title}</h3><p>{galleryItems[selectedIndex].description}</p></div>
              <div className="gallery-carousel-controls"><span>{String(selectedIndex + 1).padStart(2, "0")} <i>/</i> {String(galleryItems.length).padStart(2, "0")}</span><button type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous image">←</button><button type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Next image">→</button></div>
            </div>
          </div>

          <div className="gallery-thumbnails" aria-label="Choose a gallery image">
            {galleryItems.map((item, index) => <button className={index === selectedIndex ? "gallery-thumbnail is-selected" : "gallery-thumbnail"} type="button" key={item.title} onClick={() => scrollTo(index)} aria-label={`Show ${item.title}`} aria-pressed={index === selectedIndex}><Image src={item.image} alt="" fill sizes="120px" /></button>)}
          </div>
        </div>
      </section>

      <section className="gallery-invitation section-pad"><div className="page-shell gallery-invitation-inner"><p className="eyebrow">Your turn</p><h2>Make space<br /><em>for more life.</em></h2><p>See something you would like to grow? Explore our collection of plants chosen for generous gardens and hopeful beginnings.</p><Link className="button button-green" href="/product">Explore plants <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}