import { useState, useEffect } from "react";

export default function CartProduct() {
    const [cartProducts, setCartProducts] = useState([]);

    // Load cart data from localStorage when the component mounts
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartProducts(storedCart);
    }, []);

    if (cartProducts.length === 0) {
        return (
            <div className="w-full flex h-screen items-center justify-center">
                <h1 className="text-center font-bold text-4xl">Your Cart is Empty</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center font-bold text-4xl mb-8">Your Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800"
                    >
                        <img
                            src={product.foto}
                            alt={product.nama}
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{product.nama}</h2>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            ${product.harga} x {product.quantity}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Total: ${product.harga * product.quantity}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
