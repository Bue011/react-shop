import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders'; // Import trang Orders mới

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // State quản lý danh sách đơn hàng đã đặt
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Hàm thêm đơn hàng mới
  const addOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        showToast(`Đã xóa "${product.name}" khỏi mục yêu thích!`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Đã thêm "${product.name}" vào mục yêu thích ❤️`);
        return [...prev, product];
      }
    });
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng! 🛒`);
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    showToast("Đã xóa sản phẩm khỏi giỏ hàng!");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        
        {toastMessage && (
          <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#0f172a', color: 'white', padding: '12px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000, fontWeight: 'bold' }}>
            {toastMessage}
          </div>
        )}

        <Header cartCount={totalCartCount} wishlistCount={wishlist.length} />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={removeFromCart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onClearCart={clearCart} onAddOrder={addOrder} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onToggleWishlist={toggleWishlist} onAddToCart={addToCart} />} />
            <Route path="/orders" element={<Orders orders={orders} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;