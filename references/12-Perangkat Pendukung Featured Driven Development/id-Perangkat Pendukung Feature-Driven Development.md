# Perangkat Pendukung Pengembangan Berbasis Fitur

Oleh:

### Marek Rychl dan Pavlina Ticha

Department of Information Systems,
Faculty of Information Technology, Brno University of Technology,
Boˇzetˇechova 2, 612 66 Brno, Czech Republic
rychly@fit.vutbr.cz, xticha05@stud.fit.vutbr.cz

## Abstrak:

Makalah ini berkaitan dengan Pengembangan Berbasis Fitur (FDD - Featured Driven Development), metode pengembangan perangkat lunak agile (lincah/tangkas). Menurut analisis kebutuhan (requirement analysis) untuk aplikasi metode FDD, sistem informasi telah diciptakan untuk menyediakan anggota tim semua instrumen dalam mengikuti metode tersebut. Alat ini pernah diimplementasikan sebagai aplikasi multi-user berbasis web yang memungkinkan pembuatan daftar fitur, perencanaan proyek, dukungan kerja sama di antara anggota tim fitur, dan melacak kemajuan proyek dengan cara ilustratif. Untuk mendukung manajemen proyek dan komunikasi dengan perwakilan pelanggan, berbagai fitur pelaporan telah disediakan.

### Kata kunci:

Pengembangan Perangkat Lunak Agile, Pengembangan Berbasis Fitur, Feature,  Ownership, Fitur, Tim fitur, Kepemilikan kelas.

## 1. Pengenalan

Pengembangan perangkat lunak tradisional mengalami interaksi yang lambat antara proses pengembangan dan perkembangan kebutuhan user. Dapat dirasakan dari penerapan metode pengembangan perangkat lunak tradisional untuk proyek-proyek dengan business requirements yang berubah dengan cepat. Dalam konteks ini, pendekatan pengembangan perangkat lunak dapat secara luas dibagi menjadi dua kelompok. Yang ekstrim dari kelompok satu, ada metode pengembangan perangkat lunak klasik di mana kebutuhan pengguna diperoleh pada fase pertama dari proses pengembangan dan masing-masing fase berikutnya mengikuti yang sebelumnya (misalnya model "waterfall"). Di sisi lain, ada metode pengembangan perangkat lunak yang agile (lincah/gesit/tangkas)[1], yang merangkul dan mempromosikan evolusi kebutuhan pengguna di seluruh proses pengembangan (mis. “eXtreme Programming”). Ekstrim pertama menghasilkan sistem perangkat lunak yang dirancang dan didokumentasikan secara tepat, tetapi sering tidak sesuai dengan kebutuhan pengguna saat ini, sedangkan ekstrim kedua menghasilkan sistem perangkat lunak yang cocok dengan penggunaan terbaru.

Feature Driven Development (FDD)[2] adalah proses pengembangan perangkat lunak yang berulang dan bertahap (iterative and Incremental). Meskipun metode FDD adalah salah satu metode pengembangan perangkat lunak agile, metode ini dibangun tidak jauh dari praktik tradisional yang diakui industri rekayasa perangkat lunak, termasuk fase perencanaan, desain, dan dokumentasi dengan dekomposisi yang sangat baik mengenai fungsionalitas sistem dan tanggung jawab developer, progress report yang akurat, sering diverifikasi, dll. Penerapan metode FDD mengarah pada manajemen proyek dan konsistensi terhadap desain, implementasi, dan dokumentasi perangkat lunak yang lebih baik.

Makalah ini menjelaskan analisis kebutuhan untuk perangkat lunak yang mendukung metode FDD[3]. Alat ini dirancang dan diimplementasikan sebagai sistem informasi yang menyediakan kepada semua anggota tim dengan instrumen yang sesuai dengan metode FDD pada proyek perangkat lunak nyata yang dijalankan di perusahaan pengembangan perangkat lunak menengah. Fitur penting dari alat ini adalah kemampuan melacak dan menyesuaikan perubahan kebutuhan pengguna dan memetakannya ke dalam modifikasi di kelas-kelas dan kepada anggota tim yang bertanggung jawab untuk mengimplementasikan perubahan. Dengan menggunakan fitur ini akan menyumbang ke tingkat keamanan proses pengembangan.

Selanjutnya makalah ini disusun sebagai berikut. Di Bagian 2, kami memperkenalkan proses FDD lebih terinci. Dalam Bagian 3, kami menganalisis proses FDD dan menjelaskan kebutuhan mengenai alat pendukung. Dalam Bagian 4 dan 5, kami menjelaskan desain dan (secara singkat) implementasi alat. Dalam Bagian 6, kami meninjau pendekatan utama yang relevan dengan subjek dan membahas keuntungan dan kerugian sistem kami dibandingkan dengan pendekatan yang ditinjau. Akhirnya, di Bagian 7, kami merangkum pendekatan kami, hasil saat ini dan garis besar pekerjaan masa depan.

2. Pengembangan Berbasis Fitur (PBF)

Feature Driven Development (FDD) diterbitkan pada tahun 1999 [4], setelah sukses diterapkan di sebuah bank internasional di Singapura pada tahun 1997. FDD adalah metode pengembangan agile yang sangat iteratif dan kolaboratif yang terdiri dari lima proses (lihat Gambar 1) Proses secara formal dijelaskan menggunakan deskripsi proses tradisional berbasis ETVX (Entry-Task-Verify-eXit)[2]. Secara informal, prosesnya dapat digambarkan sebagai berikut:

<p align="center">
    <img src="Gambar 1 Lima proses dari FDD method.png" width="1121"/><br />
    Gambar 1: Lima proses dari FDD method.png
</p>


Mengembangkan Model Keseluruhan; Dengan kolaborasi antara domain experts dan domain developers, keseluruhan domain object model dibuat secara bertahap dalam serangkaian "langkah-langkah" dari ruang lingkup sistem perangkat lunak dan konteks untuk setiap area dari problem domain. Untuk menangkap abstraksi kunci dan hubungannya dalam sistem.

Buat Daftar Fitur; Berdasarkan initial domain object model, feature list dibuat dengan setiap feature menggambarkan objek atau metode dalam domain model. "Feature" didefinisikan sebagai bagian kecil dari fungsionalitas sistem yang bernilai saat dikirimkan kepada klien, yang diimplementasikan dalam waktu tidak lebih dari 2 minggu. Fitur dikelompokkan ke dalam feature sets, yang mewakili business processes atau work-flows, dan feature sets dikelompokkan ke dalam subject areas (atau subject domains), yang mewakili fungsi bisnis atau business domain yang mengimplementasikan kapabilitas inti sistem. Ada format yang direkomendasikan untuk deskripsi feature, feature list, dan subject areas, yang memfasilitasi pemetaannya menjadi objek dan metode[4]. Format deskripsi yang disarankan adalah

– Untuk feature: action the result (by, for, of, to, . . . ) a(n) object [(of, for, with, . . . ) parameters], misalnya. “verifikasi password untuk seorang user dengan login”,
– untuk feature list: action (for, of, . . . ) a(n) object, misalnya “authentikasi seorang user”,
– dan untuk subject-area: object management, misalnya “manajemen user".

Rencana Dengan Fitur; feature-sets dan features dianalisis dan intensitas waktunya diperkirakan. Feature sets diurutkan berdasarkan prioritas yang diberikan oleh perwakilan pelanggan, perkiraan intensitas waktu dan technical dependencies. Kemudian feature sets diberikan ke masing-masing ad-hoc feature teams. Di dalam featue teams, kelas-kelas dari domain model diberikan kepada masing-masing developer. Setiap developer bertanggung jawab atas pembuatan dan pemeliharaan kelasnya. Developer adalah anggota dari semua feature teams, yang telah diberi tugas menyelesaikan features yang terkait dengan developer’s classes.

Design By Feature dan Build By Feature; Kedua proses tersebut diiterasi untuk setiap paket kerja, misalnya untuk sekelompok kecil features dari satu feature set. Paket kerja (work package) diproses oleh satu feature team dan merupakan unit terpadu dengan feature sets dan feature teams lainnya. Anggota tim fitur berkolaborasi untuk membuat sequence diagrams dan model desain lain yang berguna untuk features mereka, dan merancang interfaces dan deklarasi untuk kelas dan metode yang terkait. Setelah itu, secara individual developer mengimplementasikan dan mengintegrasikan classes mereka atau bagian-bagian dari class ke dalam sistem.

Proses FDD menggunakan "praktik terbaik" rekayasa perangkat lunak seperti pemodelan domain object (model ini adalah representasi utama knowledge), yang dikembangkan berdasarkan features (iteratif dan inkremental), class ownership secara individual, membentuk ad-hoc developer team, inspeksi dan ulasan (dari keseluruhan model, feature lists, design model dan kode), pembuatan dan verifikasi berkala oleh perwakilan pelanggan, pelaporan kemajuan, dll.

2.1 Peran dan Tanggung Jawab dalam Proses FDD

Metode FDD lebih banyak mendefinisikan roles dibandingkan dengan banyak metode agile lainnya[1]. Roles tersebut dapat diklasifikasikan ke dalam tiga kategori: roles, supporting roles dan additional roles[2]. Satu anggota tim dapat bertindak dalam berbagai roles, dan satu role dapat menjadi anggota dari beberapa tim.

Enam peran kunci dalam proyek FDD adalah: project manager (pemimpin proyek),  chief architect (desain keseluruhan sistem), development manager (koordinator tim), chief programmer (pemimpin feature team yang menyiapkan paket kerja), class owner (designer/perancang, coder/pembuat kode, tester/penguji, dan documentarist/pembuat dokumen kelas-kelasnya) dan domain experts (yang mengetahui secara rinci kebutuhan pengguna dan problem domains).

Lima peran pendukung terdiri dari release manager (yang mengendalikan kemajuan proses), language lawyer/language guru (memiliki pengetahuan rinci tentang bahasa pemrograman atau teknologi), build engineer (bertanggung jawab untuk proses pembangunan dan manajemen versi), tool-smith dan system administrator (pendukung teknis proyek).

Tiga roles lebih lanjut yang diperlukan dalam beberapa proyek adalah: testers (memverifikasi bahwa sistem memenuhi kebutuhan), deployers (memelihara kompatibilitas data dan menyiapkan rilis baru) dan technical writers (menyiapkan dokumentasi untuk pengguna).

3. Dukungan Perangkat Lunak untuk Metode FDD

Untuk mendukung metode FDD, kita perlu menjejaki lima proses seperti telah dijelaskan di Bagian 2, dari sudut pandang roles yang tercantum dalam Bagian 2.1. Dukungan perangkat lunak untuk metode FDD harus dapat mengontrol aplikasi dari proses FDD untuk proyek perangkat lunak yang nyata.

Proses FDD pertama difokuskan pada pengembangan model domain secara keseluruhan. Menurut presentasi asli dari metode FDD[4], direkomendasikan untuk menggunakan UML visual model[5] dengan objek berwarna. Initial domain model memberikan dasar untuk feature list, yang akan dibuat dalam proses FDD kedua. Namun, dalam sebagian besar proyek, banyak feature yang muncul selama proses berikutnya, terutama dalam proses "design by feature" dan "build by feature" sebagai modifikasi dan ekstensi dari feature yang ada. Hal ini menghalangi deskripsi model domain secara detail selama proses pertama dan memerlukan modifikasi model dalam proses berikutnya. Dukungan perangkat lunak dari metode FDD harus memungkinkan modifikasi model domain dalam kaitannya dengan feature management.

Untuk mendukung proses FDD kedua, yang bertujuan untuk membangun feature list, dukungan perangkat lunak untuk metode FDD harus dapat menjejaki semua fitur dalam suatu proyek dan mengelompokannya ke feature sets dan subject areas. Secara umum, feature list dapat dibuat dengan dua cara: top-down, yaitu dekomposisi dari subject areas menjadi beberapa feature sets dan masing-masing kemudian menjadi beberapa single feature.  Bottom-up, yaitu pembentukan beberapa feature menjadi feature sets dan feature sets ke dalam masing-masing subject areas. Perangkat lunak harus mendukung kedua cara tersebut.

Dalam proses FDD ketiga, jadwal feature-sets dan features dibuat. Termasuk start-time dan estimasi durasi setiap feature. Ada dua persyaratan yang saling bertentangan: mempertahankan start-time dan durasi pada keseluruhan proyek dan membiarkan masing-masing perencanaan feature di dalam lingkup feature-teams. Untuk menyeimbangkan persyaratan tersebut, penyelesaian seluruh proyek dibagi supaya ber-interval per dua mingguan, sesuai dengan intensitas waktu maksimal setiap features[2]. Kemudian, feature-teams dapat merencanakan features mereka dalam interval per-dua mingguan tersebut secara independen sampai kebutuhan waktu penyelesaian seluruh proyek terpenuhi. Sistem pendukung harus memungkinkan untuk menetapkan feature pada interval dan perinciannya, termasuk mengontrol ketergantungannya dan menyeimbangkan beban kerja.

Dua proses FDD terakhir difokuskan pada perancangan dan pembuatan features secara individual sesuai dengan prinsip feature-ownership. Owner dari sebuah feature membuat daftar kegiatan yang mengarah ke implementasi feature. Setiap aktivitas bisa jadi memerlukan modifikasi class atau bagian-bagiannya yang terkait dengan feature. Modifikasi akan dilakukan sendiri oleh class owner (developer). Artinya kepemilikan bagian dari source-code proyek juga. Dukungan perangkat lunak dari metode FDD harus melacak hubungan antara feature, developers dan bagian dari kelas-kelas.

Akhirnya, alat untuk mendukung metode FDD harus menyediakan satu set laporan visual. Laporan harus terus menunjukkan kemajuan untuk masing-masing features, feature-sets, subject-areas dan seluruh proyek, serta form ikhtisar workloads yang tepat untuk masing-masing developers dan feature-team. Informasi ini penting untuk pengambilan keputusan perencanaan yang tepat.

Ringkasnya, kebutuhan dasar untuk dukungan perangkat lunak dari metode FDD yang sesuai dengan lima prosesnya adalah sebagai berikut: dukungan dari initial domain model, pelacakan modifikasi dan koneksi bagian-bagiannya dengan setiap features; dukungan features, feature sets, dan subject areas, serta komposisi dan penguraiannya (pendekatan top-down dan bottom-up); dukungan perencanaan features secara individu dalam lingkup feature-teams tanpa dampak besar pada durasi keseluruhan proyek; dukungan prinsip feature ownership dan class ownership serta kolaborasi pemilik feature dan class; dan dukungan dari berbagai laporan visual yang diperlukan untuk membuat keputusan perencanaan.

4. Rancangan Tool untuk mendukung FDD

Gambar 2 menunjukkan user roles dasar, yang mencakup peran penting dari Bagian 2.1 sesuai dengan persyaratan untuk alat untuk mendukung metode FDD (sistem informasi) yang disebutkan dalam Bagian 3. Selain persyaratan itu, kami mendefinisikan "domain" sebagai kelompok proyek independen yang didukung oleh alat ini, mis proyek-proyek dari satu perusahaan pengembang perangkat lunak yang menggunakan alat ini, jika disediakan sebagai layanan outsourcing.

<p align="center">
    <img src="Gambar 2 Hirarki user roles yang mapan.png" width="744"/><br />
    Gambar 2: Hirarki user roles yang mapan.png
</p>

SystemAdministrator memelihara masalah-masalah teknis dari keseluruhan sistem informasi (artinya sama seperti pada Bagian 2.1), mis. mengontrol user rights dan user domains, sementara DomainAdministrator mengelola masalah teknis bagian domain specific dari sistem, mis. mengontrol pengguna di domain. ProjectAdministrator dapat membuat, memodifikasi, dan menghapus proyek, menetapkan dan menarik user dan role mereka dalam proyek, dan mendapatkan laporan yang relevan dengan proyek dan bagian-bagiannya. ChiefArchitect dapat mengelola domain model dan domain features proyek, feature sets, dan subject areas, serta membuat keputusan perencanaan, yakni menetapkan setiap feature ke dalam interval dua mingguan (lihat persyaratan proses FDD ketiga di Bagian 3). FeatureOwner mengelola feature teams, yaitu mengontrol aktivitas yang mengarah pada implementasi features, menetapkan kelas yang dimodifikasi oleh aktivitas dan pemilik class yang bertanggung jawab untuk realisasi aktivitas individu, mengawasi kemajuan aktivitas dan memverifikasi aktivitas yang sudah selesai. ClassOwner mewakili developers, yang mengimplementasikan bagian dari features yang ditetapkan (aktivitas individu yang terhubung ke class yang dimiliki) dan dapat memodifikasi informasi tentang kemajuan aktivitas. Role terakhir, Guest, mewakili pengawas eksternal suatu proyek, perwakilan pelanggan (user representatives ), yang dapat melihat laporan tentang kemajuan proyek.

<p align="center">
    <img src="Gambar 3 Class diagram dari features dan feature-lists.png" width="921"/><br />
    Gambar 3: Class diagram dari features dan feature-lists.png
</p>


Pada Gambar 3, ada bagian class diagram yang terkait dengan feature dan feature-list. Instance dari FeatureManager class untuk menangani kumpulan features proyek  (FeatureCollection dan Feature classes) tersusun menjadi feature-sets (FeatureSetCollection dan FeatureSet classes) tersusun menjadi subject-areas (SubjectAreaCollection dan SubjectArea classes). Features, feature-sets, dan subject areas ini memiliki atribut yang mewakili jumlah jadwal mulai dan berakhirnya interval dua mingguan. Selain itu, features memiliki atribut yang menunjukkan interval awal dan akhir dua mingguan yang sebenarnya dan status saat ini 1. Features, feature-sets dan subject areas terhubung ke user (contoh class user dengan stereotype Actor), yang bertindak sebagai owner-nya.

<p align="center">
    <img src="Gambar 4 Class diagram dari features dan activities.png" width="856"/><br />
    Gambar 4: Class diagram dari features dan activities.png
</p>

Class diagram pada Gambar 4 menunjukkan hubungan feature dan aktivitas dan konteksnya. Instance dari class ActivityManager menangani proyek untuk collection of activities (ActivityCollection dan Activity Class). Setiap activity berisi atribut yang mewakili jumlah aktual dan terjadwal dari awal dan akhir interval dua mingguan, nama class, yang dimodifikasi oleh activity, kemajuan dalam persen dan status/kondisi saat ini 1. Activity terhubung ke feature (instance dari feature class) dan users (instance dari user class dengan stereotip Actor), yang bertindak sebagai pemilik class yang dimodifikasi selama activity dan bertanggung jawab atas realisasi activitas.

Diagram keseluruhan entity-relationship diagram sistem dengan entitas dasar disajikan pada Gambar 5. Diagram ini menghubungkan entitas untuk feature dan kegiatan dengan entitas tambahan untuk manajemen domain (entitas Domain dan Proyek) dan users management (entitas Users, Rights, Role dan entitas asosiatif UserRoleInProject). Entitas untuk feature dan activity (entitas Feature, FeatureSet, SubjectArea, dan Activity) telah dijelaskan sebelumnya, sebagai class yang relevan dalam class diagram pada Gambar 3 dan Gambar 4.

5. Implementasi dan Hasil Praktik

Sistem ini telah diimplementasikan di framework ASP.NET 2.0 dan dikodekan dalam bahasa C# sebagai aplikasi berbasis web untuk server web Layanan Informasi Internet Microsoft dan sistem manajemen basis data relasional Microsoft SQL Server sebagai back-end penyimpanan data. Basis data eksternal diakses melalui ADO.NET dan memiliki lapisan abstraksi data sendiri, yang memetakan data relasional ke objek yang tepat dan sebaliknya (lihat kelas Manajer pada Gambar 3 dan 4).

Lapisan abstraksi data yang menyediakan objek berdasarkan data relasional juga menghasilkan beberapa atribut dinamis dari objek tersebut. Contoh yang baik adalah atribut realState dari kelas Activity, Feature, FeatureSet, SubjectArea dan Project. Atribut mewakili keadaan aktual dari suatu activity, satu atau lebih feature atau keseluruhan proyek, dan dapat mengasumsikan nilai "not started", "in progress", "attention" dan "completed", misalnya nilai yang sama dengan atribut state. Untuk instance dari Activity dan Feature class, atribut dihitung dari atribut state, -Start/-End atribut dan interval dua minggu yang sebenarnya. Atribut realState memiliki nilai "attention" jika jumlah interval dua minggu yang sebenarnya lebih besar dari planStart dan state tidak "in progress" atau "completed", atau lebih besar dari planEnd dan state tidak "completed", selain itu atribut realState mencerminkan status atribut.

<p align="center">
    <img src="Gambar 5 Entity-relationship diagram dengan entitas dasar (notasi UML).png" width="890"/><br />
    Gambar 5: Entity-relationship diagram dengan entitas dasar (notasi UML).png
</p>

Atribut realState dari instance dari classes FeatureSet, SubjectArea dan Project diturunkan dalam hierarki objek-objek tersebut secara bottom-up. Untuk objek A (mis. FeatureSet), yang terdiri dari objek B 1,. . . , B n (mis. Features), atribut realState dari A memiliki nilai "attention" atau "in progress" jika setidaknya satu dari atribut realState dari B 1,. . . , B n memiliki nilai "perhatian" atau "in progress" 2, jika tidak, atribut A mencerminkan nilai atribut B1,. . . , B n.

Hasil dari "automatic state analysis" dari bagian-bagian proyek dapat dilaporkan oleh sistem sebagai project park diagram 3 (lihat Gambar 6). Selain itu, nilai-nilai atribut realState objek dalam waktu dapat dikumpulkan melalui seluruh proyek ke dalam roadmap pengembangan proyek. Roadmap menunjukkan rencana pengembangan dan keadaan nyata dari features yang diselesaikan dalam persentase pada sumbu Y dan dalam waktu pada sumbu X dari grafik (lihat Gambar 7).

Catatan kaki:

2 Jika B1,. . . , B n "completed" tetapi setidaknya satu "not started", A juga "in progress".
3 Nilai-nilai progress-bar dalam kotak-kotak dari project park diagram yang mewakili Feature-s dihitung sebagai rata-rata aritmetika dari atribut percentDone dari Activity-ies, yang dikelompokkan dalam kotak-kotak di tingkat ini.

<p align="center">
    <img src="Gambar 6 Contoh project park diagram.png" width="855"/><br />
    Gambar 6: Contoh project park diagram.png
</p>

Di mana warna kotak mewakili atribut realState dari bagian proyek (bagian dari laporan nyata dari alat yang disajikan)

<p align="center">
    <img src="Gambar 7 Roadmap pengembangan proyek.png" width="742"/><br />
    Gambar 7: Roadmap pengembangan proyek.png
</p>

(bagian dari laporan nyata dari alat)

Sistem juga dapat mengekspor laporan lain (misalnya Ringkasan kemajuan dan laporan tren). Semua laporan tersedia dalam format HTML, PDF, dan RTF, cocok untuk manajer proyek dan juga perwakilan pelanggan. Kode sumber alat yang dijelaskan untuk mendukung metode FDD dilisensikan di bawah GNU General Public License (GNU GPL) dan akan tersedia sebagai proyek sumber terbuka 4.

