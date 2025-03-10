# CarRental

CarRental, kullanıcıların araçları listeleyebileceği ve araçların detaylarına göz atabileceği bir web uygulamasıdır.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **TypeScript**: Daha güvenli kod yazımı için tip denetimi sağlamak amacıyla.
- **Tailwind CSS**: Kullanıcı arayüzünün stilini özelleştirmek için.
- **Motion React**: Animasyonlar için.
- **React Icons**: Simge ve ikonlar için.
- **React Paginate**: Sayfalama işlemleri için.
- **React Router DOM**: Sayfa yönlendirmeleri için.
- **React Select**: Seçim işlemleri için.

## Proje Özellikleri

- **Ana Sayfa**: Arabaların listelendiği **Toplamda 4753 sayfa** bulunmaktadır ve her sayfada belirli sayıda araç listelenmektedir. Kullanıcılar, her bir aracın detayına tıklayarak daha fazla bilgi edinebilir.

- **Araç Detayı**: Her aracın detayına girildiğinde, araca ait 4 adet resim ve şu bilgiler yer alır:

  - **Marka (Make)**: Aracın markası
  - **Model**: Aracın modeli
  - **CO2 Emisyonu**: Aracın CO2 emisyonu
  - **Silindir Sayısı (Cylinders)**: Aracın silindir sayısı
  - **Motor Hacmi (Displ)**: Motor hacmi
  - **Tekerlek Tahriki (Drive)**: 4-Wheel or All-Wheel Drive
  - **Yakıt Türü (FuelType)**: Aracın yakıt türü
  - **Şanzıman (Trany)**: Şanzıman tipi
  - **Vclass**: Aracın sınıfı
  - **Yıl (Year)**: Aracın üretim yılı
  - **ATV Tipi (AtvType)**: Bu değer genellikle boş bırakılır, bazı araçlarda yer alabilir.
  - **StartStop**: Start/Stop teknolojisinin durumu

- **Varsayılan Resim**: Eğer bir araç için resim yoksa, varsayılan bir resim gösterilir.
