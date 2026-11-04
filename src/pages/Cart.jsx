import { useNavigate } from 'react-router-dom';

export default function Cart({ cartItems = [], onRemove, onIncrease, onDecrease }) {
  const navigate = useNavigate();
  // ... các hàm parsePrice, totalPrice giữ nguyên

  return (
    // ... phần giao diện giỏ hàng
    // Tại nút thanh toán, đổi onClick thành:
    <button 
      onClick={() => navigate('/checkout')}
      style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
    >
      Tiến hành thanh toán
    </button>
  );
}