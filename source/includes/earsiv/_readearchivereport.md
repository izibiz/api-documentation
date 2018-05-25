## E-Arşiv Rapor Çekme (ReadEArchiveReport)
Mükellef için GİB'e gönderilen raporun imzalı XML dosyasını okumayı sağlayan servistir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**RAPOR_ID** | String  | **Evet** | Detay/içeriği çekilecek raporun IDsi. Rapor IDsine GetEArchiveReport servisini kullanarak erişebilirsiniz.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**EARCHIVEREPORT** | Base64Base64Binary | GİB'e gönderilen raporun imzalı XML dosyasının sıkıştırılmış/ziplenmiş dosyası.
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.
