const app = require('./app');  // Import ứng dụng Express từ app.js

const PORT = process.env.PORT || 3000;  // Cấu hình port từ biến môi trường hoặc mặc định 3000

// Khởi động server
app.listen(PORT, () => {
  console.log(`Hi dev!, i'm running on http://localhost:${PORT}`);
});
