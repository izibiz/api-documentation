## E-Arşiv Fatura Gönderme (WriteToArchieveExtended)
* E-Fatura mükellefi olmayan firmalara veya nihai tüketicilere düzenlenen faturaların özel entegratör sistemine gönderilmesini sağlayan servistir.
* Bir istek içerisinde birden fazla fatura göndermek için **ArchiveInvoiceExtendedContent** elemanı çoklanmalıdır.
* Internet üzerinde yapılan satış için düzenlenen faturalarında e-arşiv tipi `INTERNET` olmak zorundadır. Diğer faturalar için `NORMAL` olacaktır.
* Eğer E-Arşiv sisteminde müşterinin e-posta gönderme hizmeti yoksa ve e-posta gönderme seçeneği seçilmişse işlem hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmetini aktiflemesi talep edilmelidir. Eğer e-posta gönderimi farklı kanallardan yapılacaksa e-posta gönderim parametresini `N` olarak gönderiniz.


<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama |
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir.
**INVOICE_PROPERTIES.EARSIV_FLAG** | String  | **Evet** | E-Arşiv fatura için `Y` olmalıdır.
**INVOICE_PROPERTIES.EARSIV_PROPERTIES** | ComplexType  | **Evet** | E-Arşiv faturaları için kullanılabilecek parametreler
**EARSIV_PROPERTIES.EARSIV_TYPE** | String  | **Evet** | Gönderilen e-arşiv faturasının tipi: `NORMAL` veya `INTERNET` değerleri olabilir. Internet üzerinde yapılan satış için düzenlenen faturalarında e-arşiv tipi `INTERNET` olmak zorundadır. Diğerleri fatura tipleri için `NORMAL` olacaktır.
**EARSIV_PROPERTIES.SUB_STATUS** | String  | **Evet** | Varsayılan değer `NEW`. E-Arşiv faturasını göndermek için `NEW` değeri gönderilmelidir. Taslaklara yüklemek için ise `DRAFT` değeri gönderilebilir.
**EARSIV_PROPERTIES.SERI** | String  | Hayır | Fatura numara atamasının E-Arşiv platformu üzerinde yapılması istenildiği durumlarda hangi seri ile numara atanacağını belirleyen alandır. Maksimum 3 hane alfanumerik değer içermelidir.  Gönderilecek seri önce portal ekranları kullanılarak e-arşiv sisteminde tanımlanmalıdır. Tanımlanmayan seri gönderildiğinde hata dönülecektir.
**EARSIV_PROPERTIES.EARSIV_EMAIL_FLAG** | String  | Hayır | E-Arşiv faturasının alıcı tarafa e-posta olarak gönderilmek isteniyorsa `Y` değeri gönderilmelidir. Varsayılan değer `N` dir. DİKKAT: Eğer E-Arşiv sisteminde müşterinin e-posta gönderme hizmeti yoksa `Y` değeri gönderilince hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmetini aktiflemesi talep edilmelidir.
**EARSIV_PROPERTIES.EARSIV_EMAIL** | String  | Hayır | E-Arşiv faturasının iletileceği e-posta adresi. E-Posta formatında olmalıdır.  `EARSIV_EMAIL_FLAG= Y` olarak gönderilmişse bu alan zorunludur. DİKKAT: Eğer `EARSIV_EMAIL_FLAG` gönderilmemiş veya `N` olarak gönderilmişse bu alanda ki değer veritabanına kaydedilecek ama e-posta gönderilmeyecektir.
**EARSIV_PROPERTIES.EARSIV_SMS_FLAG** | String  | Hayır | E-Arşiv faturasının alıcıya özel entegratör sistemi üzerinden SMS olarak göndermek isteniyorsa `Y` değeri gönderilmelidir. Varsayılan değer `N` dir. DİKKAT: Eğer E-Arşiv sisteminde müşterinin SMS gönderme hizmeti yoksa `Y` değeri gönderilince hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek SMS gönderim hizmetini aktiflemesi talep edilmelidir.
**EARSIV_PROPERTIES.SMS_PHONE_NUMBER** | String  | Hayır | E-Arşiv faturasının iletileceği 10 hane telefon numarası. **Format: 1234567890**. Telefon numarasının başında 0 olmadığına dikkat ediniz.  `EARSIV_SMS_FLAG= Y` olarak gönderilmişse bu alan zorunludur. DİKKAT: Eğer `EARSIV_SMS_FLAG` gönderilmemiş veya `N` olarak gönderilmişse bu alanda ki değer veritabanına kaydedilecek ama SMS gönderilmeyecektir.
**EARSIV_PROPERTIES.EARCHIVE_TEST_FLAG** | String  | Hayır | **Kullanmayınız** Kullanım sonlandırılmıştır.
**EARSIV_PROPERTIES.ARCH_INVOICE_ID** | String  | Hayır | **Kullanmayınız** Kullanım sonlandırılmıştır.
**EARSIV_PROPERTIES.EARCHIVE_TEST_FLAG** | String  | Hayır | **Kullanmayınız** Kullanım sonlandırılmıştır.
**INVOICE_PROPERTIES.PDF_PROPERTIES** | ComplexType  | Hayır | **Kullanmayınız** Kullanım sonlandırılmıştır.
**INVOICE_PROPERTIES.ARCHIVE_NOTE** | String  | Hayır | E-Arşiv faturalara not eklenebilecek parametredir.
**INVOICE_PROPERTIES.INVOICE_CONTENT** | Base64Binary | **Evet** | Faturanın UBL-TR formatında ki dosyasının Base64Binary tipinde sıkıştırılmış/ziplenmiş içeriği.


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


## Hata Kod Listesi
Hata Kodu |  Açıklama
--------- | -----------
-1    | Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.: {HATA SEBEBİ}
10001 | Sistemde Beklenmedik Bir Hata Oluştu: {HATA SEBEBİ}
10002 | Oturum oluşturulamadı
10003 | Belge kontrolden geçemedi. Hata sebebi: {HATA SEBEBİ}
10004 | Geçersiz oturum. Lütfen oturum açıp tekrar deneyiniz
10005 | Hesabınızın {ÜRÜN ADI} ürün aktif degildir. Lütfen firma yetkiliniz ile görüşünüz.
10006 | Yetkiniz bulunmamaktadır
10007 | İstek ZİP bir dosya içermelidir
10008 | Belirtilen kriterlere uygun kayıt bulunamamıştır {KRITER}
10009 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. Belge Tipi: Belge No: ve ETTN:
10010 | Bir istek  boyutu maksimum 5MB veya 100 adet belge  içerebilir
10011 | Tekrarlanan işlem: kayıt sistemde mevcuttur
10012 | Kullanıcı aktif degil {kullanıcı adı}
10013 | Gönderilen istek geçersizdir. Hata sebebi {HATA SEBEBİ}
10014 | Geçersiz İmza Hata Sebebi: {HATA SEBEBİ}
10015 | Servis desteklenmemektedir. Servis adı
10016 | Müşteri sistemde aktif degildir.
10017 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. ID: ve UUID:
10018 | Yetkisiz erişim tespit edildi! {HATA SEBEBİ}
