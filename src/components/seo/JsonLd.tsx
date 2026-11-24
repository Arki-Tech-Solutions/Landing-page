/**
 * Renders schema.org structured data. "<" is escaped so content can never close the
 * script tag early (as the Next.js JSON-LD guide recommends).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
