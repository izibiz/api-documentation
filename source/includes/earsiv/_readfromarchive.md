## E-Arşiv Fatura Okuma (ReadFromArchive)
Özel entegratör sistemine gönderilen e-arşiv faturalarının farklı formatlarda (XML,HTML,PDF) okumasını sağlayan servistir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir.
**INVOICE_ID** | String  | **Evet** |  Evrensel Tekil Tanımlama Numarası (ETTN) ile fatura okumak için kullanılabilir.  GUID formatında
**PORTAL_DIRECTION** | String  | **Evet** | `OUT` değeri gönderilecek.
**EXTERNAL_ID** | String  | Hayır | **Kullanmayınız**
**PROFILE** | String  | Evet | faturayı almak istediğini formattır. PDF, HTML, XML değeri alabilir. XML değeri gönderilmezse faturanın imzalı UBL-TR XML dosyası dönülecektir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE** | Base64Binary | Faturanın talep edilen formatta ki içeriği. Eğer `COMPRESSED` elemanı `N` olarak gönderilmişse sıkıştırılmamış, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş olarak dönülür. Sonuç alındıktan sonra ilgili formatta işlem yapılabilir.
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.

<br>
Servisten Dönebilecek Hatalar


Hata Açıklaması |  Açıklama     
---------------- |  -----------
Fatura okunurken hata oluştu..Okumaya çalıştığınız UUID: xxxxxxx ile fatura bulunmadı... | webservis isteğinde zorunlu olan bir veya birden fazla parametre eksik gönderilmiştir.
