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
    quote: "Placeholder testimonial. Add a short, approved quote from a client describing what Arki Tech built, how the team worked with them, and the result they saw.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder testimonial. A good quote mentions a concrete outcome, such as a launch date met, a process automated, or a cost reduced, in the client's own words.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder testimonial. Ask permission before publishing a client's name, title and company, and keep the quote to three or four sentences.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder testimonial. Quotes that describe how the team communicated, handled changing priorities and owned problems help future clients understand what working with Arki Tech is like.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder testimonial. If a client prefers not to be named, use their role and industry only (for example \"CTO, Fintech startup\") and say so in the approval email.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Placeholder testimonial. Keep the original wording from the client where possible, fix only spelling, and store the written approval alongside this file's history.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
];
