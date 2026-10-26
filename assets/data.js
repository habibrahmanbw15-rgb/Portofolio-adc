/* ============================================================
   DATA SITUS — edit teks & pengaturan di sini saja.
   File ini hanya berisi data; logikanya ada di goals.js dan contact.js.
   ============================================================ */
window.SITE_DATA = {

    /* ---------- Tujuan dan Rencana Masa Depan ----------
       Tambah / ubah / hapus kartu cukup lewat daftar `items`.
       icon : nama ikon di sprite index.html (spade, diamond, layers,
              pen-tool, code, user, globe, graduation, mail, ...)
       speed: kecepatan scroll dalam piksel per detik (makin besar = makin cepat)
       respectReducedMotion: true  -> jika sistem pengguna mengaktifkan "kurangi gerakan",
                                      kartu ditampilkan diam di tengah (tanpa scroll).
                             false -> scroll loop selalu berjalan. */
    goals: {
        speed: 40,
        respectReducedMotion: true,
        items: [
            {
                icon: "spade",
                text: "Menciptakan karya yang mampu meninggalkan kesan dan emosi bagi banyak orang.",
            },
            {
                icon: "spade",
                text: "Menjadi kreator digital yang mampu membangun produk, cerita, dan pengalaman interaktif.",
            },
            {
                icon: "spade",
                text: "Menggabungkan desain, ilustrasi, dan teknologi menjadi karya yang bernilai dan bermanfaat.",
            },
        ],
    },

    /* ---------- Hubungi Saya ----------
       endpoint: isi URL layanan form (mis. https://formspree.io/f/xxxx)
                 agar pesan terkirim langsung.
                 Kosongkan ("") -> pesan dibuka lewat aplikasi email (mailto). */
    contact: {
        email: "habibrahmanbw15@gmail.com",
        endpoint: "",
        subjectPrefix: "Pesan dari website portofolio",
        cooldownSeconds: 30,

        rules: {
            nama:  { label: "Nama",  min: 2,  max: 60   },
            email: { label: "Email", min: 6,  max: 100, type: "email" },
            asal:  { label: "Asal",  min: 2,  max: 80   },
            pesan: { label: "Pesan", min: 10, max: 1000 },
        },

        messages: {
            required:    (label) => `${label} wajib diisi.`,
            tooShort:    (label, min) => `${label} minimal ${min} karakter.`,
            tooLong:     (label, max) => `${label} maksimal ${max} karakter.`,
            emailInvalid: "Format email tidak valid. Contoh: nama@email.com",
            invalid:     "Periksa kembali isian yang ditandai.",
            sending:     "Mengirim pesan...",
            success:     "Terima kasih! Pesanmu sudah terkirim.",
            failed:      "Pesan gagal terkirim. Coba lagi sebentar lagi.",
            network:     "Tidak ada koneksi. Periksa internetmu lalu coba lagi.",
            mailto:      "Aplikasi emailmu akan terbuka. Tekan kirim di sana untuk menyelesaikan.",
            cooldown:    (sec) => `Tunggu ${sec} detik sebelum mengirim lagi.`,
            buttonIdle:  "Kirim Pesan",
            buttonBusy:  "Mengirim...",
        },
    },
};