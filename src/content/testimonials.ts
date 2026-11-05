/**
 * Client testimonials. Shared by the home carousel and /all-testimonials.
 *
 * TODO(confirm): placeholders only. Never publish invented quotes. Replace with
 * real, approved client quotes (name, role, company) before launch.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** 1–5 star rating given by the client. Leave unset for placeholders (stars render muted). */
  rating?: number;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Arki took the time to understand how our clinics actually work before building anything. The booking app launched on schedule, and our staff picked it up in a day.",
    name: "Selam Tadesse",
    role: "Head of Operations, Tena Clinics",
    rating: 5,
    placeholder: true,
  },
  {
    quote: "We needed mobile money payments in our marketplace fast. Their engineers joined our sprints, flagged risks early and delivered a payment flow our customers trust.",
    name: "Dawit Bekele",
    role: "CTO, Shemach Market",
    rating: 5,
    placeholder: true,
  },
  {
    quote: "Clear communication, weekly demos and code we were happy to own. Working with the team in Addis felt like having senior engineers down the hall.",
    name: "Laura Schmidt",
    role: "Product Lead, Lumen Analytics, Berlin",
    rating: 5,
    placeholder: true,
  },
];
