## Fatura Gönderme (SendInvoice)
* FATURA Entegrasyon Platformu üzerinden 1 yada daha fazla faturayı GIB (Gelir İdaresi Başkanlığı) EFATURA sistemine gönderir.
* Bu işlemden sonra gönderilen faturaların durumları GetInvoiceStatus servisi ile kontrol edilmelidir.
* Faturanın durumu GIB’de hatalı olduğu zaman bu servis ile faturayı aynı fatura numarası ve aynı ETTN ile tekrar gönderilebilir.
* Fatura yüklenirken fatura şema ve şematron kontrolü ve tekillik kontrolünden geçirilir. Fatura XML içerisinde hata varsa sisteme yüklenmez. Fatura XML içerisinde ki sorun düzeltilerek tekrar gönderilmelidir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER.SESSION_ID** | String | **Evet** | Request Header objesi içerisinde bulunan SESSION_ID gönderilmelidir.
**REQUEST_HEADER.COMPRESSED** | String | Hayır | Binary Fatura içeriği sıkıştırılmış/sıkıştırılmamış bilgisi. Varsayılan değer Y olduğu için gönderilmediği durumda fatura sıkıştırılarak/ziplenerek gönderilmesi beklenmektedir. **Faturayı XML olarak göndermek için mutlaka eleman eklenmeli ve N değeri gönderilmelidir.**
**SENDER** | String | Hayır | Faturayı gönderen tarafın vergi kimlik numarasını `vkn` attribute içerisine, gönderici birim etiketini `alias` attribute eklenmelidir. Eğer eleman gönderilmezse oturum açılan kullanıcının bağlı olduğu hesapta ki VKN ve gönderici birim etiketi kullanılacaktır. **Sender elemanı gönderilmesini tavsiye ederiz.**
**RECEIVER** | String | Hayır | Faturanın alıcı tarafının vergi kimlik numarasını `vkn` attribute içerisine, posta kutusu etiketini `alias` attribute içerisine eklenmelidir. Eğer eleman gönderilmezse fatura içerisinde ki alıcı taraf (AccountingCustomerParty) içerisinde ki VKN ve o VKN için tanımlanmış herhangi bir posta kutusu etiketi kullanılacaktır. **Receiver elemanı gönderilmesini tavsiye ederiz. Özellikle alıcı tarafından posta kutusu tercihi talep edilmişse bu eleman kullanılmalıdır.**
**INVOICE.CONTENT** | Array | **Evet** | Faturanın Base64Binary tipinde XML veya Ziplenmiş içeriği. Bir istek ile çoklu fatura gönderimi yapılabilir. **Birden fazla fatura göndermek için INVOICE elemanı çoklanmalıdır.**


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


### Hata Kodları
Hata Kodu |  Açıklama
--------- | -----------
-1    | Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
10001 | Sistemde Beklenmedik Bir Hata Oluştu: {HATA SEBEBİ}
10002 | Oturum oluşturulamadı
10003 | Belge Şematron Kontrolünden Geçemedi: {HATA SEBEBİ}
10004 | Geçersiz oturum. Lütfen tekrar oturum oluşturunuz ve tekrar deneyiniz
10005 | Hesabınızın {ÜRÜN ADI} ürün aktif degildir
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
