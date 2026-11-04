import { useState } from 'react';

export default function Products({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default'); // Thêm state sắp xếp

  const allProducts = [
    { id: 1, name: "Tai nghe Bluetooth", price: "590.000đ", numericPrice: 590000, category: "Audio" },
    { id: 2, name: "Bàn phím Cơ", price: "1.200.000đ", numericPrice: 1200000, category: "Keyboard" },
    { id: 3, name: "Chuột Không Dây", price: "350.000đ", numericPrice: 350000, category: "Mouse" },
    { id: 4, name: "Loa Bluetooth Mini", price: "450.000đ", numericPrice: 450000, category: "Audio" },
    { id: 5, name: "Màn hình Gaming 24 inch", price: "3.500.000đ", numericPrice: 3500000, category: "Monitor" },
    { id: 6, name: "Lót chuột Gaming", price: "150.000đ", numericPrice: 150000, category: "Mouse" },
  ];

  // 1. Lọc theo từ khóa và danh mục
  let filteredProducts = allProducts.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 2. Sắp xếp theo giá
  if (sortBy === 'asc') {
    filteredProducts.sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (sortBy === 'desc') {
    filteredProducts.sort((a, b) => b.numericPrice - a.numericPrice);
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b', textAlign: 'center' }}>
        🛍️ Danh Sách Sản Phẩm
      </h2>

      {/* Thanh tìm kiếm, lọc danh mục và sắp xếp */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input 
          type="text"
          placeholder="🔍 Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px 15px', width: '240px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
        />

        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: 'white', color: '#334155', fontWeight: 'bold' }}
        >
          <option value="All">Tất cả danh mục</option>
          <option value="Audio">Âm thanh</option>
          <option value="Keyboard">Bàn phím</option>
          <option value="Mouse">Chuột & Phụ kiện</option>
          <option value="Monitor">Màn hình</option>
        </select>

        {/* Dropdown sắp xếp giá */}
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: 'white', color: '#334155', fontWeight: 'bold' }}
        >
          <option value="default">Sắp xếp theo giá</option>
          <option value="asc">Giá: Thấp đến cao</option>
          <option value="desc">Giá: Cao xuống thấp</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#64748b', padding: '40px', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          Không tìm thấy sản phẩm phù hợp!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredProducts.map((item) => (
            <div key={item.id} style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ background: '#f1f5f9', height: '120px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', marginBottom: '15px', fontWeight: 'bold' }}>
                {item.name}
              </div>
              <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e293b', marginBottom: '8px' }}>{item.name}</h3>
              <p style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '15px' }}>{item.price}</p>
              
              <button 
                onClick={() => onAddToCart(item)}
                style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}