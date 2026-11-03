import { internetServiceAssistance, broadbandConnectionAssistance } from "./set-a";
import { wifiSetupSupport, cableTvServices } from "./set-b";
import { internetTroubleshooting, routerSetupHelp } from "./set-c";
import { internetPlanGuidance, networkConnectionSupport } from "./set-d";
import type { Insight } from "./types";

export type { Insight } from "./types";

export const INSIGHTS: Insight[] = [
  internetServiceAssistance,
  internetTroubleshooting,
  wifiSetupSupport,
  routerSetupHelp,
  broadbandConnectionAssistance,
  networkConnectionSupport,
  internetPlanGuidance,
  cableTvServices,
];

export const getInsight = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
export const PUBLISHED = "2026-11-03";
