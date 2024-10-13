import { MessageCircle, Info, Heart } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Product({ products }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [isLiked, setIsLiked] = useState(false);

    const openModal = (product) => {
        setModalContent(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((p) => {

                const handleLikeClick = () => {
                    setIsLiked(!isLiked);
                    const message = !isLiked
                        ? `Kamu menyukai produk ini: ${p.nama}`
                        : `Kamu tidak lagi menyukai produk ini: ${p.nama}`;
                    openModal({ message });
                };

                const handleInfoClick = () => {
                    openModal(p);
                };

                return (
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
                            <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                ADD TO CART
                            </button>
                            <div className="flex w-full justify-around my-4">
                                <Heart
                                    className={`text-gray-400 ${
                                        isLiked ? "text-red-500" : "hover:text-orange-500"
                                    } transition-colors duration-300`}
                                    onClick={handleLikeClick}
                                />
                                <Info
                                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                    onClick={handleInfoClick}
                                />
                                <MessageCircle className="text-gray-400 hover:text-orange-500 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>
                );
            })}

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
                            </>
                        )}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-orange-500"
                        >
                            &times;
                        </button>
                        <button
                            onClick={closeModal}
                            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
