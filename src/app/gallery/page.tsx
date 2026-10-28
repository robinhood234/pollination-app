"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const galleryItems = [
  { image: "/gallery/Casaurina.jpg", title: "Casaurina" },
  { image: "/gallery/Jasmine.jpeg", title: "Jasmine" },
  { image: "/gallery/Mexican fleabane.jpeg", title: "Mexican Fleabane" },
  { image: "/gallery/Pine.jpg", title: "Pine" },
  { image: "/gallery/Red-ceder.jpg", title: "Red Cedar" },
  { image: "/gallery/Rosewood.jpg", title: "Rosewood" },
  { image: "/gallery/Sambucus-nigra-elderberry.jpg", title: "Elderberry" },
  { image: "/gallery/Tree-lucern.jpg", title: "Tree Lucern" },
  { image: "/gallery/african-olive-image.jpeg", title: "African Olive" },
  { image: "/gallery/alysum 2.jpeg", title: "Alyssum" },
  { image: "/gallery/alysum 3.jpeg", title: "Alyssum" },
  { image: "/gallery/alysum-image.jpeg", title: "Alyssum" },
  { image: "/gallery/black-wattle-one.jpeg", title: "Black Wattle" },
  { image: "/gallery/black-wattle-two.jpeg", title: "Black Wattle" },
  { image: "/gallery/bottle-brush-two.jpeg", title: "Bottlebrush" },
  { image: "/gallery/bottle-brush.jpeg", title: "Bottlebrush" },
  { image: "/gallery/bottlebrush-regular-one.jpeg", title: "Bottlebrush" },
  { image: "/gallery/bottlebrush-regular-two.jpeg", title: "Bottlebrush" },
  { image: "/gallery/chameleon.jpeg", title: "Chameleon" },
  { image: "/gallery/crimson-bottle-brush-one.jpeg", title: "Crimson Bottlebrush" },
  { image: "/gallery/cypress-image-one.jpeg", title: "Cypress" },
  { image: "/gallery/cypress-image.jpeg", title: "Cypress" },
  { image: "/gallery/english-lavender-image-two.jpeg", title: "English Lavender" },
  { image: "/gallery/english-lavender-image.jpeg", title: "English Lavender" },
  { image: "/gallery/english-lavender-two.jpeg", title: "English Lavender" },
  { image: "/gallery/eucalyptus-one.jpeg", title: "Eucalyptus" },
  { image: "/gallery/french-lavender-five.jpeg", title: "French Lavender" },
  { image: "/gallery/french-lavender-four.jpeg", title: "French Lavender" },
  { image: "/gallery/french-lavender-one.jpeg", title: "French Lavender" },
  { image: "/gallery/french-lavender-six.jpeg", title: "French Lavender" },
  { image: "/gallery/french-lavender-three.jpeg", title: "French Lavender" },
  { image: "/gallery/french-lavender-two.jpeg", title: "French Lavender" },
  { image: "/gallery/german-chamomile.jpeg", title: "German Chamomile" },
  { image: "/gallery/hakea-image.jpeg", title: "Hakea" },
  { image: "/gallery/hero-image.jpeg", title: "Pollination Garden" },
  { image: "/gallery/honesuckle-two.jpeg", title: "Honeysuckle" },
  { image: "/gallery/honeysuckle-one.jpeg", title: "Honeysuckle" },
  { image: "/gallery/iceberg-image.jpeg", title: "Iceberg Rose" },
  { image: "/gallery/insect-one.jpeg", title: "Pollinator" },
  { image: "/gallery/jasmine-ttwo.jpeg", title: "Jasmine" },
  { image: "/gallery/lavender.jpeg", title: "Lavender" },
  { image: "/gallery/manuka-bee.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-four.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-image-2.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-image.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-one.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-three.jpeg", title: "Manuka" },
  { image: "/gallery/manuka-two.jpeg", title: "Manuka" },
  { image: "/gallery/maybush-image-three.jpeg", title: "Maybush" },
  { image: "/gallery/maybush-image-two.jpeg", title: "Maybush" },
  { image: "/gallery/maybush-image.jpeg", title: "Maybush" },
  { image: "/gallery/mexiacan-heather-two.jpeg", title: "Mexican Heather" },
  { image: "/gallery/mexican-heather-one.jpeg", title: "Mexican Heather" },
  { image: "/gallery/mexican-heather-three.jpeg", title: "Mexican Heather" },
  { image: "/gallery/mexican-heather-two.jpeg", title: "Mexican Heather" },
  { image: "/gallery/nigella flower.jpeg", title: "Nigella" },
  { image: "/gallery/nursery-image-five.jpeg", title: "Nursery" },
  { image: "/gallery/nursery-image-four (1).jpeg", title: "Nursery" },
  { image: "/gallery/nursery-image-six.jpeg", title: "Nursery" },
  { image: "/gallery/nursery-image-two.jpeg", title: "Nursery" },
  { image: "/gallery/nursery-image.jpeg", title: "Nursery" },
  { image: "/gallery/pink-climber-image.jpeg", title: "Pink Climbing Rose" },
  { image: "/gallery/podo-one.jpeg", title: "Podo" },
  { image: "/gallery/prunus-africana.jpeg", title: "Prunus Africana" },
  { image: "/gallery/purple vurbane.jpeg", title: "Purple Verbena" },
  { image: "/gallery/rosemary-image-two.jpeg", title: "Rosemary" },
  { image: "/gallery/rosemary-image.jpeg", title: "Rosemary" },
  { image: "/gallery/rosemary-two.jpeg", title: "Rosemary" },
  { image: "/gallery/rosemary.jpeg", title: "Rosemary" },
  { image: "/gallery/salvia.jpeg", title: "Salvia" },
  { image: "/gallery/cerinthe - honeywort.jpeg", title: "Cerinthe Honeywort" },
  { image: "/gallery/cerinthe- honeywort.jpeg", title: "Cerinthe Honeywort" },
  { image: "/gallery/serinth-one.jpeg", title: "Cerinthe Honeywort" },
  { image: "/gallery/serinth-two.jpeg", title: "Cerinthe Honeywort" },
  { image: "/gallery/tree tomato 2.jpeg", title: "Tree Tomato" },
  { image: "/gallery/tree-tomato.jpeg", title: "Tree Tomato" },
  { image: "/gallery/yellow-climber-image.jpeg", title: "Yellow Climbing Rose" },
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
                  <article className="gallery-carousel-slide" key={item.image}>
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
            {galleryItems.map((item, index) => <button className={index === selectedIndex ? "gallery-thumbnail is-selected" : "gallery-thumbnail"} type="button" key={item.image} onClick={() => scrollTo(index)} aria-label={`Show ${item.title}, image ${index + 1}`} aria-pressed={index === selectedIndex}><Image src={item.image} alt="" fill sizes="120px" /></button>)}
          </div>
        </div>
      </section>

      <section className="gallery-invitation section-pad"><div className="page-shell gallery-invitation-inner"><p className="eyebrow">Your turn</p><h2>Make space<br />for more <span className="text-orange-500">life.</span></h2><p>See something you would like to grow? Explore our collection of plants chosen for generous gardens and hopeful beginnings.</p><Link className="button button-green" href="/product">Explore plants <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}