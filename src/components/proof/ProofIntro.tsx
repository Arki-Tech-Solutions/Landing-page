/** Centered page heading used by /all-clients and /all-testimonials. */
export function ProofIntro({ title, highlight, description }: { title: string; highlight: string; description: string }) {
  return (
    <div className="max-w-4xl mb-10 sm:mb-12 mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.2] text-indigo-950">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-500">{description}</p>
    </div>
  );
}
