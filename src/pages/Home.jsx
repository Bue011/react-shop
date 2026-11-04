import { Link } from 'react-router-dom';

export default function Home({ onAddToCart }) {
  const products = [
    { id: 1, name: "Tai nghe Bluetooth", price: "590.000đ", category: "Audio" },
    { id: 2, name: "Bàn phím Cơ", price: "1.200.000đ", category: "Keyboard" },
    { id: 3, name: "Chuột Không Dây", price: "350.000đ", category: "Mouse" },
  ];

  return (
    <div>
      {/* Banner Hero Section */}
      <div style={{ background: 'linear-gradient(to right, #0f172a, #2563eb)', color: 'white', padding: '60px 20px', textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '15px' }}>Chào mừng đến với TechStore</h1>
        <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.5' }}>
          Khám phá các thiết bị công nghệ đỉnh cao, phụ kiện chính hãng với mức giá tốt nhất thị trường.
        </p>
        <Link 
          to="/products" 
          style={{ background: 'white', color: '#2563eb', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          Xem tất cả sản phẩm
        </Link>
      </div>

      {/* Phần sản phẩm nổi bật */}
      <div style={{ padding: '0 20px 50px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b' }}>
          Sản Phẩm Nổi Bật
        </h2>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>
          Các sản phẩm công nghệ được yêu thích nhất tại cửa hàng
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {products.map((item) => (
            <div key={item.id} style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ background: '#f1f5f9', height: '120px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', marginBottom: '15px', fontWeight: 'bold' }}>
                {item.name}
              </div>
              
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e293b', marginBottom: '8px', cursor: 'pointer' }}>
                  {item.name}
                </h3>
              </Link>

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
      </div>
    </div>
  );
}