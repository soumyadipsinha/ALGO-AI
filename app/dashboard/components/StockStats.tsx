'use client';

import React, { memo } from 'react';
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import {cn} from "@/lib/utils";

interface TradingViewWidgetProps {
    title?: string;
    symbol?: string;
    interval?: string;
    height?: number;
    className?: string;
}

const TradingViewWidget = ({ title, symbol = 'NASDAQ:AAPL', interval = 'D', height = 600, className }: TradingViewWidgetProps) => {
    const containerRef = useTradingViewWidget({ symbol, interval, theme: 'dark' });

    return (
        <div className="w-full">
            {title && <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>}
            <div className={cn('tradingview-widget-container', className)} ref={containerRef}>
                <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);