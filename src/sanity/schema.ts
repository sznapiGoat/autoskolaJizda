// Sanity schema — matches the shape of src/lib/data.ts
// Connect a real Sanity project and replace static data with GROQ queries.

export const pricingTierSchema = {
  name: "pricingTier",
  title: "Pricing Tier",
  type: "document",
  fields: [
    { name: "id", title: "ID", type: "slug" },
    { name: "name", title: "Name", type: "string" },
    { name: "price", title: "Price (CZK)", type: "number" },
    { name: "description", title: "Description", type: "text" },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
    { name: "highlighted", title: "Highlighted", type: "boolean" },
    { name: "badge", title: "Badge text", type: "string" },
  ],
};

export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "rating", title: "Rating (1–5)", type: "number" },
    { name: "date", title: "Date (YYYY-MM)", type: "string" },
    { name: "text", title: "Review text", type: "text" },
    { name: "initials", title: "Initials", type: "string" },
  ],
};

export const faqItemSchema = {
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string" },
    { name: "answer", title: "Answer", type: "text" },
    { name: "order", title: "Order", type: "number" },
  ],
};

export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "phone", title: "Phone", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "reviewCount", title: "Google Review Count", type: "number" },
  ],
};

export const languageSchema = {
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    { name: "code", title: "ISO code (e.g. ar)", type: "string" },
    { name: "name", title: "Language name in Czech", type: "string" },
    { name: "flag", title: "Flag emoji", type: "string" },
    { name: "order", title: "Display order", type: "number" },
  ],
};

export const resourceSchema = {
  name: "resource",
  title: "Resource / Download",
  type: "document",
  fields: [
    { name: "id", title: "ID slug", type: "slug" },
    { name: "label", title: "Label", type: "string" },
    { name: "description", title: "Description", type: "string" },
    { name: "href", title: "URL or PDF link", type: "url" },
    { name: "type", title: "Type", type: "string", options: { list: ["external", "download"] } },
    { name: "filename", title: "Filename (for downloads)", type: "string" },
  ],
};

export const whyUsItemSchema = {
  name: "whyUsItem",
  title: "Why Us Item",
  type: "document",
  fields: [
    { name: "id", title: "ID", type: "slug" },
    { name: "icon", title: "Lucide icon name", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "body", title: "Body text", type: "text" },
    { name: "order", title: "Display order", type: "number" },
  ],
};

export default [
  pricingTierSchema,
  testimonialSchema,
  faqItemSchema,
  siteSettingsSchema,
  languageSchema,
  resourceSchema,
  whyUsItemSchema,
];
