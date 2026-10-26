import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/clients";
import { ClientLogo } from "./ClientLogo";

/** 4-column grid of client logo tiles with the client name revealed on hover. */
export function ClientGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 max-[450px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {clients.map((c, i) => (
        <Reveal key={`${c.name}-${i}`} delay={(i % 4) * 0.05}>
          <div className="group relative bg-white rounded-[28px] p-6 md:p-10 border border-gray-100 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex items-center justify-center min-h-[140px] md:min-h-[180px]">
            <div className="relative w-full aspect-[3/2] flex items-center justify-center p-2">
              <ClientLogo client={c} className="group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{c.name}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
