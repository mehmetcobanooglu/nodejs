function listeleKullanicilar() {
    fetch('http://localhost:3000/api/kullanicilar')
        .then(response => response.json())
        .then(data => {
            const liste = document.getElementById('kullaniciListesi');
            liste.innerHTML = '';  // Listeyi temizle
            data.forEach(kullanici => {
                const li = document.createElement('li');
                li.textContent = `
                ID: ${kullanici.id}, 
                Ad: ${kullanici.ad}, 
                E-posta: ${kullanici.email}`;
                liste.appendChild(li);
            });
        });
}
document.getElementById('kullaniciForm').addEventListener('submit', function(event) {
            

            const ad = document.getElementById('ad').value;
            const email = document.getElementById('email').value;

            fetch('http://localhost:3000/api/kullanicilar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ad, email })
            })
            .then(response => response.json())
            .then(data => {
                alert(`${data.ad} Adli Kullanici Eklendi`);
                listeleKullanicilar();  // Listeyi güncelle
            });
        });

        
    document.getElementById('silButton').addEventListener('click', function() {
            const kullaniciId = document.getElementById('kullaniciId').value;
            fetch(`http://localhost:3000/api/kullanicilar/${kullaniciId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                alert(`${kullaniciId}  Numarali id Silindi`);
                listeleKullanicilar();  
                

            });
        });

       
        window.onload = listeleKullanicilar;
