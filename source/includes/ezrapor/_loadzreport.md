## Z-Rapor Yükleme (LoadZReport)
* Özel entegratör sistemi üzerinden Z-Raporlarının GİB'e raporlanmasını sağlayan servistir.
* Toplu Z-Rapor yüklemek için `ZREPORT` parametresi çoklanabilir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**ZREPORT** | ComplexType   | **Evet** | En az bir Z-Rapor bulunmalıdır. Toplu gönderim için bu eleman çoklanır.
**ZREPORT.SUBE_KODU** | String  | Hayır | ÖKC kurulu olduğu şube numarası. Eğer şebeli yapı yoksa varsayılan şube kodu 001 olarak kaydedilir.
**ZREPORT.OKC_SICIL_NO** | String  | **Evet** | ÖKC Firma Kodu ile birlikte Cihaz Sicil No’su yazılacaktır. Örnek:LH0001
**ZREPORT.EKU_NO** | String  | **Evet** | ÖKC cihazına ait EKU numarası.
**** | String  | **Evet** | Mutabakat gönderilecek firmanın adresi.
**ZREPORT.ZRAPOR_NO** | String  | **Evet** | Z-Rapor numarası
**ZREPORT.ZRAPOR_TARIH** | String  | **Evet** | Z-Rapor tarihi. **Format: YYYY-MM-DD**
**ZREPORT.SATIS_TUTAR** | Decimal  | **Evet** |  Z-Raporda ki satış tutarı
**ZREPORT.VERGI_KDV** | Decimal  | **Evet** | Z-Raporda ki toplam KDV tutarı.
**ZREPORT.VERGI_OTV** | Decimal  | Hayır | Z-Raporda ki toplam OTV tutarı (Eğer varsa)
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.

### Z-Rapor Hata Kodları

Hata Kodu | Hata Açıklaması       
--------- | -----------
200	| EKSİK VEYA HATALI PARAMETRE (PARAMETRE ADI)
210	| YETKİ HATASI(xxx.xxx.xxx.xxx adresinin bu işleme yetkisi yoktur)
220	| GÜNLÜK İSTEK LİTİMİ AŞILDI
230	| BELGE SİSTEMDE MEVCUT ( ZRAPOR:XXXXX)
240	| BELGE KONTROL HATASI ()
