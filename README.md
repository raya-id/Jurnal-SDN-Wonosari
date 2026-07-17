# Aplikasi Jurnal Harian Guru.

## 📌 Gambaran Umum (Overview)
Aplikasi Jurnal Harian Guru, adalah aplikasi web progresif yang dirancang untuk mendigitalisasi pelaporan kegiatan belajar mengajar harian di tingkat sekolah dasar. Aplikasi ini diintegrasikan berbasis desain *Glassmorphism* yang modern, cepat, dan aman, sekaligus mempermudah eksekusi aplikasi di belakang layar.

## 🎯 Tujuan Aplikasi (Purpose of the Application)
* **Digitalisasi Laporan Harian:** Mempermudah guru mata pelajaran dan guru kelas dalam mencatat tujuan pembelajaran, materi, keaktifan siswa, refleksi guru, serta mengunggah foto dokumentasi kegiatan secara *real-time*.
* **Manajemen Kehadiran Terintegrasi:** Mengotomatisasi penghitungan dan pencatatan absensi siswa (Sakit, Ijin, Tanpa Keterangan) langsung di dalam form jurnal pembelajaran.
* **Monitoring & Supervisi Kepala Sekolah:** Menyediakan dasbor eksekutif bagi Kepala Sekolah untuk memantau, memverifikasi, dan melacak riwayat pelaporan jurnal seluruh guru dari satu portal terpusat.
* **Efisiensi Arsip & Pelaporan:** Dilengkapi dengan fitur ekspor data mandiri ke format Microsoft Excel (.xlsx) di sisi klien untuk mempermudah rekapitulasi bulanan dan audit administrasi sekolah.

## 🛠️ Teknologi yang Digunakan (Tech Stack)
### **Frontend & User Interface**
* **HTML5 & CSS3:** Arsitektur antarmuka dua kolom berbasis *Glassmorphism Design* dengan efek *Soft Blue Mesh Gradient*, *backdrop-blur*, dan mikro-interaksi responsif.
* **JavaScript (ES6+):** Menggunakan pendekatan *Single-Page Application* (SPA) dengan *Optimistic UI* dan *Client-Side Image Compression* (kompresi foto otomatis di peramban sebelum diunggah).
* **FontAwesome 6:** Integrasi ikonografi vektor solid untuk visualisasi navigasi dan status sistem yang elegan.
* **SheetJS (XLSX.js):** Pemrosesan dan ekspor data laporan ke format Excel secara lokal di peramban (*Client-side exporting*).

### **Backend & Database**
* **Google Apps Script (GAS):** Bertindak sebagai *API Gateway* dan *Serverless Backend* yang menangani logika CRUD, validasi data, dan manajemen file di Google Drive.
* **Google Sheets (Single Table Database):** Arsitektur basis data berkinerja tinggi dengan indeks kolom dinamis yang mengoptimalkan kecepatan pembacaan data hingga $O(1)$.
* **Google Drive API:** Penyimpanan file dokumentasi kegiatan yang dikelola otomatis per folder bulan dan tahun.

### **Keamanan & Performa (Security & Performance)**
* **SHA-256 & HMAC Token:** Sistem autentikasi berbasis *hashing* untuk pengamanan kata sandi dan manajemen sesi (*Session TTL*) berlapis dengan *Role-Based Access Control* (RBAC).
* **Client-Side Offloading:** Memanfaatkan `sessionStorage` dan `localStorage` sebagai *circuit breaker* dan *cache layer* lokal untuk meminimalkan latensi jaringan dan antrean RPC ke server Google.
* **Global Alert Hijacker:** Modul *overriding* sistem yang mengubah pesan *error/alert* bawaan peramban menjadi pop-up kustom visual tanpa memunculkan URL *script host*.

---

## 📞 Kontak Admin
Untuk kendala teknis, pertanyaan terkait sistem, atau permintaan Pembuatan Aplikasi GRATIS , silakan hubungi administrator sistem melalui email:
📧 **[expo23expo@gmail.com](mailto:expo23expo@gmail.com)**

---
*© 2026 Jiraya One Tech. All Rights Reserved.*
