"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type FormEvent, useState } from "react";
import { formatStartingPrice, getProduct } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = getProduct(params.id);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!product) {
    return (
      <main className="product-not-found section-pad">
        <div className="page-shell">
          <p className="eyebrow">Product not found</p>
          <h1>That plant has<br /><em>taken root elsewhere.</em></h1>
          <Link className="button button-green" href="/product">Back to products <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
    );
  }

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
          formType: "product",
          productName: product.name,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Enquiry could not be sent.");
      setSent(true);
    } catch {
      setErrorMessage("We couldn’t send your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="product-detail-page">
      <div className="page-shell product-detail-topline">
        <Link className="text-link" href="/product">← Back to products</Link>
        <span className="product-detail-count">Pollination / Plant library</span>
      </div>

      <section className="page-shell product-detail-grid">
        <div className="product-detail-image">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 55vw" />
          ) : (
            <div className="product-image-placeholder">Product photo needed</div>
          )}
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">{product.type}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-price">{formatStartingPrice(product)}</p>
          <div className="product-description-row">
            <p className="product-detail-description">{product.description}</p>
            {product.pollinatorFriendly && (
              <span
                className="pollinator-description-icon"
                role="img"
                aria-label="Pollinator favourite"
                data-tooltip="Pollinator favourite"
                tabIndex={0}
              >
                <Image src="/bee.svg" alt="" width={28} height={28} />
              </span>
            )}
          </div>
          <div className="product-facts">
            <div><span>Climate</span><strong>{product.climate}</strong></div>
            <div><span>Size</span><strong>{product.size}</strong></div>
            <div><span>Care</span><strong>{product.care}</strong></div>
          </div>
        </div>
      </section>

      <section className="product-contact-section">
        <div className="page-shell product-contact-grid">
          <div>
            <p className="eyebrow">Bring it home</p>
            <h2>Have a question<br /><em>about {product.name}?</em></h2>
            <p className="product-contact-copy">Tell us a little about your space and we will help you decide if this is the right plant for you.</p>
          </div>
          <form className="product-contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success"><p className="eyebrow">Message received</p><h3>We will be in touch soon.</h3><p>Thanks for asking about {product.name}. Our team will reply with a thoughtful recommendation.</p></div>
            ) : (
              <>
                <label><span>Your name</span><input name="name" required placeholder="A name we can call you" /></label>
                <label><span>Email address</span><input name="email" type="email" required placeholder="you@example.com" /></label>
                <label><span>Your question</span><textarea name="message" required rows={5} placeholder={`Tell us about your space or ask about ${product.name}`} /></label>
                {errorMessage && <p role="alert">{errorMessage}</p>}
                <button className="button button-green" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send enquiry"} {!isSubmitting && <span aria-hidden="true">↗</span>}</button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
