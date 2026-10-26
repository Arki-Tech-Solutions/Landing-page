import { Table } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { BlogBlock } from "@/content/blog";

/** Renders a post's structured blocks with the reference's article typography. */
export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((b, i) => (
        <Reveal key={i} className="w-full">
          <Block block={b} />
        </Reveal>
      ))}
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed my-6">{block.text}</p>;
    case "h2":
      return (
        <h2 className="text-2xl md:text-3xl font-black text-indigo-950 mt-12 mb-6 tracking-tight leading-tight uppercase">{block.text}</h2>
      );
    case "ul":
      return (
        <ul className="space-y-4 my-6">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-lg text-gray-600 font-medium group">
              <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="my-4 overflow-hidden">
          <h3 className="text-xl font-black text-indigo-950 mb-6 uppercase tracking-wider flex items-center gap-3">
            <Table className="text-primary w-5 h-5 shrink-0" />
            {block.title}
          </h3>
          <div className="overflow-x-auto border border-gray-100 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80">
                  {block.columns.map((c, ci) => (
                    <th
                      key={c}
                      className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b border-gray-100 ${
                        ci === 2 ? "text-primary bg-primary/5" : "text-gray-400"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {block.rows.map((row) => (
                  <tr key={row[0]} className="group hover:bg-primary-soft/40 transition-colors">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-6 py-5 text-[15px] border-b border-gray-50 transition-colors ${
                          ci === 2 ? "text-primary font-black" : "font-bold text-gray-600 group-hover:text-indigo-950"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "faq":
      return (
        <div className="my-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-[280px] shrink-0">
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{block.intro}</p>
            </div>
            <div className="flex-1 space-y-0">
              {block.items.map((item, i) => (
                <div key={item.q} className="group">
                  <div className="flex items-start gap-6 py-8">
                    <span className="text-[11px] font-black text-primary/40 mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="text-base font-black text-indigo-950 mb-3 uppercase tracking-wide leading-tight">{item.q}</h4>
                      <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                  {i < block.items.length - 1 ? <div className="h-px bg-gray-100" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}
