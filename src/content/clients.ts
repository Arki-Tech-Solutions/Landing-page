/**
 * Client logos. Used by /all-clients and the logo marquee on /case-studies.
 *
 * TODO(confirm): placeholders only. Arki Tech has no client logos approved for
 * publication yet. For each real client add `{ name, logo: "/clients/<file>.svg" }`
 * (logo files go in /public/clients) and delete the placeholder entries. Only
 * publish a logo with the client's written permission.
 */
export type Client = {
  name: string;
  /** Path to a logo in /public. When missing, a neutral "Client logo" tile is shown. */
  logo?: string;
  placeholder?: boolean;
};

export const clients: Client[] = Array.from({ length: 10 }, (_, i) => ({
  name: `Client ${i + 1}`,
  placeholder: true,
}));
