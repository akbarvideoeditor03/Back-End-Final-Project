# Aplikasi Server KOPI (Karajo Pintar) - CV Maker

Selamat datang di **Aplikasi Server KOPI (Karajo Pintar) - CV Maker**, proyek akhir dari **CAMP Celerates 2024**. Aplikasi ini dirancang untuk mempermudah siapa saja dalam membuat CV dengan cepat, sederhana, dan efisien. Menggunakan **PostgreSQL** sebagai basis data, dan **Sequelize** sebagai ORM (Object Relational Mapping), aplikasi ini menawarkan solusi cepat untuk kebutuhan pembuatan CV.

---

## Ringkasan

Aplikasi Server KOPI - CV Maker menyediakan **API RESTful** yang memungkinkan pengguna untuk:
- Mengelola data akun.
- Menyimpan informasi pendidikan, pengalaman kerja, prestasi, keahlian, dan pelatihan.

Proses pembuatan CV didesain agar sederhana, tanpa memerlukan registrasi panjang dan lama. Dengan Aplikasi KOPI, pembuatan CV jadi lebih cepat dan efisien.

---

## Cara Memulai

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan aplikasi:

### Prasyarat

1. **Node.js**: Pastikan Node.js telah terinstal di perangkat Anda.
2. **PostgreSQL**: Untuk menyimpan data secara lokal, instal dan jalankan PostgreSQL (misalnya, menggunakan aplikasi seperti [**DBeaver**](https://dbeaver.io/)). Alternatifnya, gunakan platform database cloud seperti [**Neon**](https://console.neon.tech).

### Instalasi

1. **Klon repositori**:
   ```bash
   git clone <repository-url>
   ```
2. **Arahkan terminal ke folder proyek**:
   ```bash
   cd <project-folder>
   ```
3. **Instal dependensi**:
   ```bash
   npm install
   ```
4. **Konfigurasikan koneksi database**:
   - Buat database PostgreSQL.
   - Tentukan kredensial database pada file `.env`.
5. **Jalankan aplikasi**:
   ```bash
   npm start
   ```

---

## Dokumentasi API

Untuk informasi lengkap tentang API, termasuk panduan penggunaan dan contoh endpoint, silakan kunjungi [**Dokumentasi API**](https://documenter.getpostman.com/view/39839610/2sAYHxnPQj).

---

## Fitur Utama

- **Manajemen Pengguna**: Daftar, masuk, dan kelola akun pengguna.
- **Manajemen Data CV**:
  - Tambah, lihat, edit, dan hapus data seperti:
    - Pendidikan
    - Pengalaman kerja
    - Prestasi kerja
    - Keahlian
    - Pelatihan
- **Pencetakan CV**: Unduh atau cetak CV yang sudah selesai dibuat.

---

## Teknologi yang Digunakan

- **Node.js**: Lingkungan runtime JavaScript.
- **Express.js**: Framework backend.
- **PostgreSQL**: Sistem manajemen basis data.
- **Sequelize**: ORM untuk Node.js.
- **DBeaver**: Aplikasi pengelola database lokal.
- **Neon**: Platform database berbasis cloud.