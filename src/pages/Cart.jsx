export default function Cart({ cartItems = [], onRemove, onIncrease, onDecrease, onClearCart }) {
  // Hàm chuyển đổi chuỗi giá tiền (VD: "590.000đ") thành số nguyên (590000)
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\D/g, '')) || 0;
  };

  // Tính tổng tiền toàn bộ giỏ hàng
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);

  // Định dạng lại số tiền thành dạng có chữ "đ" (VD: 1.180.000đ)
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    alert("🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại cửa hàng.");
    onClearCart();
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b' }}>
        🛒 Giỏ hàng của bạn
      </h2>

      {cartItems.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center', color: '#64748b' }}>
          Giỏ hàng hiện tại đang trống. Hãy quay lại trang chủ để chọn sản phẩm nhé!
        </div>
      ) : (
        <div>
          {/* Danh sách sản phẩm */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e293b', marginBottom: '5px' }}>{item.name}</h4>
                  <p style={{ color: '#2563eb', fontWeight: 'bold' }}>{item.price}</p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px' }}>
                    <button 
                      onClick={() => onDecrease(item.id)}
                      style={{ background: '#cbd5e1', border: 'none', width: '24px', height: '24px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      -
                    </button>
                    <span style={{ fontWeight: 'bold', color: '#334155', minWidth: '20px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => onIncrease(item.id)}
                      style={{ background: '#cbd5e1', border: 'none', width: '24px', height: '24px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemove(item.id)}
                    style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Phần tổng tiền và nút thanh toán */}
          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '4px' }}>Tổng cộng thanh toán:</p>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>
                {formatPrice(totalPrice)}
              </h3>
            </div>

            <button 
              onClick={handleCheckout}
              style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
            >
              Thanh toán ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}