# RESTful-Final-Project
Aplikasi backend berbasis Node.js yang dirancang untuk mengelola data terkait kartu Yugioh. API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada berbagai entitas 

## Fitur
- **Archetypes**
    -Mengelola kategori atau kelompok kartu berdasarkan tema tertentu.
- **Cards** 
    -Mengelola data detail setiap kartu, seperti level, atribut, serangan, dan pertahanan.
- **Effects** 
    -Mengelola efek kartu, deskripsi, kondisi aktivasi, dan keterkaitan dengan kartu lainnya.
- **Rarities** 
    -Mengelola tingkat kelangkaan kartu, distribusi dalam set, dan efek visual.
- **Sets** 
    -Mengelola data koleksi kartu, seperti jumlah kartu, tanggal rilis, dan distribusi kelangkaan.

## Installasi
Untuk menggunakan program ini, install proyek dan dependensi
```bash
npm install

Rute berikut tersedia untuk setiap koleksi (*collection*) seperti `archetypes`, `cards`, `effects`, `rarities`, dan `sets`:

## Format Umum

| Metode HTTP | Endpoint                                     | Deskripsi                      |
|-------------|----------------------------------------------|--------------------------------|
| GET         | `/api/[collection]/getall`                   | Mengambil semua entri          |
| POST        | `/api/[collection]/create`                   | Membuat entri baru             |
| GET         | `/api/[collection]/get/:id`                  | Mengambil entri berdasarkan ID |
| PUT         | `/api/[collection]/update/:id`               | Memperbarui entri berdasarkan ID |
| DELETE      | `/api/[collection]/delete/:id`               | Menghapus entri berdasarkan ID |
| GET         | `/api/[collection]/search?name=[query]`      | Mencari entri berdasarkan nama |
| GET         | `/api/[collection]/count`                    | Mengambil total jumlah entri   |

Ganti `[collection]` dengan nama koleksi, seperti `archetypes`, `cards`, dan sebagainya.
