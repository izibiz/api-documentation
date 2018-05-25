## Taslak Fatura Yükleme (LoadInvoice)
* FATURA Entegrasyon Platformu üzerinden 1 yada daha fazla faturayı E-Fatura sistemine yükler.
* Eğer fatura numarası atanmışsa (16 hane ise) şema ve şematron kontrolünden geçirilir. Fatura numarası atanmamışsa şema ve şematron kontrolü yapılmaz.
* Aynı faturanın tekrar yüklenmesine müsade edilir. Farklı kayıt oluşturulmaz. Oluşan kayıt yeni içerik ile güncellenir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Fatura sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **Faturayı XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` eleman eklenmeli ve `N` değeri gönderilmelidir.**
**INVOICE.CONTENT** | Array | Evet | Faturanın Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Bir istek ile çoklu fatura gönderimi yapılabilir. **Birden fazla fatura göndermek için INVOICE elemanı çoklanmalıdır.**

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı durumlarda 0 değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
