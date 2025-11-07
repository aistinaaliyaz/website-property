const daftarProperti = [
    {
        id: 1,
        nama: "Rumah Minimalis Modern",
        lokasi: "Jakarta Selatan",
        harga: "Rp 1.500.000.000",
        luas: "120 m²",
        kamar: 3,
        kamarMandi: 2,
        deskripsi: "Rumah baru dengan desain minimalis modern, berlokasi strategis dekat pusat perbelanjaan dan akses tol.",
        image: "desainrumah.jpg"
    },
    {
        id: 2,
        nama: "Rumah Minimalis",
        lokasi: "Bandung",
        harga: "Rp 850.000.000",
        luas: "60 m²",
        kamar: 2,
        kamarMandi: 1,
        deskripsi: "Rumah minimalis, berlokasi strategis dekat dengan perkotaan.",
        image: "rumah2.jpeg"
    },
    {
        id: 3,
        nama: "Villa Asri Pegunungan",
        lokasi: "Bogor",
        harga: "Rp 2.200.000.000",
        luas: "250 m²",
        kamar: 4,
        kamarMandi: 3,
        deskripsi: "Villa dengan pemandangan indah, udara sejuk, cocok untuk liburan atau tempat tinggal keluarga.",
        image: "villa2.jpg"
    },
    {
        id: 4,
        nama: "Rumah Minimalis",
        lokasi: "Karawang Barat",
        harga: "Rp 980.000.000",
        luas: "75 m²",
        kamar: 3,
        kamarMandi: 2,
        deskripsi: "Townhouse modern dalam cluster aman dengan fasilitas taman bermain. Akses mudah ke jalan tol.",
        image: "rumahmodern1.png"
    },
    {
        id: 5,
        nama: "Rumah Modern",
        lokasi: "Bandung Kota",
        harga: "Rp 700.000.000",
        luas: "35 m²",
        kamar: 2,
        kamarMandi: 2,
        deskripsi: "Rumah modern di jantung kota, dekat perkantoran dan mall dll. Cocok untuk profesional muda.",
        image: "modern1.jpg" 
    }
];

const propertiListContainer = document.getElementById('daftar-properti');
const propertiDetailContainer = document.getElementById('detail-properti');

// Deklarasi container untuk Tentang Kami dan Kontak
const tentangKamiContainer = document.getElementById('tentang-kami');
const kontakContainer = document.getElementById('kontak');

// Array dari semua container konten utama yang dapat di-toggle
const semuaKonten = [
    propertiListContainer, 
    tentangKamiContainer, 
    kontakContainer
];
// Mengatur tampilan section yang aktif
function tampilkanSection(idTarget) {
    const sectionTarget = document.getElementById(idTarget);
    // 1. Sembunyikan semua section utama
    semuaKonten.forEach(section => {
        if (section) {
            section.classList.add('hidden');
        }
    });

    // 2. Sembunyikan Detail Properti
    propertiDetailContainer.classList.add('hidden');

    // 3. Tampilkan section yang dituju
    if (sectionTarget) {
        sectionTarget.classList.remove('hidden');
    }

    // Jika yang ditampilkan adalah Daftar Properti, buat ulang card-nya
    if (idTarget === 'daftar-properti') {
        buatCardProperti();
    }
}

// Fungsi untuk membuat card properti
function buatCardProperti() {
    propertiListContainer.innerHTML = '<h2>Daftar Properti Terbaru</h2>';
    daftarProperti.forEach(properti => {
        const card = document.createElement('div');
        card.classList.add('properti-card');
        card.setAttribute('data-id', properti.id);
        
        card.innerHTML = `
            <img src="${properti.image}" alt="${properti.nama}">
            <div class="card-body">
                <h3>${properti.nama}</h3>
                <p>📍 ${properti.lokasi}</p>
                <p>📐 ${properti.luas}</p>
                <p class="harga">${properti.harga}</p>
            </div>
        `;
        
        card.addEventListener('click', () => tampilkanDetail(properti.id));
        propertiListContainer.appendChild(card);
    });
}

// Fungsi untuk menampilkan daftar properti (dipanggil saat tombol 'Kembali' atau 'Properti' diklik)
function tampilkanDaftarProperti() {
    tampilkanSection('daftar-properti'); 
}

// Fungsi untuk menampilkan detail properti
function tampilkanDetail(propertiId) {
    const properti = daftarProperti.find(p => p.id === propertiId);
    
    if (properti) {
        propertiDetailContainer.innerHTML = `
            <button class="back-button" onclick="tampilkanDaftarProperti()">← Kembali ke Daftar</button>
            <h2>${properti.nama}</h2>
            <img src="${properti.image}" alt="${properti.nama}">
            <p><strong>Lokasi:</strong> ${properti.lokasi}</p>
            <p><strong>Harga:</strong> <span class="harga">${properti.harga}</span></p>
            <p><strong>Luas Bangunan/Tanah:</strong> ${properti.luas}</p>
            <p><strong>Kamar Tidur:</strong> ${properti.kamar}</p>
            <p><strong>Kamar Mandi:</strong> ${properti.kamarMandi}</p>
            <p><strong>Deskripsi:</strong> ${properti.deskripsi}</p>
            <p><a href="#" onclick="tampilkanSection('kontak')" style="color: #004d40; font-weight: bold;">Hubungi Kami untuk Info Lebih Lanjut!</a></p>
        `;
        
        // Sembunyikan semua konten utama dan tampilkan Detail
        semuaKonten.forEach(section => section.classList.add('hidden'));
        propertiDetailContainer.classList.remove('hidden');
    }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan hanya Daftar Properti saat pertama kali dimuat
    tampilkanSection('daftar-properti'); 
    
    // Logika submit form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            alert("Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.");
            this.reset();
        });
    }
});