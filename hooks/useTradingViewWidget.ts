import { useEffect, useRef } from 'react';

interface TradingViewWidgetConfig {
  symbol?: string;
  interval?: string;
  theme?: 'light' | 'dark';
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  allow_symbol_change?: boolean;
  container_id?: string;
}

export default function useTradingViewWidget(config: TradingViewWidgetConfig = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        new (window as any).TradingView.widget({
          width: '100%',
          height: 400,
          symbol: config.symbol || 'NASDAQ:AAPL',
          interval: config.interval || 'D',
          timezone: 'Etc/UTC',
          theme: config.theme || 'dark',
          style: config.style || '1',
          locale: config.locale || 'en',
          toolbar_bg: config.toolbar_bg || '#f1f3f6',
          enable_publishing: config.enable_publishing || false,
          allow_symbol_change: config.allow_symbol_change || true,
          container_id: config.container_id || containerRef.current?.id || 'tradingview_widget',
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [config]);

  return containerRef;
}
