"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent.");
      setSent(true);
    } catch {
      setErrorMessage("We couldn’t send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="page-shell contact-hero-inner">
          <p className="eyebrow">Pollination / Contact</p>
          <h1>Let's grow<br /><span className="text-orange-500">something good.</span></h1>
          <p>Questions about a plant, a garden or where to begin? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-main section-pad">
        <div className="page-shell contact-main-grid">
          <div className="contact-details">
            <p className="eyebrow">Come say hello</p>
            <h2>Good things<br /><em>start with a note.</em></h2>
            <p className="contact-details-copy">Tell us what you are growing, what you are wondering about, or simply what brought you here. Our small team will get back to you soon.</p>
            <div className="contact-options">
              <a href="mailto:shirostan@gmail.com"><span>Email</span><strong>pollination@propagator.com</strong><b aria-hidden="true">↗</b></a>
              <a href="tel:+254729842282"><span>Phone</span><strong>+254 740478418</strong><b aria-hidden="true">↗</b></a>
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
                {errorMessage && <p role="alert">{errorMessage}</p>}
                <button className="button button-light" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"} {!isSubmitting && <span aria-hidden="true">↗</span>}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="page-shell contact-location-grid">
          <div className="contact-map"><iframe className="map-embed" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d867.4892830615!2d36.554188269519045!3d-0.8179179999483721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDknMDQuNSJTIDM2wrAzMycxNy40IkU!5e1!3m2!1sen!2ske!4v1792661671593!5m2!1sen!2ske" title="Pollination Studio Garden location" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
          <div className="contact-location-copy"><p className="eyebrow">Where to find us</p><h2>Make a day<br /><em>of the visit.</em></h2><p>Come by for seasonal plants, growing advice and a slower conversation about what your space needs.</p><p className="contact-hours"><strong>Nakuru, Naivasha</strong><br />Monday–Saturday · 9am–5pm</p><a className="button button-green" href="mailto:shirostan@gmail.com">Plan a visit <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}