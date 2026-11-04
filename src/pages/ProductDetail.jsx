import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const productsList = [
    { id: "1", name: "Tai nghe Bluetooth", price: "590.000đ", desc: "Tai nghe chống ồn chủ động, pin trâu lên đến 30 giờ, âm bass cực mạnh." },
    { id: "2", name: "Bàn phím Cơ", price: "1.200.000đ", desc: "Bàn phím cơ RGB layout 75%, switch gõ êm tay, hỗ trợ kết nối 3 chế độ." },
    { id: "3", name: "Chuột Không Dây", price: "350.000đ", desc: "Thiết kế công thái học ôm tay, siêu nhẹ, pin sạc type-C tiện lợi." },
  ];

  const product = productsList.find((p) => p.id === id);

  // State quản lý danh sách đánh giá & form nhập
  const [reviews, setReviews] = useState([
    { id: 1, user: "Nguyễn Văn A", rating: 5, comment: "Sản phẩm xài cực kỳ êm, giao hàng nhanh!" },
    { id: 2, user: "Trần Thị B", rating: 4, comment: "Đóng gói cẩn thận, chất lượng tốt trong tầm giá." }
  ]);
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!username || !comment) {
      alert("Vui lòng nhập tên và nội dung nhận xét!");
      return;
    }
    const newReview = {
      id: Date.now(),
      user: username,
      rating: Number(rating),
      comment: comment
    };
    setReviews([newReview, ...reviews]);
    setUsername('');
    setComment('');
  };

  if (!product) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
        <h2>Không tìm thấy sản phẩm!</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
      
      {/* Khung chi tiết sản phẩm */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
        <div style={{ background: '#f1f5f9', height: '250px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 'bold' }}>
          {product.name}
        </div>

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

      {/* Phần Đánh giá & Nhận xét */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>
          ⭐ Đánh giá sản phẩm ({reviews.length})
        </h3>

        {/* Form gửi đánh giá */}
        <form onSubmit={handleAddReview} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="Tên của bạn..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }}
            />
            <select 
              value={rating} 
              onChange={(e) => setRating(e.target.value)}
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', background: 'white', fontWeight: 'bold' }}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
              <option value="4">⭐⭐⭐⭐ (4/5)</option>
              <option value="3">⭐⭐⭐ (3/5)</option>
              <option value="2">⭐⭐ (2/5)</option>
              <option value="1">⭐ (1/5)</option>
            </select>
          </div>

          <textarea 
            rows="3"
            placeholder="Viết nhận xét của bạn về sản phẩm..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}
          />

          <button 
            type="submit"
            style={{ background: '#0f172a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', alignSelf: 'flex-start' }}
          >
            Gửi đánh giá
          </button>
        </form>

        {/* Danh sách bình luận */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {reviews.map((rev) => (
            <div key={rev.id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontWeight: 'bold', color: '#334155' }}>{rev.user}</span>
                <span style={{ color: '#eab308' }}>{"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}