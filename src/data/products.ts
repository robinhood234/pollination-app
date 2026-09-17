export type Product = {
  id: string;
  name: string;
  type: string;
  category: "Medicinal" | "Herbal" | "Ornamental" | "Commercial" | "Indigenous";
  price: string;
  priceValue: number;
  image: string;
  shortDescription: string;
  description: string;
  care: string;
  light: string;
  size: string;
};

export const products: Product[] = [
  {
    id: "cyprus",
    name: "Cyprus",
    type: "For first-time growers",
    category: "Commercial",
    price: "$28",
    priceValue: 28,
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.52.jpeg",
    shortDescription: "A hardy evergreen with a calm silhouette and year-round colour.",
    description: "Cyprus is an easy-going evergreen that brings structure, privacy and a little quiet drama to a garden. Its soft, fresh foliage works beautifully in a pot, along a walkway or as part of a new garden border.",
    care: "Water when the top soil feels dry. Prune lightly to keep its shape.",
    light: "Bright light to gentle afternoon shade",
    size: "Grows to approximately 1.5m in a container",
  },
  {
    id: "bottle-brush",
    name: "Bottle Brush",
    type: "For small sunny spaces",
    category: "Ornamental",
    price: "$34",
    priceValue: 34,
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.57 (1).jpeg",
    shortDescription: "A cheerful pollinator magnet with vivid brush-like blooms.",
    description: "Bottle Brush brings a generous burst of colour when its bright flowers open. It is a resilient choice for sunny balconies, patios and gardens, offering nectar for bees and a welcoming place for small visitors to land.",
    care: "Water deeply once the soil begins to dry. Feed during the growing season.",
    light: "Full sun",
    size: "Grows to approximately 2m in a container",
  },
  {
    id: "manuka",
    name: "Manuka",
    type: "For a wilder garden",
    category: "Indigenous",
    price: "$18",
    priceValue: 18,
    image: "/gallery/WhatsApp Image 2026-05-06 at 19.02.53.jpeg",
    shortDescription: "A resilient flowering shrub with a soft, natural presence.",
    description: "Manuka is a thoughtful choice for a garden that wants to feel a little more wild. Its delicate flowers and evergreen character create a dependable habitat plant, while its compact form makes it easy to introduce to a new space.",
    care: "Keep soil lightly moist while establishing, then water during dry spells.",
    light: "Full sun to partial shade",
    size: "Grows to approximately 1m in a container",
  },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
