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

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
**INVOICE_ID** | String | Fatura numarası e-arşiv platformunda atanmışsa atanan fatura numarası. Eğer fatura numarası dışarıdan atanmışsa gönderilen faturanın numarası.
