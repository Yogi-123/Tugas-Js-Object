let buah = [
    {
        nama : "Apel",
        namaLatin : "Malus Domestica",
        warna : "Merah",
        tipeBiji : "Dikotil",
        gambar : "./gambar-buah/apel.jpg"
    
    },
    {
        nama : "Jambu Air",
        namaLatin : "Syzygium Aqueum",
        warna : "Merah",
        tipeBiji : "Dikotil",
        gambar : "./gambar-buah/jambu-air.jpg"
    
    },
    {
        nama : "Jambu Biji",
        namaLatin : "Psidium Guajava",
        warna : "Hijau",
        tipeBiji : "Dikotil",
        gambar : "./gambar-buah/jambu-biji.jpg"
    
    },
    {
        nama : "Jeruk",
        namaLatin : "Citrus",
        warna : "Kuning",
        tipeBiji : "Dikotil",
        gambar : "./gambar-buah/jeruk.jpg"
    
    },
    {
        nama : "Kelapa",
        namaLatin : "Cocos Nucivera",
        warna : "Hijau",
        tipeBiji : "Monokotil",
        gambar : "./gambar-buah/kelapa.jpg"
    
    },
    {
        nama : "Melon",
        namaLatin : "Cucumis Melo",
        warna : "Hijau",
        tipeBiji : "Monokotil",
        gambar : "./gambar-buah/melon.jpg"
    
    },
    {
        nama : "Nanas",
        namaLatin : "Ananas Comosus",
        warna : "Kuning",
        tipeBiji : "Monokotil",
        gambar : "./gambar-buah/nanas.jpg"
    
    },
    {
        nama : "Pisang",
        namaLatin : "Musa",
        warna : "Kuning",
        tipeBiji : "Monokotil",
        gambar : "./gambar-buah/pisang.jpg"
    
    }

]
let fruit = document.getElementById("fruit");

let display = () => {
    console.log("tes");
    buah.forEach((item) => {
        let card = document.createElement("div");
        console.log("tes dalam buah");
        card.innerHTML = `
        <div class="kolom-satuan" class="card border-info mb-3" style="max-width: 18rem;">
              <div class="card-header">
                <img class="frame-gambar" src=${item.gambar} alt="">
              </div>
              <div class="card-body text-info">
                <h5 class="card-title">${item.nama}</h5>
                <p class="card-text">
                  <ul>
                    <li>Nama Latin :${item.namaLatin}</li>
                    <li>Warna :${item.warna}</li>
                    <li>Tipe Biji :${item.tipeBiji}</li>
                  </ul>
                </p>
              </div>
            </div>
            `;
            fruit.appendChild(card);
    });
};

display();