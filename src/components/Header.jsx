import { Link } from 'react-router-dom';

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  return (
    <header style={{ background: '#0f172a', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Link to="/" style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
        🛍️ TechStore
      </Link>

      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500' }}>Trang chủ</Link>
        <Link to="/products" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500' }}>Sản phẩm</Link>
        <Link to="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500' }}>Liên hệ</Link>
        
        {/* Link Yêu thích */}
        <Link to="/wishlist" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500', position: 'relative' }}>
          ❤️ Yêu thích {wishlistCount > 0 && <span style={{ background: '#ef4444', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', marginLeft: '4px' }}>{wishlistCount}</span>}
        </Link>

        {/* Link Giỏ hàng */}
        <Link to="/cart" style={{ background: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          🛒 Giỏ hàng ({cartCount})
        </Link>
        <Link to="/orders" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '500' }}>
  📦 Đơn hàng
</Link>
      </nav>
    </header>
  );
}