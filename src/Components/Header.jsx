import { ShoppingCart, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Header({ isDarkMode, toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    // Function to load cart count from localStorage
    const loadCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = cart.length;
        setCartCount(totalItems);
    };

    // Call loadCartCount on mount and whenever localStorage changes
    useEffect(() => {
        loadCartCount();

        // Listen for changes in localStorage (for multiple tabs or different components)
        const handleStorageChange = (e) => {
            if (e.key === "cart") loadCartCount(); // Only update if 'cart' changes
        };

        window.addEventListener("storage", handleStorageChange);

        // Optional: Add custom event listener to handle cart updates from other components
        const handleCartUpdate = () => loadCartCount();
        window.addEventListener("cartUpdate", handleCartUpdate);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("cartUpdate", handleCartUpdate);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const triggerCartUpdate = () => {
        window.dispatchEvent(new Event("cartUpdate")); // Trigger cart update manually
    };

    return (
        <header
            className={`shadow-lg sticky top-0 z-10 ${
                isDarkMode ? "bg-gray-900" : "bg-orange-500"
            } transition-colors duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="w-96">
                    <a
                        href="/"
                        className="text-black dark:text-white text-4xl font-bold tracking-wide animate-bounce"
                    >
                        Sepokat Store
                    </a>
                </div>

                <nav className="hidden md:flex space-x-8 items-center">
                    <a
                        href="/"
                        className="font-bold hover:text-orange-200 text-black dark:text-white transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="/products"
                        className="font-bold hover:text-orange-200 text-black dark:text-white transition-colors duration-300"
                    >
                        Products
                    </a>
                    <a
                        href="/about"
                        className="font-bold hover:text-orange-200 text-black dark:text-white transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="font-bold hover:text-orange-200 text-black dark:text-white transition-colors duration-300"
                    >
                        Contact
                    </a>

                    {/* Cart Icon with Cart Count */}
                    <div className="relative">
                        <ShoppingCart
                            className={`dark:text-white hover:text-orange-200 transition-colors duration-300 cursor-pointer ${
                                isDarkMode ? "text-white" : "text-black"
                            }`}
                            onClick={() => {
                                navigate("/cart");
                                triggerCartUpdate(); // Ensure cart updates on click
                            }}
                        />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        <div
                            className={`absolute transition-transform duration-300 ${
                                isDarkMode ? "opacity-0 scale-50" : "opacity-100 scale-100"
                            }`}
                        >
                            <Sun className="h-6 w-6 text-black font-bold" />
                        </div>
                        <div
                            className={`absolute transition-transform duration-300 ${
                                isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-50"
                            }`}
                        >
                            <Moon className="h-6 w-6 text-white font-bold" />
                        </div>
                    </button>
                </nav>

                <button
                    className="md:hidden text-black dark:text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
                    <a
                        href="/"
                        className="block font-bold text-black dark:text-white hover:text-orange-500"
                    >
                        Home
                    </a>
                    <a
                        href="/products"
                        className="block font-bold text-black dark:text-white hover:text-orange-500"
                    >
                        Products
                    </a>
                    <a
                        href="/about"
                        className="block font-bold text-black dark:text-white hover:text-orange-500"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="block font-bold text-black dark:text-white hover:text-orange-500"
                    >
                        Contact
                    </a>

                    <div className="flex items-center justify-between">
                        <div className="relative">
                            <ShoppingCart
                                onClick={() => navigate("/cart")}
                                className="text-black dark:text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            <div
                                className={`absolute transition-transform duration-300 ${
                                    isDarkMode ? "opacity-0 scale-50" : "opacity-100 scale-100"
                                }`}
                            >
                                <Sun className="h-6 w-6 text-black font-bold" />
                            </div>
                            <div
                                className={`absolute transition-transform duration-300 ${
                                    isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-50"
                                }`}
                            >
                                <Moon className="h-6 w-6 text-white font-bold" />
                            </div>
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}
