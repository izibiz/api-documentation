## Fatura Durum Sorgulama (GetInvoiceStatus)
* E-Fatura sisteminde bulunan bir veya birden fazla taslak, gelen ve giden faturaların durumunu sorgulamayı sağlayan servistir.


<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**INVOICE.ID** | String  | Hayır | Durumu sorgulanacak faturanın 16 hane fatura numarası. örnek: FYA2018000000001 **Eğer UUID elemanı gönderilmezse zorunludur.**
**INVOICE.UUID** | String  | Hayır | Durumu sorgulanacak faturanın GUID formatında ETTN değeri. **Eğer ID elemanı gönderilmezse zorunludur.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE_STATUS** | ComplexType | Sorgu kriterine uyan fatura(lar)ın listesi. Fatura numarası `ID`, fatura evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**INVOICE_STATUS.STATUS** | String | Faturanın e-fatura sisteminde ki durumu. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.STATUS_DESCRIPTION** | String | Fatura durum açıklaması. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_CODE** | String | Faturanın GİB'de ki durum kodu. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_DESCRIPTION** | String | Faturanın GİB'de ki durumunun kodunun açıklaması. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**INVOICE_STATUS.RESPONSE_CODE** | String | Ticari fatura için verilen yanıtı içeren zarfın durum kodu. Eğer faturanın senaryosu TICARIFATURA değilse eleman dönülmez.
**INVOICE_STATUS.RESPONSE_DESC** | String | Ticari fatura için verilen yanıtı içeren zarfın durum açıklaması. Eğer faturanın senaryosu TICARIFATURA değilse eleman dönülmez.         
**INVOICE_STATUS.CDATE** | String | Faturanın e-fatura sistemine yüklendiği/ulaştığı tarih
**INVOICE_STATUS.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi. Taslak faturalar için eleman dönülmez.

## Çoklu Fatura Durum Sorgulama - (GetInvoiceStatusAll)
<aside class="warning">
BU METOD DESTEKLENMEMEKTEDİR. LÜTFEN KULLANMAYINIZ.
</aside>
