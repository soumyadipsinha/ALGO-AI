import { NavItem } from "./types";
import { Home, LineChart, Bookmark, TrendingUp } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/watchlist",
    label: "Watchlist",
    icon: Bookmark,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChart,
  },
  {
    href: "/dashboard/trends",
    label: "Trends",
    icon: TrendingUp,
  },
];

export const DEFAULT_STOCKS = [
  { symbol: "AAPL", description: "Apple Inc", displaySymbol: "AAPL", type: "Common Stock" },
  { symbol: "MSFT", description: "Microsoft Corporation", displaySymbol: "MSFT", type: "Common Stock" },
  { symbol: "GOOGL", description: "Alphabet Inc", displaySymbol: "GOOGL", type: "Common Stock" },
  { symbol: "AMZN", description: "Amazon.com Inc", displaySymbol: "AMZN", type: "Common Stock" },
  { symbol: "TSLA", description: "Tesla Inc", displaySymbol: "TSLA", type: "Common Stock" },
];
