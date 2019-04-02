## Borç Sorgulama (GetBalance)
* Özel entegratör sistemi üzerinden borç durumunun sorgulandığı servistir.
* `BALANCE_DETAIL_FLAG` parametresi kullanılarak borç detayı sorgulanabilinir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**BALANCE_DETAIL_FLAG** | Enum   | **Hayır** | Borç bilgisine dair detay istenmesi veya istenmemesi. `Y` ve `N` değerleri alır. Değer verilmemesi durumunda `N` olarak kabul edilir.

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TOTAL_BALANCE** | String | Toplam borç tutarı.
**INVOICE_COUNT** | String | Borçlu olunan fatura sayısı.
**MESSAGE** | String | Borç bilgisine dair dönülen mesaj.
**BALANCE_DETAIL** | ComplexType | Borçlu olunan faturaları içerisinde bulundurur.
**BALANCE_DETAIL.INVOICE** | ComplexType | Borçlu olunan faturalara dair detayı içerisinde bulundurur.
**INVOICE.INVOICE_NO** | String | Borçlu olunan faturanın numarası.
**INVOICE.INVOICE_DATE** | String | Borçlu olunan fatura tarihi.
**INVOICE.PERIOD** | String | Borçlu olunan faturanın yer aldığı ay/yıl değeri.
**INVOICE.PAYABLE_AMOUNT** | String | Ödenmesi gereken tutar.
