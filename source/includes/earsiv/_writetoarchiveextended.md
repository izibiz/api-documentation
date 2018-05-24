## E-Arşiv Fatura Gönderme (WriteToArchieveExtended)
* E-Arşiv faturalarını E-Arşiv sitemine yüklemek için kullanılan servistir.
* Bir istek içerisinde birden fazla fatura göndermek için ArchiveInvoiceExtendedContent elemanı çoklanmalıdır.
* Internet üzerinde yapılan satış için düzenlenen faturalarında e-arşiv tipi `INTERNET` olmak zorundadır. Diğerleri fatura tipleri için `NORMAL` olacaktır.
* Eğer E-Arşiv sisteminde müşterinin e-posta gönderme hizmeti yoksa ve e-posta gönderme seçeneği seçilmişse işlem hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmetini aktiflemesi talep edilmelidir. Eğer e-posta gönderimi farklı kanallardan yapılacaksa e-posta gönderim parametresini `N` olarak gönderiniz.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama |
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir.
**INVOICE_PROPERTIES.EARSIV_FLAG** | String  | **Evet** | E-Arşiv fatura için `Y` olmalıdır.
**INVOICE_PROPERTIES.EARSIV_PROPERTIES** | ComplexType  | Evet | E-Arşiv faturaları için kullanılabilecek parametreler
**EARSIV_PROPERTIES.EARSIV_TYPE** | String  | **Evet**| Gönderilen e-arşiv faturasının tipi: `NORMAL` veya `INTERNET` değerleri olabilir. Internet üzerinde yapılan satış için düzenlenen faturalarında e-arşiv tipi `INTERNET` olmak zorundadır. Diğerleri fatura tipleri için `NORMAL` olacaktır.
**EARSIV_PROPERTIES.EARSIV_EMAIL_FLAG** | String  | Hayır | E-Arşiv faturasının alıcı tarafa e-posta olarak gönderilmek isteniyorsa `Y` değeri gönderilmelidir. Varsayılan değer `N` dir. DİKKAT: Eğer E-Arşiv sisteminde müşterinin e-posta gönderme hizmeti yoksa `Y` değeri gönderilince hata alacaktır. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmetini aktiflemesi talep edilmelidir.
**EARSIV_PROPERTIES.EARSIV_EMAIL** | String  | Hayır | E-Arşiv faturasının iletileceği e-posta adresi. E-Posta formatında olmalıdır.  `EARSIV_EMAIL_FLAG= Y` olarak gönderilmişse bu alan zorunludur. DİKKAT: Eğer `EARSIV_EMAIL_FLAG` gönderilmemiş veya `N` olarak gönderilmişse bu alanda ki değer veritabanına kaydedilecek ama e-posta gönderilmeyecektir.
**EARSIV_PROPERTIES.SUB_STATUS** | String  | **Evet** | E-Arşiv faturası için `NEW` değeri gönderilmelidir.
**EARSIV_PROPERTIES.SERI** | String  | Hayır | Fatura numara atamasının E-Arşiv platformu üzerinde yapılması istenildiği durumlarda hangi seri ile numara atanacağını belirleyen alandır. Maksimum 3 hane alfanumerik değer içermelidir.  Gönderilecek seri önce portal ekranları kullanılarak e-arşiv sisteminde tanımlanmalıdır. Tanımlanmayan seri gönderildiğinde hata dönülecektir.
**EARSIV_PROPERTIES.ARCH_INVOICE_ID** | String  | Hayır | **Kullanmayınız**
**EARSIV_PROPERTIES.EARCHIVE_TEST_FLAG** | String  | Hayır | **Kullanmayınız**
**INVOICE_PROPERTIES.PDF_PROPERTIES** | ComplexType  | Hayır | E-Arşiv faturalara UBL-TR XML yanında üretilen PDF dosyasını da göndermek için kullanılacak parametredir.
**INVOICE_PROPERTIES.ARCHIVE_NOTE** | String  | Hayır | E-Arşiv faturalara not eklenebilecek parametredir.
**INVOICE_PROPERTIES.INVOICE_CONTENT** | Base64Binary | **Evet** | Faturanın UBL-TR formatında ki dosyasının Base64Binary tipinde sıkıştırılmış/ziplenmiş içeriği.
