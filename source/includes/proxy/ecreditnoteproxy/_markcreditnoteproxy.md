## E-Mustahsil Okundu İşaretleme (MarkCreditNote)
* E-Müstahsil Makbuzu belgelerini okundu/okunmadı olarak işaretlemek için kullanılan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**UUID** | String | **Hayır** | İşaretlenecek belgenin Evrensel Tekil Tanımlama Numarası.
**MARK_VALUE** | String | **Hayır** | Başarı ile alındıysa `READ` gönderilmeli. Daha önce alındı olarak işaretlenen bir faturayı tekrar çekmeden önce `UNREAD` olarak gönderilebilir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.