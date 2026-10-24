import Image from "next/image";
import Link from "next/link";

const values = [
  { number: "01", title: "Observe", text: "We began by paying closer attention to the plants, insects, and natural relationships that sustain healthy ecosystems." },
  { number: "02", title: "Learn", text: "We continue to learn from nature, growers, farmers, gardeners, and local knowledge to understand what helps landscapes thrive." },
  { number: "03", title: "Share", text: "Pollination Propagators exists to share those lessons through carefully selected plants, practical guidance, and a shared commitment to ecological restoration and sustainable growth." },
];

const milestones = [
  ["01", "Cultivate", "We carefully propagate plants that contribute to healthier landscapes."],
  ["02", "Support", "We help pollinators, biodiversity, and local ecosystems thrive by promoting plants that strengthen natural connections."],
  ["03", "Inspire", "We share knowledge and practical guidance to help more people grow with nature and steward the environment."],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-image" aria-hidden="true" />
        <div className="about-hero-shade" aria-hidden="true" />
        <div className="page-shell about-hero-content">
          <p className="eyebrow about-hero-eyebrow">The story of Pollination</p>
          <h1>A little more<br /><span className="text-orange-500">life, </span>everywhere.</h1>
          <p>We have a collection of indigenous, commercial, medicinal and ornamental plants selected to support eco-systems and pollinators.</p>
        </div>
        <span className="about-hero-mark">About / 01</span>
      </section>

      <section className="about-intro section-pad"><div className="page-shell about-intro-grid"><div><p className="eyebrow">01 / Why we exist</p><h2>Start close<br />to the <span className="text-orange-500">ground.</span></h2></div><div className="about-intro-copy"><p className="lead">Pollination began with a simple question: what could flourish if we worked more closely with nature?</p><p>Our answer is a growing collection of indigenous, medicinal, ornamental, and commercial plants selected to support pollinators, strengthen ecosystems, and create healthier landscapes.</p><p>From a single seedling in a backyard to thriving farms and gardens alive with pollinators, every step toward restoration matters.</p></div></div></section>

      <section className="about-image-break"><div className="page-shell about-image-grid"><div className="about-image-large"><Image src="/gallery/black-wattle-two.jpeg" alt="Black Wattle flowering in the garden" fill sizes="(max-width: 800px) 100vw, 66vw" /></div><div className="about-image-note"><span>Field note / 01</span><p>Healthy ecosystems are built on relationships: soil, water, sunlight, plants, pollinators, wildlife, and people working in harmony.</p></div></div></section>

      <section className="about-values section-pad"><div className="page-shell"><div className="section-heading about-section-heading"><div><p className="eyebrow">02 / What guides us</p><h2>Our work has<br />three <span className="text-orange-500">roots.</span></h2></div><p>At Pollination Propagators, we believe these everyday choices are the seeds of lasting environmental stewardship.</p></div><div className="about-values-grid">{values.map((value) => <article className="about-value" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>

      <section className="about-process section-pad"><div className="page-shell about-process-grid"><div className="about-process-copy"><p className="eyebrow">03 / How we got here</p><h2>Small steps<br />become <span className="text-orange-500">habitats.</span></h2><p className="lead">There is no single way to make a difference.</p><p>Meaningful change grows from small, consistent actions: planting an indigenous tree, creating habitat for pollinators, conserving local biodiversity, or teaching the next generation to value the natural world.</p></div><div className="about-milestones">{milestones.map(([number, title, text]) => <div className="about-milestone" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="about-team section-pad"><div className="page-shell about-team-grid"><div className="about-team-image"><Image src="/gallery/manuka-bee.jpeg" alt="Plants growing together in the nursery" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="about-team-copy"><p className="eyebrow">04 / The people behind it</p><h2>Curious minds.<br /><span className="text-orange-500">Caring hands.</span></h2><p>What connects us is a belief that caring for the environment becomes more powerful when knowledge, resources, and responsibility are shared. Through every plant we propagate and every conversation we have, we aim to help people grow spaces that nurture both communities and the natural world.</p><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className="about-closing section-pad"><div className="page-shell about-closing-inner"><p className="eyebrow">Come grow with us</p><h2>There is always<br />room for one <span className="text-orange-500">more.</span></h2><Link className="button button-green" href="/product">Explore the collection <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}