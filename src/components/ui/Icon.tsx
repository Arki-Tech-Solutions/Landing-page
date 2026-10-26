import {
  Activity, Blocks, BookOpen, Brain, BrainCircuit, Briefcase, Building, ClipboardCheck, Cloud, CloudCog, Code2, Cpu,
  CreditCard, Database, FileText, Gamepad2, Globe, GraduationCap, HeartPulse, Landmark, LayoutDashboard,
  MessageSquare, MessagesSquare, Monitor, Presentation, RefreshCw, Server, ShoppingCart, Smartphone, Sparkles,
  MapPin, Package, Sprout, Store, Timer, UserCheck, Truck, User, Users, Wallet, Workflow,
  type LucideIcon, type LucideProps,
} from "lucide-react";

/**
 * Name → lucide icon map for icons referenced from content files.
 * Add an entry here when content uses a new icon name.
 */
export const iconMap: Record<string, LucideIcon> = {
  Activity, Blocks, BookOpen, Brain, BrainCircuit, Briefcase, Building, ClipboardCheck, Cloud, CloudCog, Code2, Cpu,
  CreditCard, Database, FileText, Gamepad2, Globe, GraduationCap, HeartPulse, Landmark, LayoutDashboard,
  MessageSquare, MessagesSquare, Monitor, Presentation, RefreshCw, Server, ShoppingCart, Smartphone, Sparkles,
  MapPin, Package, Sprout, Store, Timer, UserCheck, Truck, User, Users, Wallet, Workflow,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = iconMap[name] ?? Sparkles;
  return <C {...props} />;
}
