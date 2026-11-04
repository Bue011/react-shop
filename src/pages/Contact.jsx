import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b', textAlign: 'center' }}>
        📞 Liên hệ với chúng tôi
      </h2>
      <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '30px' }}>
        Bạn có thắc mắc hay cần hỗ trợ? Hãy gửi tin nhắn cho chúng tôi nhé!
      </p>

      {submitted ? (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '30px', borderRadius: '12px', textAlign: 'center', color: '#166534' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Cảm ơn bạn đã liên hệ!</h3>
          <p>Chúng tôi đã nhận được thông tin và sẽ phản hồi sớm nhất có thể.</p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
            style={{ marginTop: '20px', background: '#16a34a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Gửi tin nhắn khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Họ và tên</label>
            <input 
              type="text" 
              placeholder="Nhập họ tên của bạn..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Email</label>
            <input 
              type="email" 
              placeholder="Nhập email của bạn..."
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Nội dung tin nhắn</label>
            <textarea 
              rows="4"
              placeholder="Nhập nội dung bạn cần hỗ trợ..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ width: '100%', padding: '10px 15px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit"
            style={{ background: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
          >
            Gửi liên hệ
          </button>
        </form>
      )}
    </div>
  );
}