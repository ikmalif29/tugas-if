import { ShoppingCart, Sun, Moon } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Header({ isDarkMode, toggleTheme }) {
    return (
        <header className={`bg-orange-500 shadow-lg ${isDarkMode ? 'dark' : ''}`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="w-96">
                    <marquee direction="right">
                        <a href="/" className="text-black text-4xl font-bold">
                            Sepokat Store
                        </a>
                    </marquee>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Home
                    </a>
                    <a href="/products" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Products
                    </a>
                    <a href="/about" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        About
                    </a>
                    <a href="/contact" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Contact
                    </a>
                    <ShoppingCart className="hover:text-orange-200 transition-colors duration-300" />
                    <button onClick={toggleTheme} className="relative w-8 h-8 flex items-center justify-center focus:outline-none">
                        {/* Sun icon with transition */}
                        <div className={`absolute transition-all duration-300 ${isDarkMode ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                            <Sun className="h-6 w-6 text-black font-bold" />
                        </div>
                        {/* Moon icon with transition */}
                        <div className={`absolute transition-all duration-300 ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <Moon className="h-6 w-6 text-white font-bold" />
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
}
