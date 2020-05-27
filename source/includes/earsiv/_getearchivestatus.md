## E-Arşiv Durum Sorgulama (GetEArchiveStatus)
Özel entegratör platformuna gönderilen bir veya birden çok faturanın durumunu sorgulamayı sağlayan servistir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**UUID** | String  | **Evet** | Durumu sorgulanacak faturanın Evrensel Tekil Tanımlama Numarası (ETTN). GUID formatında. **Birden fazla faturanın durumunu sorgulamak için bu parametre çoklanır.**
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

### E-Arşiv Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | KUYRUĞA EKLENDİ
105 | TASLAK OLARAK EKLENDİ
110 | İŞLENİYOR
120 | RAPORLANACAK
130 | RAPORLANDI
150 | RAPORLANMADAN İPTAL EDİLDİ. RAPORLANMAYACAK.
200 | FATURA ID BULUNAMADI


### E-Arşiv E-Posta Gönderim Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | HENÜZ İŞLENMEDİ
110 | İŞLENİYOR
120 | İŞLENDİ
130 | E-MAIL GÖNDERİM SONLANDI
