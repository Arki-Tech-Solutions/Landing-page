import {
  Accessibility, Activity, Bell, Blocks, Box, Boxes, Brain, ChartColumn, ChartLine, Clock, Cloud, CodeXml, Cpu, Database,
  Eye, FileText, Gauge, GitBranch, Globe, HardDrive, Languages, Layers, LayoutTemplate, Lock, Plug, RefreshCw, Rocket,
  Search, Server, Settings, Shield, ShoppingCart, Smartphone, Star, Target, Users, Wallet, WifiOff, Workflow, Zap,
  type LucideIcon,
} from "lucide-react";
import type { TechIconKey } from "@/content/technology-details";

/** Local icon map for the technology templates (keys used in technology-details.ts). */
export const techIcons: Record<TechIconKey, LucideIcon> = {
  shield: Shield, gauge: Gauge, accessibility: Accessibility, search: Search, blocks: Blocks, globe: Globe, users: Users,
  layers: Layers, zap: Zap, code: CodeXml, layout: LayoutTemplate, smartphone: Smartphone, settings: Settings, cpu: Cpu,
  brain: Brain, eye: Eye, database: Database, server: Server, cloud: Cloud, lock: Lock, workflow: Workflow, activity: Activity,
  git: GitBranch, box: Box, chart: ChartColumn, refresh: RefreshCw, plug: Plug, wallet: Wallet, languages: Languages,
  wifiOff: WifiOff, target: Target, star: Star, rocket: Rocket, lineChart: ChartLine, boxes: Boxes, shoppingCart: ShoppingCart,
  fileText: FileText, bell: Bell, clock: Clock, hardDrive: HardDrive,
};

/** Soft brand-tinted hover shadows (the reference uses rgba(37,99,235,x) blue). */
export const shadowSoft = "hover:shadow-[0_10px_40px_color-mix(in_oklab,var(--color-primary)_8%,transparent)]";
export const shadowCard = "hover:shadow-[0_20px_60px_color-mix(in_oklab,var(--color-primary)_8%,transparent)]";
export const shadowLift = "hover:shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--color-primary)_15%,transparent)]";
