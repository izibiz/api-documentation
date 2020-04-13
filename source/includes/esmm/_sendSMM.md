## E-SMM Gönderme (SendSMM)
E-SMM belgesini özel entegratör sistemlerine gönderilmesini sağlayan servistir. Bu servis ile gönderilen belgeler kuyruğa eklenerek işleme (imzalama, e-posta/sms gönderme ve raporlama) alınacaktır.

* Eğer müşterinin özel entegratör ile e-posta gönderme hizmeti sözleşmesi yoksa ve webservis isteğinde e-posta gönderme seçeneği seçilmişse işlem hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmeti sözleşmesi imzalanmalı ve e-posta gönderim hizmetinin aktiflemesi talep edilmelidir. Eğer e-posta gönderimi farklı kanallardan yapılacaksa e-posta gönderim parametresini `N` olarak gönderiniz.
<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. `SESSION_ID` değeri **Kimlik Doğrulama (Authentication)** webservisinde ki `Login` metodundan alınan değerdir. Belge sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.**
**SMM** | ComplexType | **Evet** | En az bir SMM elementi bulunmalıdır. Toplu SMM göndermek bu eleman çoklanır. Atanan belge numarası `ID` attribute içerisine, Evrensel tekil tanımlama numarasını (ETTN) `UUID` attribute eklenmek zorundadır.
**SMM.CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. XML formatında sıkıştırılmadan göndermek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. **Daha hızlı iletişim sağlamak için belgelerin sıkıştırılarak gönderilmesini öneriyoruz.**
**SMM_PROPERTIES** | ComplexType | Hayır | SMM belgesi ile ilgili parametrelerin belirlendiği elemandır. Belgenin alıcısına e-posta veya SMS olarak iletme isteği belirlenebilir.
**SMM_PROPERTIES.SMS_FLAG** | String  | Hayır | Belge alıcısına SMS olarak göndermek için `Y` değeri gönderilmelidir. Eleman gönderilmezse `SMS_NUMBER` dolu olsa dahi SMS gönderilmez. **DİKKAT: Eğer müşterinin özel entegratör ile SMS gönderme hizmeti sözleşmesi yoksa ve `Y` değeri gönderilirse belgenin sisteme yüklenmesine izin verilmeyecektir. Bu durumda özel entegratör ile iletişime geçerek SMS gönderim hizmeti satın alınmalı veya SMS gönderiminin farklı bir kanaldan müşteri tarafından yapılması gerekmektedir. Bu durumda bu parametre gönderilmemeli veya `N` olarak gönderilmelidir.**
**SMM_PROPERTIES.SMS_NUMBER** | String  | Hayır | Belgenin SMS olarak iletileceği telefon numarası. Eğer `SMS_FLAG` elemanına `Y` gönderilirse bu alan zorunludur. `SMS_FLAG` elemanı `Y` gönderilmezse bu elaman dolu olsa dahi SMS gönderilmez.
**SMM_PROPERTIES.EMAIL_FLAG** | String  | Hayır | Belge alıcısına e-posta olarak gönderilip gönderilmeyeceğinin belirlendiği parametredir. E-Posta göndermek istenilen durumda `Y` değeri gönderilmelidir. Eleman gönderilmezse `EMAIL` alanı dolu olsa dahi e-posta gönderilmez. ** DİKKAT: Eğer müşterinin özel entegratör ile e-posta gönderme hizmeti sözleşmesi yoksa ve `Y` değeri gönderilirse belgenin sisteme yüklenmesine izin verilmeyecektir. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmeti satın alınmalı veya  e-posta gönderiminin farklı bir kanaldan müşteri tarafından yapılması gerekmektedir. Bu durumda bu parametre gönderilmemeli veya `N` olarak gönderilmelidir. **
**SMM_PROPERTIES.EMAIL** | String  | Hayır | Belgenin e-posta olarak iletileceği e-posta adresi. E-Posta formatında olmak zorundadır. E-Posta gönderimini özel entegratör sisteminden yapılması isteniyorsa `Y` değeri gönderilmelidir. Varsayılan değer `N` dir. `EMAIL_FLAG` alanı `Y` gönderildiği zaman bu elaman zorunludur. `EMAIL_FLAG` gönderilmemiş veya `N` değeri gönderilmişse bu elaman dolu olsa dahi e-posta gönderilmeyecektir.
**SMM_PROPERTIES.SENDING_TYPE** | String  | **Evet** | Belgenin yollanma şekli. `ELEKTRONIK` veya `KAGIT` olabilir. Gönderim şekli `ELEKTRONIK` olan belge SMS veya ePosta adresi olmak zorundadır
**SERIES_PROPERTIES** | ComplexType | Hayır | Belge numarasının özel entegratör tarafından atanmasının belirleyen parametredir. **Belge numarasının istemci tarafından atanmasını tavsiye ederiz.**
**SERIES_PROPERTIES.SERIES_FLAG** | String | Hayır | Belge numarasının özel entegratör tarafından atanması için `Y` değeri gönderilmelidir. DİKKAT: `SERIES_PREFIX` elemanında belirlenen ön ek ile belge numarası atanacak ve belge içerisinde ki değer ezilecektir.
**SERIES_PROPERTIES.SERIES_PREFIX** | String | Hayır | Belge numarası atanacak ön ek. 3 hane alfanumerik değer içermelidir. Belge numarası yönetimi hakkında daha detaylı bilgi almak için **Başlarken -> Belge Numarası Yönetimi** başlığını inceleyiniz. Belge numarasının özel entegratör tarafından atanması için `Y` değeri gönderilmelidir. DİKKAT: `SERIES_FLAG` elemanı `Y` değeri gönderilmemişse bu alan dolu olsa dahi belge numarası atanmayacaktır.



### Başarı Sonuç Nesnesi

Webservis işlem başarılı olduğunda response objesi içerisinde `REQUEST_RETURN` tipinde sonuç dönülecektir.

Servisten dönen hata sonuç nesnesi şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN** | ComplexType| İşlem sonucunu içeren başarılı sonuç objesi
**INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı işlemlerde `0` değeri döner. Başarısız olduğunda bu eleman dönülmez.
**INVOICE_ID** | String | Fatura numarası e-arşiv platformunda atanmışsa atanan fatura numarası dönülür.


### Hata Sonuç Nesnesi
Webservis metodunda hata oluşması durumunda response objesi içerisinde `ERROR_TYPE` tipinde sonuç dönülecektir.

Servisten dönen hata sonuç nesnesi şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ERROR_TYPE** | ComplexType| İşlem sonucunu içeren başarısız/hatalı sonuç objesi
**INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**ERROR_CODE** | String | Hata kodu. Hata kod detayları için ilgili servisteki hata kod listesini inceleyebilirsiniz.
**ERROR_SHORT_DESC** | String | Hatanın kısa açıklaması.
