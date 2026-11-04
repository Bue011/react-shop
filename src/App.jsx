import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State quản lý thông báo nổi
  const [toastMessage, setToastMessage] = useState('');

  // Hàm hiển thị thông báo tự động ẩn sau 2 giây
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
        
        {/* Toast Notification nổi ở góc phải màn hình */}
        {toastMessage && (
          <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#0f172a', color: 'white', padding: '12px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000, fontWeight: 'bold', animation: 'fadeIn 0.3s' }}>
            {toastMessage}
          </div>
        )}

        <Header cartCount={totalCartCount} />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  onRemove={removeFromCart} 
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onClearCart={clearCart}
                  onShowToast={showToast}
                />
              } 
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;