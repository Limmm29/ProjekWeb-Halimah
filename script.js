let nyawa = 3;
let waktu = 60;
let timerGame;
let timerTuduh;

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