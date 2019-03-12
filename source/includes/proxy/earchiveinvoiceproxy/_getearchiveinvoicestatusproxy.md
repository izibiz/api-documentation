## E-Arşiv Fatura Durum Sorgulama (GetEArchiveInvoiceStatus)
* Özel entegratör platformundan E-Arşiv Fatura belgelerinin durumunu okumayı sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**UUID** | String | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE.HEADER** | ComplexType | Kritere uyan faturaların durumlarınını içeren objedir.
**HEADER.INVOICE_ID** | String | Fatura numarası
**HEADER.UUID** | String | Faturanın Evrensel Tekil Tanımlama Numarası (ETTN)
**HEADER.PROFILE** | String | Faturanın senaryosu (`EARSIVFATURA`)
**HEADER.INVOICE_DATE** | String | Fatura tarihi
**HEADER.STATUS** | String | Fatura durumu kodu. **Lütfen E-Arşiv Durum başlığını inceleyiniz.**
**HEADER.STATUS_DESC** | String | Faturanın durum açıklaması **Lütfen E-Arşiv Durum başlığını inceleyiniz.**
**HEADER.EMAIL_STATUS** | String | E-Posta gönderim durum kodu. **Lütfen E-Arşiv E-Posta Durum başlığını inceleyiniz.**
**HEADER.EMAIL_STATUS_DESC** | String | E-Posta gönderim durum açıklaması. **Lütfen E-Arşiv E-Posta Durum başlığını inceleyiniz.**
**HEADER.REPORT_ID** | String | Faturanın GİB'e gönderilen rapor numarası. Raporlanmamış faturalarda parametre dönülmez.
**HEADER.WEB_KEY** | String | Fatura alıcısının e-arşiv platformu üzerinden ulaşabileceği URL.
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.