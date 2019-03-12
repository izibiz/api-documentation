## Fatura Durum Sorgulama (GetInvoiceStatus)
* E-Fatura sisteminde bulunan taslak, gelen ve giden faturaların durumunu sorgulamayı sağlayan servistir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**INVOICE_UUID** | String | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) ile fatura okumak için kullanılabilir. 
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE_STATUS** | ComplexType | Sorgu kriterine uyan fatura(lar)ın listesi. Fatura numarası `ID`, fatura evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**INVOICE_STATUS.STATUS** | String | Faturanın e-fatura sisteminde ki durumu. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.STATUS_DESCRIPTION** | String | Fatura durum açıklaması. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_CODE** | String | Faturanın GİB'de ki durum kodu. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_DESCRIPTION** | String | Faturanın GİB'de ki durumunun kodunun açıklaması. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**INVOICE_STATUS.CDATE** | String | Faturanın e-fatura sistemine yüklendiği/ulaştığı tarih
**INVOICE_STATUS.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi. Taslak faturalar için eleman dönülmez.