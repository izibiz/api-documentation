## Fatura Okundu İşaretleme (MarkInvoice)
* E-Fatura sisteminde faturayı alındı/alınmadı olarak işaretlemek için geliştirilmiş servistir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**INVOICE_UUID** | String | **Hayır** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
**ACTION** | String | **Evet** | Başarı ile alındıysa `READ` gönderilmeli. Daha önce alındı olarak işaretlenen bir faturayı tekrar çekmeden önce `UNREAD` olarak gönderilebilir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.