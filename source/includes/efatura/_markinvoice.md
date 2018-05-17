## Fatura Okundu İşaretleme (MarkInvoice)
* E-Fatura sisteminde bir veya birden fazla faturayı alındı/alınmadı olarak işaretlemek için geliştirilmiş servistir.
* GetInvoice servisi ile müşteri ortamına başarı alınan faturaların tekrar sorgulandığında listede gelmemesi için MarkInvoice servisi ile alındı olarak işaretlenmeli.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**MARK.value** | String  | Hayır | Başarı ile alındıysa `READ` gönderilmeli. Daha önce alındı olarak işaretlenen bir faturayı tekrar çekmeden önce `UNREAD` olarak gönderilebilir.
**INVOICE.ID** | String  | Hayır | İşaretlenecek faturanın numarası. Örnek: FYA2018000000001
**INVOICE.UUID** | String  | Hayır | İşaretlenecek faturanın ETTNsi. GUID formatında olmalı.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
