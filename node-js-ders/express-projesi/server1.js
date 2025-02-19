const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

let gorevler = [
    {
        id: 1,
        ad: 'read a book',
    },
    {
        id: 2,
        ad: 'listen to music',
    },
];

// Tüm görevleri listeleme
app.get('/api/gorevler', (req, res) => {
    console.log("GET /api/gorevler çağrıldı.");
    res.send(gorevler);
});

// Yeni görev ekleme
app.post('/api/gorevler', (req, res) => {
    console.log("GET /api/gorevler çağrıldı.");
    const addTask = {
        id: gorevler.length + 1,
        ad: req.body.ad,
    };

    gorevler.push(addTask);
    res.status(201).json(addTask);
});

// Görev silme
app.delete('/api/gorevler/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // Silinmek istenen ID'ye sahip görevi filtrele
    gorevler = gorevler.filter((gorev) => gorev.id !== id);

    res.json({ mesaj: `${id} Silindi` });
});

// Sunucuyu çalıştır


app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} Portunda Çalışıyor.`);
});
