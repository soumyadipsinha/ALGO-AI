'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SearchCommand from "@/components/SearchCommand";
import { StockWithWatchlistStatus } from "@/lib/types";

const NavItems = ({ initialStocks }: { initialStocks: StockWithWatchlistStatus[] }) => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href || pathname.startsWith(`${href}/`);
                    
                    return (
                        <Link 
                            key={href}
                            href={href}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                                "hover:bg-gray-800 hover:text-yellow-500",
                                isActive 
                                    ? "bg-gray-800 text-yellow-500 font-medium" 
                                    : "text-gray-400"
                            )}
                        >
                            {Icon && <Icon className="h-4 w-4" />}
                            {label}
                        </Link>
                    );
                })}
            </div>
            
            <SearchCommand initialStocks={initialStocks} />
        </div>
    );
};

export default NavItems;
