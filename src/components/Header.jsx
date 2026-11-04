import { Link } from 'react-router-dom';

export default function Header({ cartCount }) {
  return (
    <header className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-400">My Website</h1>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400 transition">Trang chủ</Link>
        <Link to="/products" className="hover:text-blue-400 transition">Sản phẩm</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Liên hệ</Link>
        
        <Link to="/cart" className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition">
          🛒 Giỏ hàng
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{cartCount || 0}</span>
        </Link>
      </nav>
    </header>
  );
}