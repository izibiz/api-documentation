## E-SMM Metodları
Serbest Meslek Makbuzunun Gelir İdaresi Başkanlığı tarafından belirlenen standartlara uygun olarak elektronik ortamda oluşturulması, muhafazası, ibrazı ve raporlanmasını kapsayan uygulamadır. Aşağıdaki metodlari içerir.

* GetSmm
* GetSmmStatus
* SendSmm
* CancelSmm
* LoadSmm

## Dikkat Edilecek Hususlar(E-SMM)

1. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Login** metodu ile oturum açarak session id alınacaktır. Session Id sistemimiz tarafında 8 saate kadar zaman aşımına uğramadığı için kullanıcı giriş yapınca session id alıp bütün kullanım süresinde aynı session id kullanabilirsiniz.
2. SMM belgeleri UBL-TR Invoice formatına dönüştürerek gönderilmelidir. Her dosya içerisinde görüntülenmesini sağlayan XSLT dokümanı olmalıdır.
3. **SendSMM** metodu ile belge gönderimi yapılmaktadır.
4. **GetSMMStatus** metodu ile entegrasyon sunucularına yüklenen belgelerin durumları sorgulanacak. **Sık sorgulama yapmayınız.**
5. **GetSMM** metodu ile yüklenen belgenin imzalı XML, PDF ve HTML formatında tekrar müşteri bilgisayarına çekmek için kullanılabilir.
6. **CancelSMM** metodu ile eksik/hatalı oluşturulmuş veya müşteri tarafından iptal/iade edilmiş belgeleri GİB'e iptal olarak raporlanmasını veya tamamen iptal edilerek hiç raporlanmamasını sağlayabilirsiniz.
7. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan  **Logout** metodu ile kullanıcı programını kapatınca veya sizin belirlediğiniz bir sürede oturumu
kapatabilirsiniz.