## E-Mustahsil
e-Müstahsil Makbuzu (e-MM) Uygulaması, müstahsil makbuzunun Gelir İdaresi Başkanlığı tarafından belirlenen standartlara uygun olarak elektronik ortamda oluşturulması, hem kağıt hem de elektronik ortamda muhafazası ve ibrazı ile elektronik ortamda raporlamasını kapsayan uygulamadır. Aşağıdaki metodları içerir.

* CancelCreditNote
* GetCreditNote
* GetCreditNoteReport
* GetCreditNoteStatus
* LoadCreditNote
* MarkCreditNote
* SendCreditNote

## Dikkat Edilecek Hususlar(E-Müstahsil)

1. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Login** metodu ile oturum açarak session id alınacaktır. Session Id sistemimiz tarafında 8 saate kadar zaman aşımına uğramadığı için kullanıcı giriş yapınca session id alıp bütün kullanım süresinde aynı session id kullanabilirsiniz.
2. Müstahsil makbuzu belgeleri UBL-TR CreditNote formatına dönüştürerek gönderilmelidir. Her dosya içerisinde görüntülenmesini sağlayan XSLT dokümanı olmalıdır.
3. **SendCreditNote** metodu ile müstahsil makbuzu gönderimi yapılmaktadır.
4. **GetCreditNoteStatus** metodu ile entegrasyon sunucularına yüklenen belgelerin durumları sorgulanacak. **Sık sorgulama yapmayınız.**
5. **ReadCreditNote** metodu ile yüklenen belgenin imzalı XML, PDF ve HTML formatında tekrar müşteri bilgisayarına çekmek için kullanılabilir.
6. **CancelCreditNote** metodu ile eksik/hatalı oluşturulmuş veya müşteri tarafından iptal/iade edilmiş belgeleri GİB'e iptal olarak raporlanmasını veya tamamen iptal edilerek hiç raporlanmamasını sağlayabilirsiniz.
7. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan  **Logout** metodu ile kullanıcı e-fatura programını kapatınca veya sizin belirlediğiniz bir sürede oturumu
kapatabilirsiniz.