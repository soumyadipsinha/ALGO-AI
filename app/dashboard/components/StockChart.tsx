"use client"

import { useEffect, useState } from "react"
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command"
import { Button } from "@/components/ui/button";
import { Loader2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchCommandProps, StockWithWatchlistStatus } from "@/lib/types";

export default function SearchCommand({ renderAs = 'button', label = 'Add stock', initialStocks = [] }: SearchCommandProps) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(initialStocks);

  const isSearchMode = !!searchTerm.trim();
  const displayStocks = isSearchMode ? stocks : stocks?.slice(0, 10);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen(v => !v)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const handleSearch = async () => {
    if(!isSearchMode) return setStocks(initialStocks);

    setLoading(true)
    try {
        const results = await searchStocks(searchTerm.trim());
        setStocks(results);
    } catch {
      setStocks([])
    } finally {
      setLoading(false)
    }
  }

  const debouncedSearch = useDebounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch();
  }, [searchTerm]);

  const handleSelectStock = () => {
    setOpen(false);
    setSearchTerm("");
    setStocks(initialStocks);
  }

  return (
    <>
      {renderAs === 'button' ? (
          <Button onClick={() => setOpen(true)} className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-none">
            {label}
          </Button>
      ) : (
          <Button onClick={() => setOpen(true)} variant="outline" className="gap-2 text-gray-400 border-gray-700 hover:bg-gray-800">
            {label}
          </Button>
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center px-3 border-b border-gray-800">
          <CommandInput value={searchTerm} onValueChange={setSearchTerm} placeholder="Search stocks..." className="flex-1" />
          {loading && <Loader2 className="h-4 w-4 animate-spin text-yellow-500" />}
        </div>
        <CommandList>
          {loading ? (
              <CommandEmpty>Loading stocks...</CommandEmpty>
          ) : displayStocks?.length === 0 ? (
              <CommandEmpty>
                {isSearchMode ? 'No results found' : 'No stocks available'}
              </CommandEmpty>
            ) : (
            <div className="p-2">
              <div className="text-sm text-gray-500 px-2 py-1 mb-2">
                {isSearchMode ? 'Search results' : 'Popular stocks'}
                {` `}({displayStocks?.length || 0})
              </div>
              {displayStocks?.map((stock) => (
                  <Link
                      key={stock.symbol}
                      href={`/dashboard/stocks/${stock.symbol}`}
                      onClick={handleSelectStock}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <TrendingUp className="h-4 w-4 text-yellow-500" />
                    <div className="flex-1">
                      <div className="font-medium text-white">
                        {stock.description}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stock.symbol} | {stock.type}
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          )
          }
        </CommandList>
      </CommandDialog>
    </>
  )
}