const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

let kullanicilar = [
    { id: 1, ad: 'Mehmet', email: 'mehmet@example.com' },
    { id: 2, ad: 'Ayşe', email: 'ayse@example.com' },
];

// Tüm kullanıcıları listeleme
app.get('/api/kullanicilar', (req, res) => {
    res.json(kullanicilar);
});

// Yeni kullanıcı ekleme
app.post('/api/kullanicilar', (req, res) => {
    const { ad, email } = req.body;
    const yeniKullanici = {
        id: kullanicilar.length + 1,
        ad,
        email,
    };

    kullanicilar.push(yeniKullanici);
    res.status(201).json(yeniKullanici);
});

app.delete('/api/kullanicilar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    kullanicilar = kullanicilar.filter(kullanici => kullanici.id !== id);

    res.json({ mesaj: `${id} numaralı kullanıcı silindi` });
});


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
