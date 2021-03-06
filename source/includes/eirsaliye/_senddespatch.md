## E-İrsaliye Gönderme (SendDespatchAdvice)
* E-İrsaliye Platformu üzerinden 1 ya da daha fazla e-irsaliyeyi GIB (Gelir İdaresi Başkanlığı) E-İrsaliye
sistemine gönderir.
* E-İrsaliye gönderim esnasında hatalı duruma geçen irsaliyeler bu servis ile tekrar gönderilebilir.
* Bir alıcıya birden fazla irsaliye gönderilebilir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. İrsaliye sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` eleman eklenmeli ve `N` değeri gönderilmelidir.**
**SENDER** | String | Hayır | İrsaliye gönderen tarafın vergi kimlik numarasını `vkn` attribute içerisine, gönderici birim etiketini `alias` attribute eklenmelidir. Eğer eleman gönderilmezse oturum açılan kullanıcının bağlı olduğu hesapta ki VKN ve gönderici birim etiketi kullanılacaktır. **Sender elemanı gönderilmesini tavsiye ederiz.**
**RECEIVER** | String | **Evet** | **E-İrsaliye mükellefi** ise firmanın VKN/TCKNosunu `vkn` attribute içerisine, posta kutusu etiketini `alias` attribute içerisine eklenmelidir. Eğer **E-irsaliye mükellefi** değil ise GİB'de tanımlanan sanal etikete gönderileceği için `vkn` olarak GİB'in VKNsi (3900892152), posta kusutusu olarakta GİB'de **urn:mail:irsaliyepk@gib.gov.tr** değerini `alias` attribute içerisine eklenmelidir.
**DESPATCHADVICE.CONTENT** | Base64Binary | **Evet** | İrsaliyenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Bir istek ile çoklu XML gönderimi yapılabilir. **Birden fazla irsaliye göndermek için DESPATCHADVICE elemanı çoklanmalıdır.**



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


### Hata Kod Listesi

Hata Kodu |  Açıklama
--------- | -----------
-1    | Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
10001 | Sistemde Beklenmedik Bir Hata Oluştu: {HATA SEBEBİ}
10002 | Oturum oluşturulamadı
10003 | Belge Şematron Kontrolünden Geçemedi: {HATA SEBEBİ}
10004 | Geçersiz oturum. Lütfen tekrar oturum oluşturunuz ve tekrar deneyiniz
10005 | Hesabınızın {EIRSALIYE} ürün aktif degildir
10006 | Yetkiniz bulunmamaktadır
10007 | İstek ZİP bir dosya içermelidir
10008 | Belirtilen kriterlere uygun kayıt bulunamamıştır
10009 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. ID: ve UUID:
10010 | Bir istek  boyutu maksimum 5MB veya 100 adet belge  içerebilir
10011 | Tekrarlanan işlem: kayıt sistemde mevcuttur
10012 | Kullanıcı aktif degil {kullanıcı adı}
10013 | Gönderilen istek geçersizdir. Hata sebebi {0}
10014 | Geçersiz İmza
10015 | Servis desteklenmemektedir. Servis adı
10016 | Müşteri sistemde aktif degildir.
10017 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. ID: ve UUID:
10018 | Yetkisiz erişim tespit edildi! {HATA SEBEBİ}
