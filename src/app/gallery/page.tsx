"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const galleryItems = [
  { image: "/gallery/jasmine-ttwo.jpeg", title: "Jasmine" },
  { image: "/gallery/black-wattle-one.jpeg", title: "Black Wattle in bloom" },
  { image: "/gallery/bottle-brush-two.jpeg", title: "Bottlebrush-(Tea tree)" },
  { image: "/gallery/chameleon.jpeg", title: "Chameleon among Cypress" },
  { image: "/gallery/crimson-bottle-brush-one.jpeg", title: "Crimson Bottlebrush" },
  { image: "/gallery/cypress-image-one.jpeg", title: "Cypress" },
  { image: "/gallery/cypress-image.jpeg", title: "Cypress sapling" },
  { image: "/gallery/english-lavender-image-two.jpeg", title: "English Lavender close up" },
  { image: "/gallery/english-lavender-image.jpeg", title: "English Lavender sapling" },
  { image: "/gallery/english-lavender-two.jpeg", title: "English Lavender in bloom" },
  { image: "/gallery/french-lavender-five.jpeg", title: "English Lavender flowers" },
  { image: "/gallery/french-lavender-one.jpeg", title: "French Lavender in bloom" },
  { image: "/gallery/french-lavender-six.jpeg", title: "Frequent visitor" },
  { image: "/gallery/german-chamomile.jpeg", title: "German Chamomile" },
  { image: "/gallery/hero-image.jpeg", title: "Garden in bloom" },
  { image: "/gallery/tree tomato 2.jpeg", title: "Tree tomatoes close up" },
  { image: "/gallery/honeysuckle-one.jpeg", title: "Honeysuckle flowers" },
  { image: "/gallery/insect-one.jpeg", title: "A garden visitor" },
  { image: "/gallery/lavender.jpeg", title: "Lavender" },
  { image: "/gallery/manuka-four.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-image-2.jpeg", title: "Manuka in the nursery" },
  { image: "/gallery/manuka-image.jpeg", title: "Manuka sapling" },
  { image: "/gallery/manuka-one.jpeg", title: "Manuka in bloom" },
  { image: "/gallery/manuka-three.jpeg", title: "Manuka flowers" },
  { image: "/gallery/manuka-two.jpeg", title: "Manuka matured" },
  { image: "/gallery/mexiacan-heather-two.jpeg", title: "Mexican Heather" },
  { image: "/gallery/mexican-heather-one.jpeg", title: "Mexican Heather in bloom" },
  { image: "/gallery/mexican-heather-three.jpeg", title: "Mexican Heather foliage" },
  { image: "/gallery/mexican-heather-two.jpeg", title: "Mexican Heather close-up" },
  { image: "/gallery/nursery-image-five.jpeg", title: "The nursery" },
  { image: "/gallery/nursery-image-six.jpeg", title: "Growing together" },
  { image: "/gallery/nursery-image-two.jpeg", title: "Nursery plants" },
  { image: "/gallery/nursery-image.jpeg", title: "A place to grow" },
  { image: "/gallery/rosemary-image.jpeg", title: "Rosemary" },
  { image: "/gallery/rosemary-two.jpeg", title: "Rosemary in the garden" },
  { image: "/gallery/rosemary.jpeg", title: "Rosemary detail" },
  { image: "/gallery/seedbeds-image.jpeg", title: "Seedbeds" },
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
          <h1>From our<br />little <span className="text-orange-500">world.</span></h1>
          <p>A visual record of the plants, people and small moments that make this work worth tending.</p>
        </div>
        <span className="gallery-page-mark">Gallery / 01</span>
      </section>

      <section className="gallery-archive section-pad">
        <div className="page-shell">
          <div className="gallery-archive-heading">
            <div><p className="eyebrow">An ongoing collection</p><h2>Look closer.<br /><span className="text-orange-500">Stay</span> awhile.</h2></div>
            <p>Every image is a small reminder that the living world is already doing more than we notice.</p>
          </div>

          <div className="gallery-carousel-shell">
            <div className="gallery-carousel-viewport" ref={emblaRef}>
              <div className="gallery-carousel-container">
                {galleryItems.map((item) => (
                  <article className="gallery-carousel-slide" key={item.title}>
                    <div className="gallery-slide-image">
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 70vw" />
                      <div className="gallery-slide-shade" aria-hidden="true" />
                      <h3 className="gallery-slide-title">{item.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="gallery-carousel-footer">
              <div className="gallery-carousel-controls"><span>{String(selectedIndex + 1).padStart(2, "0")} <i>/</i> {String(galleryItems.length).padStart(2, "0")}</span><button type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous image">←</button><button type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Next image">→</button></div>
            </div>
          </div>

          <div className="gallery-thumbnails" aria-label="Choose a gallery image">
            {galleryItems.map((item, index) => <button className={index === selectedIndex ? "gallery-thumbnail is-selected" : "gallery-thumbnail"} type="button" key={item.title} onClick={() => scrollTo(index)} aria-label={`Show ${item.title}`} aria-pressed={index === selectedIndex}><Image src={item.image} alt="" fill sizes="120px" /></button>)}
          </div>
        </div>
      </section>

      <section className="gallery-invitation section-pad"><div className="page-shell gallery-invitation-inner"><p className="eyebrow">Your turn</p><h2>Make space<br />for more <span className="text-orange-500">life.</span></h2><p>See something you would like to grow? Explore our collection of plants chosen for generous gardens and hopeful beginnings.</p><Link className="button button-green" href="/product">Explore plants <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}