export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '24px 20px', textAlign: 'center', borderTop: '1px solid #1e293b', marginTop: 'auto' }}>
      <p style={{ marginBottom: '10px' }}>© 2026 My Website. Tất cả quyền được bảo lưu.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Bảo mật</a>
        <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Điều khoản</a>
        <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Liên hệ</a>
      </div>
    </footer>
  );
}