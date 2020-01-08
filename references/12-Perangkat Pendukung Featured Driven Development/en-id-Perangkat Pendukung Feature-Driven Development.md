Perangkat Pendukung Pengembangan Berbasis Fitur

Oleh:

Marek Rychl dan Pavlina Ticha

Department of Information Systems,
Faculty of Information Technology, Brno University of Technology,
Boˇzetˇechova 2, 612 66 Brno, Czech Republic
rychly@fit.vutbr.cz, xticha05@stud.fit.vutbr.cz

Abstract:

Abstrak:

This paper deals with the Featured Driven Development (FDD), an agile software development method. According to the requirement analysis for the FDD method application, an information system has been created providing all team members with instruments to follow the method. This tool has been implemented as a multi-user web-based application enabling creation of feature lists, planning a project, supporting cooperation among members of a feature-team, and tracking project progress in an illustrative way. To support project management and communication with customer representatives, a wide range of reporting features has been provided.

Makalah ini berkaitan dengan Pengembangan Berbasis Fitur (FDD - Featured Driven Development), metode pengembangan perangkat lunak agile (lincah/tangkas). Menurut analisis kebutuhan (requirement analysis) untuk aplikasi metode FDD, sistem informasi telah diciptakan untuk menyediakan anggota tim semua instrumen dalam mengikuti metode tersebut. Alat ini pernah diimplementasikan sebagai aplikasi multi-user berbasis web yang memungkinkan pembuatan daftar fitur, perencanaan proyek, dukungan kerja sama di antara anggota tim fitur, dan melacak kemajuan proyek dengan cara ilustratif. Untuk mendukung manajemen proyek dan komunikasi dengan perwakilan pelanggan, berbagai fitur pelaporan telah disediakan.

Keywords:

Kata kunci:

Agile software development, Feature driven development,
Feature, Feature-team, Class ownership.

Pengembangan Perangkat Lunak Agile, Pengembangan Berbasis Fitur, Feature,  Ownership, Fitur, Tim fitur, Kepemilikan kelas.

1. Introduction

1. Pengenalan

Traditional software development suffers from slow interaction between the development process and evolving user requirements. It follows from application of traditional software development methods to projects with rapidly changing business requirements. In this context, approaches to software development can be broadly divided into two groups. At one extreme, there are classical software development methods where user requirements are obtained in the first phases of the development process and each one of the later phases follows an earlier one (e.g. “the waterfall” model). At the other extreme, there are agile software development methods [1], which embrace and promote evolution of user requirements throughout the entire development process (e.g. “eXtreme Programming”). The first extreme produces precisely designed and documented software systems, but those often do not match current user requirements, while the second extreme produces software systems matching the latest use

Pengembangan perangkat lunak tradisional mengalami interaksi yang lambat antara proses pengembangan dan perkembangan kebutuhan user. Dapat dirasakan dari penerapan metode pengembangan perangkat lunak tradisional untuk proyek-proyek dengan business requirements yang berubah dengan cepat. Dalam konteks ini, pendekatan pengembangan perangkat lunak dapat secara luas dibagi menjadi dua kelompok. Yang ekstrim dari kelompok satu, ada metode pengembangan perangkat lunak klasik di mana kebutuhan pengguna diperoleh pada fase pertama dari proses pengembangan dan masing-masing fase berikutnya mengikuti yang sebelumnya (misalnya model "waterfall"). Di sisi lain, ada metode pengembangan perangkat lunak yang agile (lincah/gesit/tangkas)[1], yang merangkul dan mempromosikan evolusi kebutuhan pengguna di seluruh proses pengembangan (mis. “eXtreme Programming”). Ekstrim pertama menghasilkan sistem perangkat lunak yang dirancang dan didokumentasikan secara tepat, tetapi sering tidak sesuai dengan kebutuhan pengguna saat ini, sedangkan ekstrim kedua menghasilkan sistem perangkat lunak yang cocok dengan penggunaan terbaru.

The Feature Driven Development (FDD)[2] is an iterative and incremental software development process. Although the FDD method is one of agile software development methods, it is built around the traditional industry-recognised practices derived from software engineering, including planning, design and documentation phases with fine-grained decomposition of a system’s functionality and developers’ responsibilities, accurate progress reporting, frequent verification, etc. The application of the FDD method leads to better project management and consistency of a software’s design, implementation and documentation.

Feature Driven Development (FDD)[2] adalah proses pengembangan perangkat lunak yang berulang dan bertahap (iterative and Incremental). Meskipun metode FDD adalah salah satu metode pengembangan perangkat lunak agile, metode ini dibangun tidak jauh dari praktik tradisional yang diakui industri yang berasal dari rekayasa perangkat lunak, termasuk fase perencanaan, desain, dan dokumentasi dengan dekomposisi yang sangat baik mengenai fungsionalitas sistem dan tanggung jawab developer, progress report yang akurat, sering diverifikasi, dll. Penerapan metode FDD mengarah pada manajemen proyek dan konsistensi terhadap desain, implementasi, dan dokumentasi perangkat lunak yang lebih baik.

The paper describes requirement analysis for a software supporting the FDD method[3]. The tool is designed and implemented as an information system providing all team members with instruments to follow the FDD method on real software projects run in a middle-sized software development company. An important feature of the tool is ability of tracking changes in user requirements and map them into modifications in classes and into team members responsible for implementing the changes. Using the feature contributes to an increase in safety of development process.

Makalah ini menjelaskan analisis kebutuhan untuk perangkat lunak yang mendukung metode FDD[3]. Alat ini dirancang dan diimplementasikan sebagai sistem informasi yang menyediakan kepada semua anggota tim dengan instrumen yang sesuai dengan metode FDD pada proyek perangkat lunak nyata yang dijalankan di perusahaan pengembangan perangkat lunak menengah. Fitur penting dari alat ini adalah kemampuan melacak dan menyesuaikan perubahan kebutuhan pengguna dan memetakannya ke dalam modifikasi di kelas-kelas dan kepada anggota tim yang bertanggung jawab untuk mengimplementasikan perubahan. Dengan menggunakan fitur ini akan menyumbang ke tingkat keamanan proses pengembangan.

The remainder of the paper is organised as follows. In Section 2, we introduce the FDD process in more detail. In Section 3, we analyse the FDD process and describe requirements concerning the supporting tool. In Section 4 and Section 5, we describe the design and (briefly) implementation of the tool. In Section 6, we review main approaches that are relevant to the subject and discuss advantages and disadvantages of our system compared with the reviewed approaches. Finally, in Section 7, we summarise our approach, current results and outline the future work.

Selanjutnya makalah ini disusun sebagai berikut. Di Bagian 2, kami memperkenalkan proses FDD lebih terinci. Dalam Bagian 3, kami menganalisis proses FDD dan menjelaskan kebutuhan mengenai alat pendukung. Dalam Bagian 4 dan 5, kami menjelaskan desain dan (secara singkat) implementasi alat. Dalam Bagian 6, kami meninjau pendekatan utama yang relevan dengan subjek dan membahas keuntungan dan kerugian sistem kami dibandingkan dengan pendekatan yang ditinjau. Akhirnya, di Bagian 7, kami merangkum pendekatan kami, hasil saat ini dan garis besar pekerjaan masa depan.

2. Feature Driven Development (FDD)

2. Pengembangan Berbasis Fitur (PBF)

The Feature Driven Development (FDD) has been published in 1999 [4], after its successful application at an international bank in Singapore in 1997. The FDD is a highly iterative and collaborative agile development method that is composed of five processes (see Figure 1). The processes are formally described using the traditional ETVX-based (Entry-Task-Verify-eXit) process descriptions [2]. Informally, the processes can be described as follows:

Feature Driven Development (FDD) diterbitkan pada tahun 1999 [4], setelah sukses diterapkan di sebuah bank internasional di Singapura pada tahun 1997. FDD adalah metode pengembangan agile yang sangat iteratif dan kolaboratif yang terdiri dari lima proses (lihat Gambar 1). ). Proses secara formal dijelaskan menggunakan deskripsi proses tradisional berbasis ETVX (Entry-Task-Verify-eXit)[2]. Secara informal, prosesnya dapat digambarkan sebagai berikut:

Figure 1: The five processes of the FDD method.svg

Gambar 1: Lima proses dari FDD method.svg

Develop an Overall Model; In collaboration with domain experts and developers, an overall domain object model is created gradually in series of “walkthroughs” of a software system’s scope and context for each area of the problem domain. It captures the key abstractions and their relationships in the system.

Mengembangkan Model Keseluruhan; Dengan kolaborasi antara domain experts dan domain developers, keseluruhan domain object model dibuat secara bertahap dalam serangkaian "langkah-langkah" dari ruang lingkup sistem perangkat lunak dan konteks untuk setiap area dari problem domain. Untuk menangkap abstraksi kunci dan hubungannya dalam sistem.

Build a Features List; According the initial domain object model, a list of features is created where each feature describes an object or its method in the domain model. A “feature” is defined as a small, deliverable client-valued piece of a system’s functionality, which can be implemented in no more than 2 weeks. The features are grouped into feature-sets, which represent business processes or work-flows, and the feature-sets are grouped into subject-areas (or subject-domains), which represent business functions or business domains implementing core capabilities of the system. There are recommended formats for descriptions of the features, feature-lists and subject-areas, which facilitate its mapping into objects and methods [4]. The recommended format of the descriptions is

Buat Daftar Fitur; Berdasarkan initial domain object model, feature list dibuat dengan setiap feature menggambarkan objek atau metode dalam domain model. "Feature" didefinisikan sebagai bagian kecil dari fungsionalitas sistem yang bernilai saat dikirimkan kepada klien, yang diimplementasikan dalam waktu tidak lebih dari 2 minggu. Fitur dikelompokkan ke dalam feature sets, yang mewakili business processes atau work-flows, dan feature sets dikelompokkan ke dalam subject areas (atau subject domains), yang mewakili fungsi bisnis atau business domain yang mengimplementasikan kapabilitas inti sistem. Ada format yang direkomendasikan untuk deskripsi feature, feature list, dan subject areas, yang memfasilitasi pemetaannya menjadi objek dan metode[4]. Format deskripsi yang disarankan adalah

– for a feature: action the result (by, for, of, to, . . . ) a(n) object [(of, for, with, . . . ) parameters], e.g. “verify the password for an user with the login”,
– for a feature-list: action (for, of, . . . ) a(n) object, e.g. “authentication of an user”,
– and for a subject-area: object management, e.g. “user management”.

– Untuk feature: action the result (by, for, of, to, . . . ) a(n) object [(of, for, with, . . . ) parameters], misalnya. “verifikasi password untuk seorang user dengan login”,
– untuk feature list: action (for, of, . . . ) a(n) object, misalnya “authentikasi seorang user”,
– dan untuk subject-area: object management, misalnya “manajemen user".

Plan By Feature; The feature-sets and features are analysed and their time intensities are estimated. The feature-sets are sorted according to priorities assigned by a customer’s representatives, estimated time intensities and technical dependencies. Then they are assigned to individual ad-hoc feature teams. Inside the feature-teams, classes from the domain model are assigned to individual developers. Each developer is responsible for creation and maintenance of his classes. The developer is a member of all feature-teams, which have assigned the features related to the developer’s classes.

Rencana Dengan Fitur; feature-sets dan features dianalisis dan intensitas waktunya diperkirakan. Feature sets diurutkan berdasarkan prioritas yang diberikan oleh perwakilan pelanggan, perkiraan intensitas waktu dan technical dependencies. Kemudian feature sets diberikan ke masing-masing ad-hoc feature teams. Di dalam featue teams, kelas-kelas dari domain model diberikan kepada masing-masing developer. Setiap developer bertanggung jawab atas pembuatan dan pemeliharaan kelasnya. Developer adalah anggota dari semua feature teams, yang telah diberi tugas menyelesaikan features yang terkait dengan developer’s classes.

Design By Feature and Build By Feature; Those two processes are iterated for each work package, i.e. for a small group of features from one feature-set. The work package is processed by one feature-team and it is a unit of integration with other feature-sets and feature-teams. Members of the feature-team collaborate to create sequence diagrams and another useful design models for their features, and design interfaces and declarations for corresponding classes and methods. After that, individual developers implement and integrate their classes or parts of the classes into a system.

Design By Feature dan Build By Feature; Kedua proses tersebut diiterasi untuk setiap paket kerja, misalnya untuk sekelompok kecil features dari satu feature set. Paket kerja (work package) diproses oleh satu feature team dan merupakan unit terpadu dengan feature sets dan feature teams lainnya. Anggota tim fitur berkolaborasi untuk membuat sequence diagrams dan model desain lain yang berguna untuk features mereka, dan merancang interfaces dan deklarasi untuk kelas dan metode yang terkait. Setelah itu, secara individual developer mengimplementasikan dan mengintegrasikan classes mereka atau bagian-bagian dari class ke dalam sistem.

The FDD processes uses software engineering “best practices” such as domain object modelling (the model is a primary representation of knowledge), developing by feature (iterative and incremental), individual class ownership, ad-hoc set up teams of developers, inspection and reviews (of an overall model, feature lists, design models and a code), regular builds and verification by a customer’s representatives, progress reporting, etc.

Proses FDD menggunakan "praktik terbaik" rekayasa perangkat lunak seperti pemodelan domain object (model ini adalah representasi utama knowledge), yang dikembangkan berdasarkan features (iteratif dan inkremental), class ownership secara individual, membentuk ad-hoc developer team, inspeksi dan ulasan (dari keseluruhan model, feature lists, design model dan kode), pembuatan dan verifikasi berkala oleh perwakilan pelanggan, pelaporan kemajuan, dll.

2.1 Roles and Responsibilities in the FDD Processes

2.1 Peran dan Tanggung Jawab dalam Proses FDD

The FDD method defines more roles than many of other agile methods[1]. The roles can be classified into three categories: key roles, supporting roles and additional roles [2]. One team member can act as multiple roles, and a single role can be shared by several team members.

Metode FDD lebih banyak mendefinisikan roles dibandingkan dengan banyak metode agile lainnya[1]. Roles tersebut dapat diklasifikasikan ke dalam tiga kategori: roles, supporting roles dan additional roles[2]. Satu anggota tim dapat bertindak dalam berbagai roles, dan satu role dapat menjadi anggota dari beberapa tim.

The six key roles in a FDD project are: project manager (the leader of a project), chief architect (overall design of a system), development manager (the coordinator of teams), chief programmer (the leader of a feature-team preparing work packages), class owner (designer, coder, tester and documentarist of its classes) and domain experts (detailed knowledge of user requirements and problem domains).

Enam peran kunci dalam proyek FDD adalah: project manager (pemimpin proyek),  chief architect (desain keseluruhan sistem), development manager (koordinator tim), chief programmer (pemimpin feature team yang menyiapkan paket kerja), class owner (designer/perancang, coder/pembuat kode, tester/penguji, dan documentarist/pembuat dokumen kelas-kelasnya) dan domain experts (yang mengetahui secara rinci kebutuhan pengguna dan problem domains).

The five supporting roles comprise release manager (controls progress of the process), language lawyer/language guru (has detail knowledge of programming language or technologies), build engineer (responsible for build process and version management), tool-smith and system administrator (technical support of a project).

Lima peran pendukung terdiri dari release manager (yang mengendalikan kemajuan proses), language lawyer/language guru (memiliki pengetahuan rinci tentang bahasa pemrograman atau teknologi), build engineer (bertanggung jawab untuk proses pembangunan dan manajemen versi), tool-smith dan system administrator (pendukung teknis proyek).

The three further roles that are needed in some projects are: testers (verify that a system fulfils requirements), deployers (maintain data compatibility and prepare new releases) and technical writers  (prepare user documentation).

Tiga roles lebih lanjut yang diperlukan dalam beberapa proyek adalah: testers (memverifikasi bahwa sistem memenuhi kebutuhan), deployers (memelihara kompatibilitas data dan menyiapkan rilis baru) dan technical writers (menyiapkan dokumentasi untuk pengguna).

3. Software Support for the FDD Method

3. Dukungan Perangkat Lunak untuk Metode FDD

To support of the FDD method, we need to track the five processes, which are described in Section 2, from points of view of the roles that are listed in Section 2.1. A software support for the FDD method should control application of the FDD processes to real software projects.

Untuk mendukung metode FDD, kita perlu menjejaki lima proses seperti telah dijelaskan di Bagian 2, dari sudut pandang roles yang tercantum dalam Bagian 2.1. Dukungan perangkat lunak untuk metode FDD harus dapat mengontrol aplikasi dari proses FDD untuk proyek perangkat lunak yang nyata.

The first FDD process is focused on the developing of an overall domain model. According to the original presentation of the FDD method [4], it is recommended to use UML visual models [5] with coloured objects. The initial domain model provides a basis for feature-lists, that will be created in the second FDD process. However, in the most projects, many features are arising during the later processes, especially in the processes “design by feature” and “build by feature” as modifications and extensions of the existing features. This issue forbids description of the domain model in details during the first process and requires modifications of the model in later processes. The software support of the FDD method should allow modification of domain models in relation to feature management.

Proses FDD pertama difokuskan pada pengembangan model domain secara keseluruhan. Menurut presentasi asli dari metode FDD[4], direkomendasikan untuk menggunakan UML visual model[5] dengan objek berwarna. Initial domain model memberikan dasar untuk feature list, yang akan dibuat dalam proses FDD kedua. Namun, dalam sebagian besar proyek, banyak feature yang muncul selama proses berikutnya, terutama dalam proses "design by feature" dan "build by feature" sebagai modifikasi dan ekstensi dari feature yang ada. Hal ini menghalangi deskripsi model domain secara detail selama proses pertama dan memerlukan modifikasi model dalam proses berikutnya. Dukungan perangkat lunak dari metode FDD harus memungkinkan modifikasi model domain dalam kaitannya dengan feature management.

To support the second FDD process, which is aimed at building of feature lists, a software support for the FDD method needs to keep track of all features in a project and their grouping to feature-sets and subject-areas. Generally, lists of features can be created in two ways: top-down and bottom-up, i.e. as decomposition of subject-areas to feature-sets and then to single features and as composition of features into feature-sets and feature-sets into subject-areas, respectively. The software has to support both ways.

Untuk mendukung proses FDD kedua, yang bertujuan untuk membangun feature list, dukungan perangkat lunak untuk metode FDD harus dapat menjejaki semua fitur dalam suatu proyek dan mengelompokannya ke feature sets dan subject areas. Secara umum, feature list dapat dibuat dengan dua cara: top-down, yaitu dekomposisi dari subject areas menjadi beberapa feature sets dan masing-masing kemudian menjadi beberapa single feature.  Bottom-up, yaitu pembentukan beberapa feature menjadi feature sets dan feature sets ke dalam masing-masing subject areas. Perangkat lunak harus mendukung kedua cara tersebut.

In the third FDD process, a timetable for feature-sets and features is created. For each feature, it includes the time of its start and its estimated duration. There are two requirements contrary to each other: keep the start-time and duration of a whole project and permit individual planing of features in scope of feature teams. To balance those requirements, we split the whole project into two-weeks intervals, which are appropriate to maximal time intensities of features [2]. Then, the feature-teams can plan their features within the assigned two-weeks intervals independently and the time requirements of the whole project are complied. The supporting system should allow to assign features to intervals and their detailed planing, including control of their dependencies and balancing of a workload.

Dalam proses FDD ketiga, jadwal feature-sets dan features dibuat. Termasuk start-time dan estimasi durasi setiap feature. Ada dua persyaratan yang saling bertentangan: mempertahankan start-time dan durasi pada keseluruhan proyek dan membiarkan masing-masing perencanaan feature di dalam lingkup feature-teams. Untuk menyeimbangkan persyaratan tersebut, penyelesaian seluruh proyek dibagi supaya ber-interval per dua mingguan, sesuai dengan intensitas waktu maksimal setiap features[2]. Kemudian, feature-teams dapat merencanakan features mereka dalam interval per-dua mingguan tersebut secara independen sampai kebutuhan waktu penyelesaian seluruh proyek terpenuhi. Sistem pendukung harus memungkinkan untuk menetapkan feature pada interval dan perinciannya, termasuk mengontrol ketergantungannya dan menyeimbangkan beban kerja.

The last two FDD processes are focused on designing and building of individual features in compliance with the principle of feature-ownership. Owner of a feature creates a list of activities leading to implementation of the feature. Each activity can require modification of a class or its part related to the feature. The modification will be done solely by the owner of the class (a developer). This implies also ownership of a part of a project’s source code. The software support of the FDD method should track those relationships between features, developers and parts of classes.

Dua proses FDD terakhir difokuskan pada perancangan dan pembuatan features secara individual sesuai dengan prinsip feature-ownership. Owner dari sebuah feature membuat daftar kegiatan yang mengarah ke implementasi feature. Setiap aktivitas bisa jadi memerlukan modifikasi class atau bagian-bagiannya yang terkait dengan feature. Modifikasi akan dilakukan sendiri oleh class owner (developer). Artinya kepemilikan bagian dari source-code proyek juga. Dukungan perangkat lunak dari metode FDD harus melacak hubungan antara feature, developers dan bagian dari kelas-kelas.

Finally, a tool for supporting the FDD method has to provide a set of visual reports. The reports should continuously show progress for individual features, feature-sets, subject-areas and a whole project, as well as a proper form of workload overviews for individual developers and feature-teams. This information is important for correct planing decisions.

Akhirnya, alat untuk mendukung metode FDD harus menyediakan satu set laporan visual. Laporan harus terus menunjukkan kemajuan untuk masing-masing features, feature-sets, subject-areas dan seluruh proyek, serta form ikhtisar workloads yang tepat untuk masing-masing developers dan feature-team. Informasi ini penting untuk pengambilan keputusan perencanaan yang tepat.

To summarise, the basic requirements to software support of the FDD method according to its five processes are the following: a support of an initial domain model, tracking of its modification and connections of its parts to individual features; a support of features, feature-sets and subject-areas, and their composition and decomposition (top-down and bottom-up approaches); a support of individual planing of features in scope of feature-teams without substantial impact on duration of a whole project; a support of the principle of feature ownership and class-ownership and collaboration of the owners of features and classes; and a support of wide range of visual reports required for planing decisions.

Ringkasnya, kebutuhan dasar untuk dukungan perangkat lunak dari metode FDD yang sesuai dengan lima prosesnya adalah sebagai berikut: dukungan dari initial domain model, pelacakan modifikasi dan koneksi bagian-bagiannya dengan setiap features; dukungan features, feature sets, dan subject areas, serta komposisi dan penguraiannya (pendekatan top-down dan bottom-up); dukungan perencanaan features secara individu dalam lingkup feature-teams tanpa dampak besar pada durasi keseluruhan proyek; dukungan prinsip feature ownership dan class ownership serta kolaborasi pemilik feature dan class; dan dukungan dari berbagai laporan visual yang diperlukan untuk membuat keputusan perencanaan.

4. Design of the Tool for Supporting FDD

4. Rancangan Tool untuk mendukung FDD

The Figure 2 shows the basic user roles, which cover important roles from Section 2.1 according to the requirements for a tool for supporting the FDD method (an information system) mentioned in Section 3. Besides those requirements, we define “a domain” as an independent group of projects supported by the tool, e.g. projects of one software developer company using the tool, if it is provided as an outsourced service.

Gambar 2 menunjukkan user roles dasar, yang mencakup peran penting dari Bagian 2.1 sesuai dengan persyaratan untuk alat untuk mendukung metode FDD (sistem informasi) yang disebutkan dalam Bagian 3. Selain persyaratan itu, kami mendefinisikan "domain" sebagai kelompok proyek independen yang didukung oleh alat ini, mis proyek-proyek dari satu perusahaan pengembang perangkat lunak yang menggunakan alat ini, jika disediakan sebagai layanan outsourcing.

Figure 2: The hierarchy of the well-established user roles.svg

Gambar 2: Hirarki user roles yang mapan.svg

The SystemAdministrator maintains technical issues of the whole information system (the same meaning as in Section 2.1), e.g. controls user rights and domains, while the DomainAdministrator maintains technical issues of a domain specific part of the system, e.g. controls users in the domain.The ProjectAdministrator is able to create, modify and delete a project, assign and withdraw users and their roles in the project, and obtain reports relevant to the project and its parts. The ChiefArchitect can manage a project’s domain model and features, feature-sets and subject-areas, and make planing decisions, i.e. assign individual features into two-weeks intervals (see the requirements of the third FDD process in Section 3). The FeatureOwner maintains a feature-team, i.e. controls activities leading to implementation of the feature, assigns classes that are modified by the activities and class-owners responsible for realisation of individual activities, watches progress of the activities and verifies finished activities. The ClassOwner represents a developer, who implements a part of assigned feature (an individual activity connected to the owned class) and is able to modify information about the progress of the activity. The last role, the Guest, represent external supervisor of a project, a customer’s representative, who is able to view reports about progress of the project.

SystemAdministrator memelihara masalah-masalah teknis dari keseluruhan sistem informasi (artinya sama seperti pada Bagian 2.1), mis. mengontrol user rights dan user domains, sementara DomainAdministrator mengelola masalah teknis bagian domain specific dari sistem, mis. mengontrol pengguna di domain. ProjectAdministrator dapat membuat, memodifikasi, dan menghapus proyek, menetapkan dan menarik user dan role mereka dalam proyek, dan mendapatkan laporan yang relevan dengan proyek dan bagian-bagiannya. ChiefArchitect dapat mengelola domain model dan domain features proyek, feature sets, dan subject areas, serta membuat keputusan perencanaan, yakni menetapkan setiap feature ke dalam interval dua mingguan (lihat persyaratan proses FDD ketiga di Bagian 3). FeatureOwner mengelola feature teams, yaitu mengontrol aktivitas yang mengarah pada implementasi features, menetapkan kelas yang dimodifikasi oleh aktivitas dan pemilik class yang bertanggung jawab untuk realisasi aktivitas individu, mengawasi kemajuan aktivitas dan memverifikasi aktivitas yang sudah selesai. ClassOwner mewakili developers, yang mengimplementasikan bagian dari features yang ditetapkan (aktivitas individu yang terhubung ke class yang dimiliki) dan dapat memodifikasi informasi tentang kemajuan aktivitas. Role terakhir, Guest, mewakili pengawas eksternal suatu proyek, perwakilan pelanggan (user representatives ), yang dapat melihat laporan tentang kemajuan proyek.

Figure 3: The class diagram of features and feature-lists.png

Gambar 3: Class diagram dari features dan feature-lists.png

In the Figure 3, there is a part of class diagram related to features and feature-lists. The instance of the class FeatureManager handles for a project a collection of features (classes FeatureCollection and Feature) composed into feature-sets (classes FeatureSetCollection and FeatureSet ) composed into subject-areas (classes SubjectAreaCollection and SubjectArea ). Those features, feature-sets and subject-areas have attributes representing scheduled numbers of starting and ending two-weeks intervals. Moreover, the features have attributes indicating actual starting and ending two-weeks intervals and their current states 1. Features, feature-sets and subject-areas are connected to users (instances of class User with stereotype Actor ), that act as their owners.

Pada Gambar 3, ada bagian class diagram yang terkait dengan feature dan feature-list. Instance dari FeatureManager class untuk menangani kumpulan features proyek  (FeatureCollection dan Feature classes) tersusun menjadi feature-sets (FeatureSetCollection dan FeatureSet classes) tersusun menjadi subject-areas (SubjectAreaCollection dan SubjectArea classes). Features, feature-sets, dan subject areas ini memiliki atribut yang mewakili jumlah jadwal mulai dan berakhirnya interval dua mingguan. Selain itu, features memiliki atribut yang menunjukkan interval awal dan akhir dua mingguan yang sebenarnya dan status saat ini 1. Features, feature-sets dan subject areas terhubung ke user (contoh class user dengan stereotype Actor), yang bertindak sebagai owner-nya.

Figure 4: The class diagram of features and activities

Gambar 4: Class diagram dari features dan activities

The class diagram in the Figure 4 shows relationship of features and activities and their context. The instance of the class ActivityManager handles for a project a collection of activities (classes ActivityCollection and Activity ). Each activity contains attributes that represent its scheduled and actual numbers of starting and ending two-weeks intervals, the name of a class, which is modified by the activity, the progress in percents and current state 1 . Activities are connected to features (instances of class Feature ) and users (instances of class User with stereotype Actor ), that act as owners of the modified classes during the activities and are responsible for realisation of the activities.

Class diagram pada Gambar 4 menunjukkan hubungan feature dan aktivitas dan konteksnya. Instance dari class ActivityManager menangani proyek untuk collection of activities (ActivityCollection dan Activity Class). Setiap activity berisi atribut yang mewakili jumlah aktual dan terjadwal dari awal dan akhir interval dua mingguan, nama class, yang dimodifikasi oleh activity, kemajuan dalam persen dan status/kondisi saat ini 1. Activity terhubung ke feature (instance dari feature class) dan users (instance dari user class dengan stereotip Actor), yang bertindak sebagai pemilik class yang dimodifikasi selama activity dan bertanggung jawab atas realisasi activitas.

The overall entity-relationship diagram of the system with basic entities is presented in the Figure 5. The diagram connects entities for features and activities to auxiliary entities for domain management (entities Domain and Project ) and user management (entities User , Right , Role and associative entity UserRoleInProject). The entities for features and activities (entities Feature , FeatureSet , SubjectArea and Activity ) have been described before, as the relevant classes in the class diagrams in Figure 3 and Figure 4.

Diagram keseluruhan entity-relationship diagram sistem dengan entitas dasar disajikan pada Gambar 5. Diagram ini menghubungkan entitas untuk feature dan kegiatan dengan entitas tambahan untuk manajemen domain (entitas Domain dan Proyek) dan users management (entitas Users, Rights, Role dan entitas asosiatif UserRoleInProject). Entitas untuk feature dan activity (entitas Feature, FeatureSet, SubjectArea, dan Activity) telah dijelaskan sebelumnya, sebagai class yang relevan dalam class diagram pada Gambar 3 dan Gambar 4.

5. Implementation and Practical Results

5. Hasil Implementasi dan Praktik

The system has been implemented in the framework ASP.NET 2.0 and coded in the C# language as a web-based application for the Microsoft Internet Information Services web-server and the relational database management system Microsoft SQL Server as a data storage back-end. The external database is accessed via ADO.NET and own data abstraction layer, which maps relational data to proper objects and vice versa (see Manager- classes in Figures 3 and 4).

Sistem ini telah diimplementasikan di framework ASP.NET 2.0 dan dikodekan dalam bahasa C# sebagai aplikasi berbasis web untuk server web Layanan Informasi Internet Microsoft dan sistem manajemen basis data relasional Microsoft SQL Server sebagai back-end penyimpanan data. Basis data eksternal diakses melalui ADO.NET dan memiliki lapisan abstraksi data sendiri, yang memetakan data relasional ke objek yang tepat dan sebaliknya (lihat kelas Manajer pada Gambar 3 dan 4).

The data abstraction layer providing objects based on the relational data also generates some dynamic attributes of those objects. A good example is the realState attribute of classes Activity, Feature, FeatureSet, SubjectArea and Project. The attribute represents the actual state of an activity, one or more features or a whole project, and can assume values “not started”, “in progress”, “attention” and “completed”, i.e. the same values as state attributes. For instances of classes Activity and Feature, the attribute is computed form attributes state, -Start/-End attributes and the actual two-week interval. The attribute realState has value “attention” if the number of the actual two-week interval is greater than planStart and state is not “in progress” or “completed”, or it is greater than planEnd and state is not “completed”, otherwise the attribute realState reflects attribute state.

Lapisan abstraksi data yang menyediakan objek berdasarkan data relasional juga menghasilkan beberapa atribut dinamis dari objek tersebut. Contoh yang baik adalah atribut realState dari kelas Activity, Feature, FeatureSet, SubjectArea dan Project. Atribut mewakili keadaan aktual dari suatu activity, satu atau lebih feature atau keseluruhan proyek, dan dapat mengasumsikan nilai "not started", "in progress", "attention" dan "completed", misalnya nilai yang sama dengan atribut state. Untuk instance dari Activity dan Feature class, atribut dihitung dari atribut state, -Start/-End atribut dan interval dua minggu yang sebenarnya. Atribut realState memiliki nilai "attention" jika jumlah interval dua minggu yang sebenarnya lebih besar dari planStart dan state tidak "in progress" atau "completed", atau lebih besar dari planEnd dan state tidak "completed", selain itu atribut realState mencerminkan status atribut.

Figure 5: The entity-relationship diagram with basic entities (the UML notation).png

Gambar 5: Entity-relationship diagram dengan entitas dasar (notasi UML).png

Attributes realState of instances of classes FeatureSet, SubjectArea and Project are derived in the hierarchy of those objects in the bottom-up direction. For object A (e.g. FeatureSet ), which composed from objects B 1, . . . , B n (e.g. Features), attribute realState of A has value “attention” or “in progress” if at least one of attributes realState of B 1, . . . , B n has value “attention” or “in progress” 2 , respectively, otherwise the attribute of A reflects values of the attributes of B 1 , . . . , B n.

Atribut realState dari instance dari classes FeatureSet, SubjectArea dan Project diturunkan dalam hierarki objek-objek tersebut secara bottom-up. Untuk objek A (mis. FeatureSet), yang terdiri dari objek B 1,. . . , B n (mis. Features), atribut realState dari A memiliki nilai "attention" atau "in progress" jika setidaknya satu dari atribut realState dari B 1,. . . , B n memiliki nilai "perhatian" atau "in progress" 2, jika tidak, atribut A mencerminkan nilai atribut B1,. . . , B n.

The result of such “automatic state analysis” of a project’s parts can be reported by the system as the project park diagram 3 (see Figure 6). Moreover, values of the realState attributes of objects in time can be aggregated through a whole project into the project development roadmap. The roadmap indicates a development plan and real states of completed features in percentages on Y-axis and in time on X-axis of the graph (see Figure 7).

Hasil dari "automatic state analysis" dari bagian-bagian proyek dapat dilaporkan oleh sistem sebagai project park diagram 3 (lihat Gambar 6). Selain itu, nilai-nilai atribut realState objek dalam waktu dapat dikumpulkan melalui seluruh proyek ke dalam roadmap pengembangan proyek. Roadmap menunjukkan rencana pengembangan dan keadaan nyata dari features yang diselesaikan dalam persentase pada sumbu Y dan dalam waktu pada sumbu X dari grafik (lihat Gambar 7).

Footnote:

Catatan kaki:

2 If B 1, . . . , B n are “completed” but at least one “not started”, A is also “in progress”.
3 The values of progress bars in the boxes of the project park diagram representing Feature-s are computed as arithmetical averages of percentDone attributes of Activity-ies, which are grouped in the boxes at this level.

2 Jika B1,. . . , B n "completed" tetapi setidaknya satu "not started", A juga "in progress".
3 Nilai-nilai progress-bar dalam kotak-kotak dari project park diagram yang mewakili Feature-s dihitung sebagai rata-rata aritmetika dari atribut percentDone dari Activity-ies, yang dikelompokkan dalam kotak-kotak di tingkat ini.

Figure 6: The project park diagram example.png

Where colours of the boxes represent realState attributes of a project’s parts (a part of real report from the presented tool)

Gambar 6: Contoh project park diagram.png

Di mana warna kotak mewakili atribut realState dari bagian proyek (bagian dari laporan nyata dari alat yang disajikan)

Figure 7: The project development roadmap.png

(a part of real report from the tool)

Gambar 7: Roadmap pengembangan proyek.png

(bagian dari laporan nyata dari alat)

The system can export also other reports (e.g. summary progress and trend reports). All reports are available in HTML, PDF and RTF formats, suitable for project managers as well as a customer’s representatives. The source code of the described tool for supporting the FDD method is licensed under the GNU General Public License (GNU GPL) and will be available as an open source project 4.

Sistem juga dapat mengekspor laporan lain (misalnya Ringkasan kemajuan dan laporan tren). Semua laporan tersedia dalam format HTML, PDF, dan RTF, cocok untuk manajer proyek dan juga perwakilan pelanggan. Kode sumber alat yang dijelaskan untuk mendukung metode FDD dilisensikan di bawah GNU General Public License (GNU GPL) dan akan tersedia sebagai proyek sumber terbuka 4.

