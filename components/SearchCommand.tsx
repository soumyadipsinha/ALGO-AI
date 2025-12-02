'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
    CommandDialog, 
    CommandEmpty, 
    CommandInput, 
    CommandList,
    CommandGroup,
    CommandItem 
} from "@/components/ui/command";
import { Search, Plus, TrendingUp } from "lucide-react";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import { useDebounce } from "@/hooks/useDebounce";
import { StockWithWatchlistStatus, SearchCommandProps } from "@/lib/types";

export default function SearchCommand({ 
    renderAs = 'button', 
    label = 'Add stock', 
    initialStocks = [] 
}: SearchCommandProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(initialStocks);
    const [loading, setLoading] = useState(false);
    
    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        const fetchStocks = async () => {
            if (debouncedQuery.trim() === '') {
                setStocks(initialStocks);
                return;
            }
            
            setLoading(true);
            try {
                const results = await searchStocks(debouncedQuery);
                setStocks(results);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, [debouncedQuery, initialStocks]);

    const handleSelect = (stock: StockWithWatchlistStatus) => {
        console.log('Selected stock:', stock);
        setOpen(false);
        // Add your logic to add stock to watchlist here
    };

    return (
        <>
            {renderAs === 'button' ? (
                <Button 
                    onClick={() => setOpen(true)}
                    variant="outline"
                    className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-none"
                >
                    <Plus className="h-4 w-4" />
                    {label}
                </Button>
            ) : (
                <Button
                    onClick={() => setOpen(true)}
                    variant="outline"
                    className="gap-2 text-gray-400 border-gray-700 hover:bg-gray-800"
                >
                    <Search className="h-4 w-4" />
                    Search stocks...
                </Button>
            )}

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput 
                    placeholder="Search stocks by symbol or name..." 
                    value={query}
                    onValueChange={setQuery}
                />
                <CommandList>
                    <CommandEmpty>
                        {loading ? 'Searching...' : 'No stocks found.'}
                    </CommandEmpty>
                    <CommandGroup heading="Stocks">
                        {stocks.map((stock) => (
                            <CommandItem
                                key={stock.symbol}
                                value={stock.symbol}
                                onSelect={() => handleSelect(stock)}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="h-4 w-4 text-yellow-500" />
                                    <div>
                                        <div className="font-medium">{stock.displaySymbol}</div>
                                        <div className="text-sm text-gray-500">{stock.description}</div>
                                    </div>
                                </div>
                                {stock.inWatchlist && (
                                    <span className="text-xs text-green-500">In Watchlist</span>
                                )}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
