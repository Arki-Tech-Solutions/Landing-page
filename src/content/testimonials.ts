/**
 * Client testimonials. Shared by the home carousel and /all-testimonials.
 *
 * TODO(confirm): placeholders only. Never publish invented quotes. Replace with
 * real, approved client quotes (name, role, company) before launch.
 */
export type Testimonial = { quote: string; name: string; role: string; placeholder?: boolean };

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
];
