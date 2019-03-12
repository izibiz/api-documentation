## Fatura Gönderme(SendInvoice)
* Fatura Entegrasyon Platformu üzerinden faturayı GIB (Gelir İdaresi Başkanlığı) EFATURA sistemine gönderir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**SENDER_VKN** | String | **Hayır** | Göndericinin VKNsi.
**SENDER_ALIAS** | String | **Hayır** | Göndericinin ünvanı.
**RECEIVER_VKN** | String | **Hayır** | Alıcının VKNsi.
**RECEIVER_ALIAS** | String | **Hayır** | Alıcının ünvanı.
**INVOICE_CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş içeriği.
**COMPRESSED** | String | **Hayır** | Binary Fatura içeriği sıkıştırılmış/sıkıştırılmamış bilgisi. Varsayılan değer Y olduğu için gönderilmediği durumda fatura sıkıştırılarak/ziplenerek gönderilmesi beklenmektedir. **Faturayı XML olarak göndermek için mutlaka eleman eklenmeli ve N değeri gönderilmelidir.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.