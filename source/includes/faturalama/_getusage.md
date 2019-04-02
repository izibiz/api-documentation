## Kullanım Sorgulama (GetUsage)
* Özel entegratör sistemi üzerinden kullanım tutarlarının sorgulandığı servistir.
* `PERIOD` parametresi ile özel bir perioda dair sorgulama yapılabilinir.
* `PRODUCT_TYPE` ile sadece seçtiğiniz ürüne dair kullanım detaylarını görebilirsiniz.
* `DIRECTION` parametresi ile seçtiğiniz ürünün gelen, giden veya hem gelen hem giden toplam kullanımını inceleyebilirsiniz.
* `EARSIV`, `ESMM`, `EMM`, `EMUTABAKAT`, `SMS` ve `MAIL` kullanımları sadece gönderim yapıldığından, sorgulanırken `DIRECTION` parametresi `INBOX` verilemez. 


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**PERIOD** | String | **Hayır** | Kullanım sorgulanacak ay/yıl değeri girilir. Değer girilmediği zaman son 6 aylık kullanımlar dönülür. **Format : 122018**
**PRODUCT_TYPE** | Enum | **Hayır** | Kullanımı sorgulanmak istenen ürün bilgisi girilir. **Alabileceği değerler :** `ALL`, `EFATURA`, `EARSIV`, `EIRSALIYE`, `ESMM`, `EMM`, `EMUTABAKAT`, `SMS` ve `MAIL`.
**DIRECTION** | Enum | **Evet** | Kullanımı sorgulanmak istenen ürünün hangi yönde gönderildiği bilgisi girilir. **Alabileceği değerler :** `ALL`, `INBOX` ve `OUTBOX`.

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**LAST_PROCESS_TIME** | ComplexType | Kullanımları bulunduran yapıdır.
**LAST_PROCESS_TIME.USAGE** | ComplexType | Kullanım aylarını bulunduran yapıdır.
**USAGE.PERIOD** | String | Kullanımların ait olduğu ay/yıl değeridir.
**USAGE.TOTAL_USAGE** | String | Tüm ürünlerin o ay içerisindeki toplam kullanım adetidir.
**USAGE.PRODUCT** | ComplexType | Ürünlere göre kullanım adetlerinin tutulduğu yapıdır.
**PRODUCT.EFATURA** | String | E-Fatura kullanım adeti.
**PRODUCT.EARSIV** | String | E-Arşiv Fatura kullanım adeti.
**PRODUCT.EIRSALIYE** | String | E-İrsaliye kullanım adeti.
**PRODUCT.ESMM** | String | E-Serbest Meslek Makbuzu kullanım adeti.
**PRODUCT.EMM** | String | E-Müstahsil Makbuzu kullanım adeti.
**PRODUCT.EMUTABAKAT** | String | E-Mutabakat kullanım adeti.
**PRODUCT.SMS** | String | Sms kullanım adeti.
**PRODUCT.MAIL** | String | Mail kullanım adeti.
