import { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Product from "./Components/Product";
import CartProduct from "./Components/CartProduct";

function App() {
  const products = [
    {
      id: 1,
      nama: "Sepatu Sneakers A",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 750000,
      deskripsi: "Sepatu sneakers nyaman dengan desain stylish, cocok untuk aktivitas sehari-hari.",
      stok: 10,
      kategori: "Sneakers",
    },
    {
      id: 2,
      nama: "Sepatu Formal B",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 1200000,
      deskripsi: "Sepatu formal berkualitas tinggi, cocok untuk acara-acara resmi.",
      stok: 5,
      kategori: "Formal",
    },
    {
      id: 3,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 4,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 5,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 6,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 7,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 8,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 9,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 10,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 11,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 12,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 13,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 14,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
    {
      id: 15,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter> 
      <div className={isDarkMode ? "dark" : ""}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Product products={products} />} />
          <Route path="/cart" element={<CartProduct />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
