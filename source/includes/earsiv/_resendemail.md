## E-Arşiv Faturasını E-Posta Olarak Tekrar Gönderme (GetEmailEarchiveInvoice)
* E-Arşiv faturasını yükledikten sonra e-posta olarak aynı veya farklı e-postalara tekrar gönderilmesini sağlayan servistir.
* Birden fazla e-postaya göndermek için virgül (,) ile ayırarak gönderilmelidir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**FATURA_UUID** | String  | **Evet** | E-Posta olarak iletilecek faturanın Evrensel Tekil Tanımlama Numarası (ETTN). GUID formatında.
**FATURA_ID** | String  | Hayır | **Kullanılmamaktadır**
**EMAIL** | String  | **Evet** |E-Arşiv faturasının iletileceği e-posta adresi. E-Posta formatında olmalıdır. Birden fazla e-postaya göndermek için virgül (,) ile ayırarak gönderilmelidir.

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.

### E-Arşiv Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | KUYRUĞA EKLENDİ
105 | TASLAK OLARAK EKLENDİ
110 | İŞLENİYOR
115 | İŞLENİYOR
120 | İŞLENDİ
130 | RAPORLANDI
200 | FATURA ID BULUNAMADI

### E-Arşiv E-Posta Gönderim Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | HENÜZ İŞLENMEDİ
110 | İŞLENİYOR
120 | İŞLENDİ
130 | E-MAIL GÖNDERİM SONLANDI
