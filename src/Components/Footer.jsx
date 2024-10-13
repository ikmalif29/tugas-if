// eslint-disable-next-line react/prop-types
export default function Footer({ isDarkMode }) {
    return (
        <footer className={`bg-orange-500 text-white py-8 ${isDarkMode ? 'dark' : ''}`}>
            <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Sepokat Store</h3>
                    <p className="text-white">
                        Sepokat Store is your trusted destination for the latest and trendiest shoes. Shop with us for quality, comfort, and style.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-orange-200 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="hover:text-orange-200 transition-colors duration-300">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-orange-200 transition-colors duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-orange-200 transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                    <p>Email: <a href="mailto:info@sepokatstore.com" className="hover:text-orange-200 transition-colors duration-300">info@sepokatstore.com</a></p>
                    <p>Phone: <a href="tel:+621234567890" className="hover:text-orange-200 transition-colors duration-300">+62 123 4567 890</a></p>
                    <p>Address: Jl. Sepatu No. 123, Jakarta, Indonesia</p>
                </div>
            </div>

            <div className="mt-8 border-t border-orange-400 pt-4 text-center">
                <p className="text-orange-200">&copy; {new Date().getFullYear()} Sepokat Store. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {/* Social Media Icons */}
                    {/* (Add your social media icons here) */}
                </div>
            </div>
        </footer>
    );
}
