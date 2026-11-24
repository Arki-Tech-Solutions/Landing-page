import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/seo";

/**
 * AI assistants and AI search engines that read the site, so they can describe and cite Arki
 * (GEO). They are allowed explicitly: some of them only crawl sites that name them.
 */
const aiCrawlers = [
  "GPTBot", // OpenAI
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini and Google AI features
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl, used by many AI models
  "meta-externalagent", // Meta AI
  "Amazonbot",
  "DuckAssistBot",
];

/** /robots.txt: everything public may be crawled; hidden pages already answer with a 404. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/__not-found"] },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
