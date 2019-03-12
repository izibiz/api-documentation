## E-Arşiv Fatura Gönderme (SendEArchiveInvoice)
* E-Arşiv Fatura belgesini özel entegratör sistemlerine gönderilmesini sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**EARSIV_EMAIL_FLAG** | String | **Evet** | Belge alıcısına e-posta olarak gönderilip gönderilmeyeceğinin belirlendiği parametredir. E-Posta göndermek istenilen durumda `Y` değeri gönderilmelidir.
**EARSIV_EMAIL** | String | **Hayır** | Belgenin e-posta olarak iletileceği e-posta adresi. E-Posta formatında olmak zorundadır. `EARSIV_EMAIL_FLAG` parametresi `N` verilirse, değer verilse bile dikkate alınmaz. **Format: archive@firma.com.tr** 
**EARSIV_TYPE** | Enum | **Evet** | E-Arşiv Faturanın tipi. `INTERNET` veya `NORMAL` girilir.
**CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş içeriği.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.