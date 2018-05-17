##  Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign)
* E-Fatura sisteminde bulunan bir veya birden fazla gelen ticari faturaya uygulama yanıtı göndermeyi sağlayan servistir.
* Belgelerinin **imzalanmasını Özel Entegratör'e devretmiş** müşteriler için uygulama yanıtların e-fatura platformunda imzalanarak gönderilmesini sağlamak için hazırlanmıştır.
* Bir faturaya en fazla 1 defa yanıt gönderilebilmektedir.
* Yanıt gönderilmiş faturalara tekrar yanıt gönderilmesi istemci tarafında kısıtlanmalıdır.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**STATUS** | String | Evet | Faturaya verilecek yanıt. `KABUL` veya `RED` değeri alabilir.
**INVOICE** | ComplexType | Evet | Yanıt gönderilecek fatura listesi
**DESCRIPTION** | String | Evet | Yanıt ile beraber gönderilecek mesaj. Ret edilen faturalar için `Red Sebebi` bu alana yazılabilir. `STATUS` KABUL ise ve bu alan gönderilmezse *Fatura kabul edildi*, `STATUS` RED ise **Reddedildi** mesajı varsayılan olarak eklenecektir.

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | İşlem başarılı ise `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
<br>
### Servisten Dönebilecek Hatalar

Hata Açıklaması | Açıklama     
---------------- | -----------
Daha önce yanıtlanmış bir fatura için tekrar yanıt gönderilemez! Fatura UUID:xxxxxxx | Bir faturaya en fazla 1 defa yanıt gönderilebilmektedir. **Bundan dolayı yanıt gönderilmiş faturalara tekrar yanıt gönderilmesi istemci tarafında kısıtlanmalıdır.**
Fatura ID : FYA201800000001 sistemde bulunamadı! | E-Fatura sisteminde gelen fatura kutusunda bulunmayan bir faturaya uygulama yanıtı gönderme yapıldığı zaman dönülmektedir. Özellikle birden fazla hesabı olan firmalarda, erişim yetkisi olan bir kullanıcı tarafından istemciye indirilen bir faturaya, faturaya erişim yetkisi olmayan bir kullanıcı tarafından yanıt gönderilince karşılaşılmaktadır.
Uygulama yanıtı 8 gün geciktiği için cevap gönderilemez | Ticari fatura özel entegratör sistemine ulaştıktan sonra 8 gün içerisinde yanıtlanmalıdır. İstemci 8 günü geçen faturalar için kontrol eklemelidir. 8 günü hesaplamak için GetInvoice servisinde fatura için dönülen CDATE alanına 8 gün eklenebilir.
Fatura durumu yanıtlama için uygun olmadıgından işlem sonlandı! Fatura UUID:XXX-XXX-, STATUS:XXXXX-XXXXX | Uygulama yanıtı gönderilmiş ve hala süreci tamamlanmamış bir faturaya tekrar yanıt gönderildiğinde dönülen hatadır.

<br><br>



## Uygulama Yanıtı Hazırlama (PrepareInvoiceResponse) - Kullanmayınız
<aside class="warning">
Bu servis kullanımı sonlandırılmıştır. Lütfen Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign) başlığını inceleyiniz.
</aside>

## Uygulama Yanıtı Gönderme - İmzalı  (SendInvoiceResponse)
<aside class="warning">
Bu servis uygulama yanıtını kendi mali mühürü ile hazırlayıp göndermek isteyenler için hazırlanmıştır. Eğer belgelerinizin imzalanmasını Özel Entegratör'e devretmişseniz bu servisi kullanmayınız. Lütfen  Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign) başlığını inceleyiniz.
</aside>

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**APPRESPONSE** | Base64Binary  | Evet | ApplicationResponse formatında hazırlanmış ve imzalanmış uygulama yanıtının Base64Binary encode edilmiş değeri. Uygulama yanıtı hazırlamak için GİB kılavuzunda paylaşılan Uygulama Yanıtı dokümanı inceleyebilirisiniz.
br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | İşlem başarılı ise `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
