## Taslak İrsaliye Yükleme (LoadDespatchAdvice)
* Özel entegratör platformu üzerinden 1 yada daha fazla irsaliyeyi sisteme yükler.
* Eğer irsaliye numarası atanmışsa (16 hane ise) şema ve şematron kontrolünden geçirilir. İrsaliye numarası atanmamışsa şema ve şematron kontrolü yapılmaz.
* Aynı İrsaliye tekrar taslaklara yüklenmesine müsade edilir. Farklı kayıt oluşturulmaz. Oluşan kayıt yeni içerik ile güncellenir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. İrsaliye sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` eleman eklenmeli ve `N` değeri gönderilmelidir.**
**DESPATCHADVICE** | ComplexType | **Evet** | İrsaliye numarasını `ID` attribute içerisine, Evrensel tekil tanımlama numarasını (ETTN) `UUID` attribute eklenmelidir.
**DESPATCHADVICE.CONTENT** | Base64Binary | Evet | İrsaliyenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Bir istek ile çoklu XML gönderimi yapılabilir. **Birden fazla irsaliye göndermek için DESPATCHADVICE elemanı çoklanmalıdır.**

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
