# Firebase Sohbet Uygulaması

Bu proje, React ve Firebase'i kullanarak basit bir sohbet uygulamasını oluşturmayı amaçlar. Firebase, kullanıcıların oturum açma, odalara katılma ve sohbet etme gibi işlevleri gerçekleştirmek için kullanılır.

Uygulamanın ana bileşeni `App` bileşenidir. Bu bileşen, kullanıcının yetkisinin olup olmadığını kontrol eder ve uygun sayfayı render eder. Kullanıcı yetkisi yoksa, giriş sayfasını (`AuthPage`) render eder ve kullanıcının giriş yapmasını sağlar. Eğer kullanıcı yetkili ise, odalar arasında seçim yapabileceği bir sayfa (`RoomPage`) veya zaten bir odaya katılmışsa, oda içinde sohbet edebileceği bir sayfa (`ChatPage`) render edilir.

Firebase, kullanıcı oturumlarını yönetir, odalara katılma işlemlerini gerçekleştirir ve sohbet verilerini saklar. Firebase'in kullanımı için gerekli konfigürasyon dosyaları ve bağlantılar (`firebaseConfig.js` vb.) proje içinde mevcuttur.

Bu proje, Firebase'in kullanımını ve React ile nasıl entegre edilebileceğini gösterir. Uygulamanın basitliği, kullanıcıların hızla anlamalarına ve kullanmalarına yardımcı olur. Uygulama, daha karmaşık özellikler ve geliştirmeler için bir temel sağlar.

## Ekran Görüntüsü

![](fire.gif)
