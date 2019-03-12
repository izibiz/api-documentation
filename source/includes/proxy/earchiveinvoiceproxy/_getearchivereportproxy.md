## E-Arşiv Rapor Listesini Çekme (GetEArchiveReport)
* E-Arşiv Fatura raporların dönem bilgisi kullanılarak çekilmesini sağlar.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**RAPOR_DONEMI** | String | **Evet** | Rapor listesinin alınmak istenilen dönem bilgisi. **Format: 201805**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REPORT** | Complex | Dönem için oluşturulan raporların listesi.
**REPORT.REPORT_NO** | String | Raporun numarası GUID formatında.
**REPORT.STATUS** | String | Raporun durumu. İşlenmiş rapor durumu `SUCCEED` olur.
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.


