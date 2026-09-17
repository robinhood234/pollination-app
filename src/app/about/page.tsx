import Image from "next/image";
import Link from "next/link";

const values = [
  { number: "01", title: "Grow with care", text: "We choose plants and practices that leave a little more life behind than they found." },
  { number: "02", title: "Share what works", text: "Good knowledge should move freely. We make growing feel less mysterious and more possible." },
  { number: "03", title: "Make room", text: "For pollinators, for questions, for imperfect beginnings and the joy that arrives unexpectedly." },
];

const milestones = [
  ["01", "Notice", "We began by paying closer attention to the small lives moving through our gardens."],
  ["02", "Learn", "We listened to growers, gardeners and the seasons to understand what helps a place thrive."],
  ["03", "Share", "Pollination is our way of making those lessons useful to more people, one garden at a time."],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-shade" aria-hidden="true" />
        <div className="page-shell about-hero-content">
          <p className="eyebrow about-hero-eyebrow">The story of Pollination</p>
          <h1>A little more<br /><em>life, everywhere.</em></h1>
          <p>We are a plant studio and growing community for people who believe small acts of care can change the shape of a place.</p>
        </div>
        <span className="about-hero-mark">About / 01</span>
      </section>

      <section className="about-intro section-pad"><div className="page-shell about-intro-grid"><div><p className="eyebrow">01 / Why we exist</p><h2>Start close<br /><em>to the ground.</em></h2></div><div className="about-intro-copy"><p className="lead">Pollination began with a simple question: what could grow if we paid better attention?</p><p>Our answer is a living collection of plants, practical tools and generous ideas. We help people create spaces that feel good to be in and do good for the life around them.</p><p>From a single pot on a windowsill to a garden full of buzzing wings, every beginning counts.</p></div></div></section>

      <section className="about-image-break"><div className="page-shell about-image-grid"><div className="about-image-large"><Image src="/gallery/WhatsApp Image 2026-05-06 at 19.03.00 (2).jpeg" alt="A flowering plant in the garden" fill sizes="(max-width: 800px) 100vw, 66vw" /></div><div className="about-image-note"><span>Field note / 01</span><p>Healthy places are made of relationships: soil, sunlight, water, insects and people showing up for one another.</p></div></div></section>

      <section className="about-values section-pad"><div className="page-shell"><div className="section-heading about-section-heading"><div><p className="eyebrow">02 / What guides us</p><h2>Our work has<br /><em>three roots.</em></h2></div><p>They shape what we grow, what we share and the kind of future we want to help make ordinary.</p></div><div className="about-values-grid">{values.map((value) => <article className="about-value" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>

      <section className="about-process section-pad"><div className="page-shell about-process-grid"><div className="about-process-copy"><p className="eyebrow">03 / How we got here</p><h2>Small steps<br /><em>become habitats.</em></h2><p className="lead">There is no single right way to begin.</p><p>We are interested in the slow, cumulative work of making a difference. A seed saved. A native plant chosen. A child learning the name of a bee. These small choices are how a culture of care takes root.</p></div><div className="about-milestones">{milestones.map(([number, title, text]) => <div className="about-milestone" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="about-team section-pad"><div className="page-shell about-team-grid"><div className="about-team-image"><Image src="/gallery/WhatsApp Image 2026-05-06 at 19.02.57 (2).jpeg" alt="Plants growing together" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="about-team-copy"><p className="eyebrow">04 / The people behind it</p><h2>Curious hands.<br /><em>Open hearts.</em></h2><p>We are gardeners, teachers, makers and hopeful beginners. What connects us is a belief that care becomes more powerful when it is shared.</p><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="about-closing section-pad"><div className="page-shell about-closing-inner"><p className="eyebrow">Come grow with us</p><h2>There is always<br /><em>room for one more.</em></h2><Link className="button button-green" href="/product">Explore the collection <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}