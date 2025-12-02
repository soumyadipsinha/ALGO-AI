// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

// Stock Types
export interface Stock {
  symbol: string;
  description: string;
  displaySymbol: string;
  type: string;
}

export interface StockWithWatchlistStatus extends Stock {
  inWatchlist: boolean;
}

export interface StockQuote {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
  t: number; // Timestamp
}

// Search Command Props
export interface SearchCommandProps {
  renderAs?: 'button' | 'input';
  label?: string;
  initialStocks?: StockWithWatchlistStatus[];
}

// Navigation Types
export interface NavItem {
  href: string;
  label: string;
  icon?: React.ComponentType<any>;
}
