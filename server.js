const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(__dirname));

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 다른 페이지들
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'cart.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다!`);
    console.log(`📱 메인 페이지: http://localhost:${PORT}`);
    console.log(`🛍️ 제품 페이지: http://localhost:${PORT}/products`);
    console.log(`🏢 회사소개: http://localhost:${PORT}/about`);
    console.log(`📞 고객센터: http://localhost:${PORT}/contact`);
    console.log(`🛒 장바구니: http://localhost:${PORT}/cart`);
    console.log(`\n💡 파일을 수정하면 브라우저에서 새로고침하면 됩니다!`);
}); 