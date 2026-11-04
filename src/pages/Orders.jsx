import { Link } from 'react-router-dom';

export default function Orders({ orders = [] }) {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#1e293b', textAlign: 'center' }}>
        📦 Lịch Sử Đơn Hàng
      </h2>

      {orders.length === 0 ? (
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center', color: '#64748b' }}>
          Bạn chưa có đơn hàng nào.
          <div style={{ marginTop: '20px' }}>
            <Link to="/products" style={{ background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
              Mua sắm ngay
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map((order) => (
            <div key={order.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px', marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Mã đơn: #{order.id}</span>
                <span style={{ color: '#64748b', fontSize: '14px' }}>{order.date}</span>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '4px 0', color: '#334155' }}><strong>Người nhận:</strong> {order.customer.fullName} ({order.customer.phone})</p>
                <p style={{ margin: '4px 0', color: '#334155' }}><strong>Địa chỉ:</strong> {order.customer.address}</p>
                <p style={{ margin: '4px 0', color: '#334155' }}><strong>Thanh toán:</strong> {order.customer.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản'}</p>
              </div>

              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
                {order.items.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>{item.name} x {item.quantity}</span>
                    <span style={{ fontWeight: 'bold' }}>{item.price}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#16a34a', fontWeight: 'bold', background: '#dcfce7', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
                  Đang xử lý
                </span>
                <div>
                  <span style={{ color: '#64748b', marginRight: '8px' }}>Tổng tiền:</span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>{order.totalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}