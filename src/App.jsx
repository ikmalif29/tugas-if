import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Product from "./Components/Product";


function App() {
  const products = [
    {
      id: 1,
      nama: "Sepatu Sneakers A",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 750000,
      deskripsi: "Sepatu sneakers nyaman dengan desain stylish, cocok untuk aktivitas sehari-hari.",
      stok: 10,
      kategori: "Sneakers"
    },
    {
      id: 2,
      nama: "Sepatu Formal B",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 1200000,
      deskripsi: "Sepatu formal berkualitas tinggi, cocok untuk acara-acara resmi.",
      stok: 5,
      kategori: "Formal"
    },
    {
      id: 3,
      nama: "Sepatu Running C",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 650000,
      deskripsi: "Sepatu lari ringan dan tahan lama, dirancang untuk kenyamanan saat berolahraga.",
      stok: 15,
      kategori: "Running"
    },
    {
      id: 4,
      nama: "Sepatu Boots D",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 950000,
      deskripsi: "Sepatu boots kuat dan tangguh, cocok untuk aktivitas outdoor.",
      stok: 8,
      kategori: "Boots"
    },
    {
      id: 5,
      nama: "Sepatu Sandal E",
      foto: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-sneakers-running-shoes-bright-colors-png-image_7078169.png",
      harga: 300000,
      deskripsi: "Sepatu sandal ringan dan nyaman, ideal untuk digunakan sehari-hari.",
      stok: 20,
      kategori: "Sandal"
    }
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Optionally, save the theme preference in localStorage
    // localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <div className={isDarkMode ? 'dark' : ''}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Product products={products} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  )
}

export default App
