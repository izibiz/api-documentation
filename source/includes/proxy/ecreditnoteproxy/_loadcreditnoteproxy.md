## Taslak E-Mustahsil Yükleme (LoadCreditNote)
* Taslak E-Müstahsil Makbuzu belgelerini yüklemek için kullanılan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**COMPRESSED** | String | **Hayır** | Belge sıkıştırılarak/ziplenerek gönderiliyorsa değer verilmeyebilir veya `Y` olarak gönderilebilir. XML formatında sıkıştırılmadan yüklemek için `N` değeri gönderilmelidir.
**ID** | String | **Hayır** | Yüklenecek taslağın ID değeri.
**UUID** | String | **Hayır** | Yüklenecek taslağın UUID değeri.
**CREDIT_NOTE_CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Eğer belgeyi ziplemeden/sıkıştırmadan göndermek istiyorsanız `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.