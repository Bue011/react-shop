import { Link } from 'react-router-dom';

export default function Wishlist({ wishlist = [], onToggleWishlist, onAddToCart }) {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b', textAlign: 'center' }}>
        ❤️ Sản Phẩm Yêu Thích Của Bạn
      </h2>

      {wishlist.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center', color: '#64748b' }}>
          Danh sách yêu thích đang trống. Hãy bấm biểu tượng trái tim trên các sản phẩm bạn quan tâm nhé!
          <div style={{ marginTop: '20px' }}>
            <Link to="/products" style={{ background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
              Khám phá sản phẩm
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {wishlist.map((item) => (
            <div key={item.id} style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center', position: 'relative' }}>
              
              {/* Nút bỏ thích */}
              <button 
                onClick={() => onToggleWishlist(item)}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                title="Bỏ thích"
              >
                ❤️
              </button>

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