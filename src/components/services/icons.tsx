import {
  Activity, Bot, BrainCircuit, Clock, Cloud, Code2, Database, Eye, GitBranch, Layers, LifeBuoy, Lightbulb, LineChart,
  Monitor, RefreshCw, Rocket, Scale, Shield, ShieldCheck, Sparkles, Target, UserCheck, Users,
  type LucideIcon, type LucideProps,
} from "lucide-react";

/** Local name → icon map for icon names used in src/content/services.ts. */
const map: Record<string, LucideIcon> = {
  Activity, Bot, BrainCircuit, Clock, Cloud, Code2, Database, Eye, GitBranch, Layers, LifeBuoy, Lightbulb, LineChart,
  Monitor, RefreshCw, Rocket, Scale, Shield, ShieldCheck, Sparkles, Target, UserCheck, Users,
};

export function SvcIcon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name] ?? Sparkles;
  return <C {...props} />;
}
