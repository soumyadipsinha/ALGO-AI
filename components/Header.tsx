import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import { User } from "@/lib/types";

const Header = async ({ user }: { user?: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-lg">
                        <span className="text-gray-900 font-bold text-xl">AI</span>
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block">ALGO-AI</span>
                </Link>
                
                {user ? (
                    <>
                        <nav className="hidden md:flex flex-1 justify-center">
                            <NavItems initialStocks={initialStocks} />
                        </nav>
                        <UserDropdown user={user} initialStocks={initialStocks} />
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link 
                            href="/login"
                            className="text-gray-400 hover:text-white transition"
                        >
                            Login
                        </Link>
                        <Link 
                            href="/register"
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-medium transition"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header