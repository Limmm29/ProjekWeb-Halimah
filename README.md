# 🐟 Misteri Ikan Hilang
# Deskripsi
Misteri Ikan Hilang adalah game investigasi sederhana berbasis web yang dibuat menggunakan HTML, CSS, dan JavaScript. Game ini memiliki tema detektif dengan cerita tentang seekor ikan yang tiba-tiba menghilang dari rumah.

Dalam permainan ini, pemain berperan sebagai detektif yang bertugas mencari tahu siapa kucing yang mencuri ikan. Terdapat empat kucing yang menjadi tersangka, yaitu Kochi, Milo, Mimi, dan Chino.

Pemain harus melakukan penyelidikan, memilih tersangka, menemukan berbagai petunjuk, mengumpulkan bukti, dan menggunakan informasi tersebut untuk menentukan siapa pelaku sebenarnya.

# Tujuan
Tujuan dari pembuatan game ini adalah untuk membuat sebuah website interaktif yang tidak hanya menampilkan informasi, tetapi juga dapat menerima tindakan dari pengguna dan memberikan respons berdasarkan tindakan tersebut. Konsep yang diterapkan antara lain:
- Membuat struktur halaman menggunakan HTML.
- Mengatur tampilan website menggunakan CSS.
- Membuat interaksi menggunakan JavaScript.
- Menggunakan fungsi dan event pada tombol.
- Mengubah isi halaman berdasarkan tindakan pemain.
- Membuat sistem permainan sederhana seperti nyawa, timer, petunjuk, dan hasil tuduhan.
- Membuat tampilan yang dapat digunakan pada laptop maupun smartphone.

# Penjelasan File
index.html: Digunakan untuk membuat struktur dan isi halaman game, seperti halaman beranda, halaman investigasi, dan halaman menentukan pelaku.

style.css: Digunakan untuk mengatur tampilan website, seperti warna, ukuran, layout, tombol, card, animasi, dan tampilan responsif.

script.js: Digunakan untuk mengatur fungsi dan interaksi dalam game menggunakan JavaScript.

kochi.jpg, milo.jpg, mimi.jpg, chino.jpg: Merupakan gambar yang digunakan untuk menampilkan karakter kucing sebagai tersangka.

# Fitur Utama
# 1. Halaman Beranda
Halaman beranda merupakan halaman pertama yang dilihat pemain. Pada halaman ini terdapat judul game, cerita singkat mengenai ikan yang hilang, serta tombol Mulai Game untuk memulai penyelidikan.

# 2. Halaman Investigasi
Setelah permainan dimulai, pemain masuk ke halaman investigasi. Pada halaman ini terdapat informasi kasus dan empat kucing yang menjadi tersangka, yaitu Kochi, Milo, Mimi, dan Chino. Setiap karakter memiliki gambar dan identitas tersangka masing-masing. 

Pemain dapat memilih salah satu tersangka untuk melihat informasi dan dapat mencari serta membuka petunjuk selama melakukan penyelidikan. Petunjuk digunakan untuk membantu pemain mengetahui siapa yang sebenarnya mencuri ikan Beberapa petunjuk tidak dapat langsung dibuka. Pemain harus menggunakan kunci untuk membuka petunjuk tersebut Pada bagian ini digunakan interaksi drag and drop sehingga pemain dapat menyeret kunci ke bagian petunjuk yang terkunci.

Setiap petunjuk yang berhasil ditemukan akan dikumpulkan ke dalam Buku Bukti Detektif. Fitur ini membantu pemain melihat kembali bukti yang sudah ditemukan sebelum menentukan pelaku.

# 3. Sistem Nyawa
Game memiliki tiga nyawa yang ditampilkan dalam bentuk ikon hati. Nyawa digunakan sebagai bagian dari tantangan permainan sehingga pemain harus berhati-hati ketika melakukan penyelidikan dan menentukan pelaku.

# 4. Timer
Game memiliki batas waktu selama proses permainan. Timer digunakan untuk memberikan tantangan agar pemain dapat menyelesaikan kasus dalam waktu yang tersedia.

# 5. Halaman Menentukan Pelaku
Setelah pemain merasa sudah mendapatkan cukup bukti, pemain dapat melanjutkan ke halaman Tentukan Pelaku. Pada halaman ini pemain harus memilih salah satu dari empat tersangka berdasarkan hasil penyelidikan yang sudah dilakukan.

Setelah pemain memilih tersangka, JavaScript akan menentukan apakah pilihan tersebut benar atau salah. Hasil permainan kemudian ditampilkan pada halaman yang sama sehingga pemain dapat mengetahui hasil dari tuduhannya.

# 6. Navigasi

Game memiliki beberapa tombol navigasi yang membantu pemain berpindah halaman, seperti:
- Mulai Game
- Beranda
- Lanjut Menuduh Pelaku
- Kembali ke Investigasi

# 7. Tampilan Responsif
Tampilan game dibuat menggunakan CSS responsive sehingga ukuran dan susunan elemen dapat menyesuaikan dengan ukuran layar. Game dapat dijalankan melalui laptop maupun smartphone.

# Teknologi yang Digunakan
# HTML5
HTML digunakan untuk membuat struktur halaman website, seperti:
- Header
- Navigasi
- Main
- Section
- Article
- Footer
- Tombol
- Gambar
- Teks

# CSS3
CSS digunakan untuk mengatur tampilan dan desain game, seperti:
- Warna dan background
- Ukuran dan posisi elemen
- Card tersangka
- Tombol
- Animasi
- Layout
- Responsive design

# JavaScript
JavaScript digunakan untuk membuat game menjadi interaktif. Beberapa fungsi JavaScript yang digunakan antara lain:
- Memulai permainan.
- Berpindah antarhalaman.
- Memilih tersangka.
- Menampilkan petunjuk.
- Mengumpulkan bukti.
- Mengatur sistem kunci.
- Mengatur timer.
- Mengatur nyawa.
- Menentukan hasil tuduhan pemain.

# Live Demo:
https://limmm29.github.io/ProjekWeb-Halimah/

# Link Figma:
https://www.figma.com/design/Qoydh7IpvbdLgMx0jz67Fx/Desain-Figma---Misteri-Ikan-Hilang?node-id=0-1&t=tAqlmJv7RDt4wTD8-1 

# Alur Permainan
Alur permainan secara sederhana adalah:
Beranda → Mulai Game → Investigasi → Pilih Tersangka → Cari Petunjuk → Kumpulkan Bukti → Tentukan Pelaku → Lihat Hasil

Pemain harus menggunakan petunjuk yang ditemukan selama investigasi untuk menentukan pilihan pada tahap akhir permainan.

# Pengembang
Nama: Halimah
NIM: 2510131320013
Jurusan: Pendidikan Komputer
Kelas: A1