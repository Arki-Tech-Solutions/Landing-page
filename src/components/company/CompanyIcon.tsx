import {
  Award, BadgeCheck, BookOpen, Bot, Brain, BrainCircuit, Building, Building2, CalendarCheck, CalendarClock, Clock, Code,
  Coffee, Cpu, Crosshair, Eye, Filter, Flag, Focus, Gamepad2, Globe, Handshake, Headphones, Hexagon, Layers, Lightbulb,
  MapPin, MessageSquare, MessagesSquare, Monitor, Mountain, Presentation, RefreshCw, Repeat, Rocket, Scale, Server,
  Settings, ShieldAlert, ShieldCheck, Shuffle, Smile, Sparkles, Sprout, Target, Terminal, Timer, TrendingUp, UserCheck,
  UserPlus, Users, Wallet, Zap,
  type LucideIcon, type LucideProps,
} from "lucide-react";

/** Local name → lucide map for icons named in src/content/company.ts (keeps the shared Icon map untouched). */
const map: Record<string, LucideIcon> = {
  Award, BadgeCheck, BookOpen, Bot, Brain, BrainCircuit, Building, Building2, CalendarCheck, CalendarClock, Clock, Code,
  Coffee, Cpu, Crosshair, Eye, Filter, Flag, Focus, Gamepad2, Globe, Handshake, Headphones, Hexagon, Layers, Lightbulb,
  MapPin, MessageSquare, MessagesSquare, Monitor, Mountain, Presentation, RefreshCw, Repeat, Rocket, Scale, Server,
  Settings, ShieldAlert, ShieldCheck, Shuffle, Smile, Sparkles, Sprout, Target, Terminal, Timer, TrendingUp, UserCheck,
  UserPlus, Users, Wallet, Zap,
};

export function CompanyIcon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name] ?? Sparkles;
  return <C {...props} />;
}
