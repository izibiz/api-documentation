## E-İrsaliye Gönderme (SendDespatchAdvice)
* E-İrsaliye belgesini özel entegratör sistemlerine gönderilmesini sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**SENDER_VKN** | String | **Hayır** | Gönderenin VKNsi.
**SENDER_ALIAS** | String | **Hayır** | Gönderenin ünvanı.
**RECEIVER_VKN** | String | **Hayır** | Alıcının VKNsi.
**RECEIVER_ALIAS** | String | **Hayır** | Alıcının ünvanı.
**COMPRESSED** | String | **Hayır** | İrsaliye contentini nasıl alınacağını belirler. `Y` değeri için sıkıştırılmış, `N` değeri için sıkıştırılmamış contenti verir.
**CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Eğer belgeyi ziplemeden/sıkıştırmadan göndermek istiyorsanız `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.