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
**RECEIVER** | String | Hayır | İrsaliye alan tarafının vergi kimlik numarasını `vkn` attribute içerisine, posta kutusu etiketini `alias` attribute içerisine eklenmelidir. Eğer eleman gönderilmezse fatura içerisinde ki alıcı taraf (AccountingCustomerParty) içerisinde ki VKN ve o VKN için tanımlanmış herhangi bir posta kutusu etiketi kullanılacaktır. **Receiver elemanı gönderilmesini tavsiye ederiz. Özellikle alıcı tarafından posta kutusu tercihi talep edilmişse bu eleman kullanılmalıdır.**
**DESPATCHADVICE.CONTENT** | Base64Binary | **Evet** | İrsaliyenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Bir istek ile çoklu XML gönderimi yapılabilir. **Birden fazla irsaliye göndermek için DESPATCHADVICE elemanı çoklanmalıdır.**


<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
