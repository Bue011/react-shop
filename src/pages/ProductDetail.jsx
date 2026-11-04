import { useParams } from 'react-router-dom';

export default function ProductDetail({ onAddToCart }) {
  // Lấy id sản phẩm từ đường dẫn URL
  const { id } = useParams();

  // Dữ liệu mẫu (thực tế sẽ gọi từ API hoặc cơ sở dữ liệu)
  const productsList = [
    { id: "1", name: "Tai nghe Bluetooth", price: "590.000đ", desc: "Tai nghe chống ồn chủ động, pin trâu lên đến 30 giờ, âm bass cực mạnh." },
    { id: "2", name: "Bàn phím Cơ", price: "1.200.000đ", desc: "Bàn phím cơ RGB layout 75%, switch gõ êm tay, hỗ trợ kết nối 3 chế độ." },
    { id: "3", name: "Chuột Không Dây", price: "350.000đ", desc: "Thiết kế công thái học ôm tay, siêu nhẹ, pin sạc type-C tiện lợi." },
  ];

  // Tìm sản phẩm khớp với id trên URL
  const product = productsList.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
        <h2>Không tìm thấy sản phẩm!</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center', border: '1px solid #e2e8f0' }}>
        
        {/* Khung ảnh lớn */}
        <div style={{ background: '#f1f5f9', height: '250px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 'bold' }}>
          {product.name}
        </div>

        {/* Thông tin chi tiết */}
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>{product.name}</h2>
          <p style={{ color: '#2563eb', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>{product.price}</p>
          <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>{product.desc}</p>
          
          <button 
            onClick={() => onAddToCart(product)}
            style={{ background: '#2563eb', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>

      </div>
    </div>
  );
}