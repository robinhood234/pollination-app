"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="page-shell contact-hero-inner">
          <p className="eyebrow">Pollination / Contact</p>
          <h1>Let&apos;s grow<br /><em>something good.</em></h1>
          <p>Questions about a plant, a garden or where to begin? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-main section-pad">
        <div className="page-shell contact-main-grid">
          <div className="contact-details">
            <p className="eyebrow">Come say hello</p>
            <h2>Good things<br /><em>start with a note.</em></h2>
            <p className="contact-details-copy">Tell us what you are growing, what you are wondering about, or simply what brought you here. Our small team will get back to you soon.</p>
            <div className="contact-options">
              <a href="mailto:shirostan@gmail.com"><span>Email</span><strong>shirostan@gmail.com</strong><b aria-hidden="true">↗</b></a>
              <a href="tel:+254729842282"><span>Phone</span><strong>+254 729842282</strong><b aria-hidden="true">↗</b></a>
              <div><span>Visit</span><strong>Nakuru, Naivasha<br />Kenya</strong></div>
            </div>
            <Link className="text-link" href="/about">Learn more about us <span aria-hidden="true">↗</span></Link>
          </div>

          <div className="contact-form-panel">
            {sent ? (
              <div className="contact-success"><p className="eyebrow">Message received</p><h3>Thank you for reaching out.</h3><p>We have your note and will be in touch soon.</p><button className="form-reset" type="button" onClick={() => setSent(false)}>Send another message</button></div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <p className="form-heading">Send us a message</p>
                <label><span>Your name</span><input name="name" required placeholder="A name we can call you" /></label>
                <label><span>Email address</span><input name="email" type="email" required placeholder="you@example.com" /></label>
                <label><span>What can we help with?</span><textarea name="message" required rows={5} placeholder="Tell us a little about your question" /></label>
                <button className="button button-light" type="submit">Send message <span aria-hidden="true">↗</span></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="page-shell contact-location-grid">
          <div className="contact-map"><div className="contact-map-mark">P</div><span>Our garden studio</span></div>
          <div className="contact-location-copy"><p className="eyebrow">Where to find us</p><h2>Make a day<br /><em>of the visit.</em></h2><p>Come by for seasonal plants, growing advice and a slower conversation about what your space needs.</p><p className="contact-hours"><strong>Nakuru, Naivasha</strong><br />Monday–Saturday · 9am–5pm</p><a className="button button-green" href="mailto:shirostan@gmail.com">Plan a visit <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}