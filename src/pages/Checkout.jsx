import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ cartItems = [], onClearCart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });

  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\D/g, '')) || 0;
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  // Cập nhật hàm handleOrderSubmit bên trong Checkout.jsx
const handleOrderSubmit = (e) => {
  e.preventDefault();
  if (!formData.fullName || !formData.phone || !formData.address) {
    alert("Vui lòng điền đầy đủ thông tin giao hàng!");
    return;
  }

  const newOrder = {
    id: Date.now().toString().slice(-6),
    date: new Date().toLocaleString('vi-VN'),
    customer: formData,
    items: cartItems,
    totalPrice: formatPrice(totalPrice)
  };

  if (onAddOrder) {
    onAddOrder(newOrder);
  }

  alert(`🎉 Đặt hàng thành công!\nMã đơn của bạn là #${newOrder.id}`);
  onClearCart();
  navigate('/orders'); // Chuyển sang trang xem đơn hàng đã đặt
};

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto', minHeight: '70vh' }}>
        <h2>Giỏ hàng trống, không thể thanh toán!</h2>
        <button 
          onClick={() => navigate('/')}
          style={{ marginTop: '20px', background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '700px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b', textAlign: 'center' }}>
        🚚 Thông Tin Thanh Toán
      </h2>

      <form onSubmit={handleOrderSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Họ và tên người nhận</label>
          <input 
            type="text" 
            placeholder="Ví dụ: Nguyễn Văn A"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Số điện thoại</label>
          <input 
            type="text" 
            placeholder="Ví dụ: 0912345678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Địa chỉ nhận hàng</label>
          <textarea 
            rows="3"
            placeholder="Ví dụ: Số 123, Đường ABC, Phường XYZ, Hà Nội"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Phương thức thanh toán</label>
          <select 
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: 'white' }}
          >
            <option value="cod">Thanh toán khi nhận hàng (COD)</option>
            <option value="bank">Chuyển khoản ngân hàng</option>
          </select>
        </div>

        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: '#64748b' }}>Tổng tiền thanh toán:</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>{formatPrice(totalPrice)}</span>
        </div>

        <button 
          type="submit"
          style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Xác nhận đặt hàng
        </button>

      </form>
    </div>
  );
}