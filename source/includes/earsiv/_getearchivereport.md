## E-Arşiv Rapor Listesini Çekme (GetEArchiveReport)
* E-Arşiv platformunda mükellefe ait oluşturulan bir döneme ait rapor listesini almak için kullanılır. Servisin döndüğü raporlara ait içerikleri almak için ReadEArchiveReport servisi kullanılır.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**REPORT_PERIOD** | String  | **Evet** | Rapor listesinin alınmak istenilen dönem bilgisi. Örnek: Mayıs 2018 dönemi için 201805
**REPORT_STATUS_FLAG** | String  | Hayır | Rapor durumunun sonuca eklenmesi isteniyorsa `Y`, değilse `N` değeri  gönderilmelidir.


<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REPORT** | ComplexType | Dönem için oluşturulan raporların listesi. Birden fazla rapor varsa REPORT objesi çoklu olur.
**REPORT.REPORT_NO** | String | Raporun numarası GUID formatında
**REPORT.STATUS** | String | Raporun durumu. İşlenmiş rapor durumu `SUCCEED` olur.
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.
