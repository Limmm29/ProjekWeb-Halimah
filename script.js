let nyawa = 3;
let waktu = 60;
let timerGame;
let timerTuduh;

let buktiDitemukan = [];
let tersangkaDipilih = "";
let tersangkaSudahDipilih = [];

const pelakuBenar = "Milo";

// Pindah halaman
function tampilkanHalaman(idHalaman) {
    document.querySelectorAll(".halaman").forEach(function(halaman) {
        halaman.classList.remove("aktif");
    });

    document.getElementById(idHalaman).classList.add("aktif");
    window.scrollTo(0, 0);
}

// Mulai permainan
function mulaiGame() {
    nyawa = 3;
    waktu = 60;
    buktiDitemukan = [];
    tersangkaDipilih = "";
    tersangkaSudahDipilih = [];

    clearInterval(timerGame);
    clearInterval(timerTuduh);

    document.querySelectorAll(".pilihan-pelaku button").forEach(function(button) {
        button.disabled = false;
        button.classList.remove("sudah-dipilih");
    });

    document.getElementById("nyawa").textContent = "❤️ ❤️ ❤️";

    document.getElementById("nyawaTuduh").innerHTML = `
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
    `;

    document.getElementById("timer").textContent = waktu;
    document.getElementById("timerTuduh").textContent = waktu;

    document.getElementById("panelPenyelidikan").innerHTML = "";

    document.getElementById("daftarBukti").innerHTML = `
        <div class="bukti-kosong">
            🔒 Buku bukti masih kosong...
            <br>
            Ayo mulai cari petunjuk! 🔎
        </div>
    `;

    document.getElementById("hasilTuduhan").innerHTML = "";

    tampilkanHalaman("halamanInvestigasi");
    mulaiTimer();
}

// Data tersangka
let dataTersangka = {
    Kochi: {
        foto: "kochi.jpg",
        nomor: "TERSANGKA #01",
        sifat: "Kucing yang suka main-main di sekitar rumah.",
        alibi: "Kochi ngaku lagi tidur santai di ruang tamu.",
        bukti: "Ada jejak kaki misterius di dekat ruang tamu 👀"
    },

    Milo: {
        foto: "milo.jpg",
        nomor: "TERSANGKA #02",
        sifat: "Kucing yang sering nongkrong di sekitar dapur.",
        alibi: "Milo bilang dirinya lagi di halaman.",
        bukti: "Ada bekas sisik ikan di dekat tempat Milo bermain. Hmm... mencurigakan 👀"
    },

    Mimi: {
        foto: "mimi.jpg",
        nomor: "TERSANGKA #03",
        sifat: "Kucing yang lebih sering rebahan di kamar.",
        alibi: "Mimi ngaku lagi tidur di kamar.",
        bukti: "Belum ada bukti yang benar-benar mengarah ke Mimi."
    },

    Chino: {
        foto: "chino.jpg",
        nomor: "TERSANGKA #04",
        sifat: "Kucing yang hobi keliling rumah.",
        alibi: "Chino bilang lagi nongkrong di teras.",
        bukti: "Ada jejak kaki yang mengarah ke teras. Wah, menarik nih 👀"
    }
};

function pilihTersangka(nama) {
    tersangkaDipilih = nama;

    let kucing = dataTersangka[nama];
    let sudahTerbuka = buktiDitemukan.includes(nama);

    document.getElementById("panelPenyelidikan").innerHTML = `
        <div class="isi-panel">
            <div class="foto-panel">
                <img src="${kucing.foto}" alt="${nama}">
            </div>

            <div class="info-panel">
                <span class="nomor">${kucing.nomor}</span>

                <h3>${nama}</h3>

                <p><strong>🐾 Sifat:</strong><br>${kucing.sifat}</p>
                <p><strong>💬 Alibi:</strong><br>${kucing.alibi}</p>

                <div class="area-kunci">
                    <div
                        class="kunci-box"
                        ondragover="event.preventDefault()"
                        ondrop="bukaPetunjuk(event)">
                        <div class="gembok">
                            ${sudahTerbuka ? "🔓" : "🔒"}
                        </div>

                        <h4>${sudahTerbuka
                                ? "PETUNJUK SUDAH TERBUKA! 👀"
                                : "PETUNJUK TERKUNCI"}
                        </h4>

                        ${sudahTerbuka
                            ? `<div class="bukti-tersembunyi">
                                    🔎 <strong>Petunjuk:</strong><br>
                                    ${kucing.bukti}
                                </div>`
                            : `<p>EITSSS, belum boleh dibuka 😭</p>`}
                    </div>

                    ${sudahTerbuka
                        ? ""
                        : `<div
                                class="kunci-drag"
                                draggable="true"
                                ondragstart="mulaiGeserKunci(event, '${nama}')">🔑</div>`}
                </div>
            </div>
        </div>`;
}

// Drag kunci
function mulaiGeserKunci(event, nama) {
    event.dataTransfer.setData("namaKucing", nama);}

// Buka petunjuk
function bukaPetunjuk(event) {
    event.preventDefault();

    let nama = event.dataTransfer.getData("namaKucing");

    if (!nama || buktiDitemukan.includes(nama)) {
        return;}

    let kucing = dataTersangka[nama];
    let kunciBox = document.querySelector(".kunci-box");

    kunciBox.innerHTML = `
        <div class="gembok">🔓</div>
        <h4>OHHH, PETUNJUK TERBUKA! 👀</h4>

        <div class="bukti-tersembunyi">
            🔎 <strong>Petunjuk:</strong><br>
            ${kucing.bukti}
        </div>`;

    ambilBukti(nama);
}

// Simpan bukti
function ambilBukti(nama) {
    if (buktiDitemukan.includes(nama)) {
        return;}

    buktiDitemukan.push(nama);
    tampilkanBukti();

    alert("🔎 BUKTI DITEMUKAN!\n\n" + "Oke, ini bisa jadi petunjuk penting 👀");
}

// Tampilkan bukti
function tampilkanBukti() {
    let daftar = document.getElementById("daftarBukti");

    daftar.innerHTML = "";

    buktiDitemukan.forEach(function(nama) {
        let teksBukti = dataTersangka[nama].bukti;

        daftar.innerHTML += `
            <div class="kartu-bukti">
                <div class="ikon-bukti">🔎</div>

                <div>
                    <strong>Bukti ${nama}</strong>
                    <p>${teksBukti}</p>
                </div>
            </div>`;
    });
}

// Tampilkan bukti
function tampilkanBukti() {
    let daftar = document.getElementById("daftarBukti");

    daftar.innerHTML = "";

    buktiDitemukan.forEach(function(nama) {
        let teksBukti = dataTersangka[nama].bukti;

        daftar.innerHTML += `
            <div class="kartu-bukti">
                <div class="ikon-bukti">🔎</div>

                <div>
                    <strong>Bukti ${nama}</strong>
                    <p>${teksBukti}</p>
                </div>
            </div>
        `;
    });
}

// Timer investigasi
function mulaiTimer() {
    clearInterval(timerGame);

    timerGame = setInterval(function() {
        waktu--;

        document.getElementById("timer").textContent = waktu;

        if (waktu <= 0) {
            clearInterval(timerGame);

            alert(
                "⏰ WAKTUNYA HABIS!\n\n" +
                "Yahh, kasusnya belum kelar 😭\n" +
                "Coba lagi dari awal!"
            );

            kembaliAwal();
        }
    }, 1000);
}