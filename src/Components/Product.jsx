    import { Search } from "lucide-react";
    import { MessageCircle, Info, Heart } from "lucide-react";
    // eslint-disable-next-line no-unused-vars
    import { useState, useEffect } from "react";

    /* eslint-disable react/prop-types */
    export default function Product({ products }) {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalContent, setModalContent] = useState({});
        const [likedProducts, setLikedProducts] = useState({});
        const [commentModal, setCommentModal] = useState(false);
        const [comments, setComments] = useState({});
        const [currentComment, setCurrentComment] = useState("");
        const [activeProduct, setActiveProduct] = useState(null);
        const [cartCount, setCartCount] = useState(0); // State to track the cart count
        const [search, setSearch] = useState('');


        // Load cart data from localStorage
        const loadCart = () => JSON.parse(localStorage.getItem("cart")) || [];

        // Add or update product in cart
        const addToCart = (product) => {
            const cart = loadCart();
            const existingProduct = cart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Increase quantity if product already exists
                existingProduct.quantity += 1;
            } else {
                // Add new product with quantity 1
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // Update cart count
            openModal({ message: `${product.nama} berhasil ditambahkan ke keranjang` });
        };

        const openModal = (content) => {
            setModalContent(content);
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setIsModalOpen(false);
            setCommentModal(false);
        };

        const handleLikeClick = (productId, productName) => {
            setLikedProducts((prev) => ({
                ...prev,
                [productId]: !prev[productId],
            }));
            const message = !likedProducts[productId]
                ? `Kamu menyukai produk ini: ${productName}`
                : `Kamu tidak lagi menyukai produk ini: ${productName}`;
            openModal({ message });
        };

        const openCommentModal = (productId) => {
            setActiveProduct(productId);
            setCurrentComment("");
            setCommentModal(true);
        };

        const handleCommentSubmit = () => {
            setComments((prev) => ({
                ...prev,
                [activeProduct]: [...(prev[activeProduct] || []), currentComment],
            }));
            setCommentModal(false);
            openModal({ message: `Komentar berhasil ditambahkan: "${currentComment}"` });
        };

        // Load cart count on initial render
        useEffect(() => {
            const cart = loadCart();
            setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
        }, []);

        const filterProducts = products.filter((p) =>
            p.nama.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <main>
                <div className="w-full flex justify-center items-center gap-5 my-8 animate-fadeIn">
                    <div className="group p-2 rounded-full bg-orange-400 hover:bg-orange-500 transition-all duration-300 ease-in-out shadow-lg cursor-pointer">
                        <Search className="w-8 h-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <input
                        type="text"
                        className="w-96 border-2 border-gray-300 focus:border-orange-500 rounded-full text-center py-2 px-4 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl focus:ring-2 focus:ring-orange-400 outline-none bg-white/80 backdrop-blur-lg placeholder-gray-500 placeholder-opacity-75"
                        placeholder="Cari produk yang kamu mau..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {filterProducts.map((p) => (
                        <div
                            key={p.id}
                            className="group bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer border border-gray-700"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={p.foto}
                                    alt={p.nama}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-500">
                                    {p.nama}
                                </h3>
                                <p className="text-orange-400 text-lg font-semibold">
                                    Rp {p.harga.toLocaleString()}
                                </p>
                                <p className="text-gray-300 my-2">{p.deskripsi}</p>
                                <p className="text-sm text-gray-400">
                                    <strong>Stok:</strong> {p.stok}
                                </p>
                                <p className="text-sm text-gray-400">
                                    <strong>Kategori:</strong> {p.kategori}
                                </p>
                                <button
                                    onClick={() => addToCart(p)}
                                    className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                >
                                    ADD TO CART
                                </button>
                                <div className="flex w-full justify-around my-4">
                                    <Heart
                                        className={`text-2xl ${likedProducts[p.id]
                                            ? "text-red-500 fill-current"
                                            : "text-gray-400 hover:text-orange-500"
                                            } transition-colors duration-300`}
                                        onClick={() => handleLikeClick(p.id, p.nama)}
                                    />
                                    <Info
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                        onClick={() => openModal(p)}
                                    />
                                    <MessageCircle
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                        onClick={() => openCommentModal(p.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto relative">
                                {modalContent.foto && (
                                    <img
                                        src={modalContent.foto}
                                        alt={modalContent.nama}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                )}
                                <h2 className="text-2xl font-bold text-orange-500 mb-2">
                                    {modalContent.nama || "Informasi Produk"}
                                </h2>
                                {modalContent.message ? (
                                    <p className="text-gray-300">{modalContent.message}</p>
                                ) : (
                                    <>
                                        <p className="text-orange-400 text-lg font-semibold">
                                            Rp {modalContent.harga?.toLocaleString()}
                                        </p>
                                        <p className="text-gray-300 my-2">{modalContent.deskripsi}</p>
                                        <p className="text-sm text-gray-400">
                                            <strong>Stok:</strong> {modalContent.stok}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            <strong>Kategori:</strong> {modalContent.kategori}
                                        </p>
                                        <h3 className="text-lg text-white mt-4">Komentar:</h3>
                                        <ul className="text-gray-400">
                                            {(comments[modalContent.id] || []).map((comment, index) => (
                                                <li key={index}>- {comment}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-orange-500"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}

                    {commentModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-orange-500 mb-4">Tambah Komentar</h2>
                                <textarea
                                    value={currentComment}
                                    onChange={(e) => setCurrentComment(e.target.value)}
                                    placeholder="Tulis komentar kamu di sini..."
                                    className="w-full p-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                                    rows="4"
                                ></textarea>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        onClick={handleCommentSubmit}
                                        className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        Tambah Komentar
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                                    >
                                        Batal
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        );
    }
