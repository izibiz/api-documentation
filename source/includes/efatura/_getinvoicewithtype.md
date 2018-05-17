## Fatura Görsel Okuma (GetInvoiceWithType)
* E-Fatura sisteminden bulunan bir faturanın görselini çekmek için tasarlanmış servistir.
* Faturaların HTML ve PDF görsellerini çekebilirsiniz.
* Fatura görseli içerisinde ki XSLT ile yapılacaktır. Eğer fatura içerisinde ki şablonda sorun varsa hata fırlatılacaktır.
* İçerik sıkıştırılmış olarak dönülmektedir. İstemciye çektikten sonra unzip edilmelidir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. **Bu serviste `COMPRESSED` elemanı dikkate alınmamaktadır.**   Talep edilen formatta sıkıştırılmış/ziplenmiş olarak dönülecektir. İstemciye çektikten sonra unzip edilmelidir.
**SEARCH_KEY.ID** | String  | Hayır | Fatura numarası ile fatura okumak için kullanılabilir. örnek FYA2018000000001 `UUID` elamanı gönderilmemişse zorunludur.
**SEARCH_KEY.UUID** | String  | Hayır | Fatura Evrensel Tekil Tanımlama Numarası (ETTN) ile fatura okumak için kullanılabilir. `ID` elamanı gönderilmemişse zorunludur.
**SEARCH_KEY.TYPE** | String  | Evet | Faturanın çekilmek istenilen tipi: PDF, HTML, XML olabilir.
**HEADER_ONLY** | String  | Evet | Fatura görseli çekmek için `Y` gönderilmelidir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE** | ComplexType | Sorgu kriterine uyan fatura(lar)ın listesi. Fatura numarası `ID`, fatura evrensel tekil tanımlama numarası  `UUID` ve e-fatura sisteminde tanımlı tekil numara değeri  `LIST_ID` attribute içerisinde dönülmektedir.
**INVOICE.HEADER** | ComplexType | Faturaya ait özet bilgiler içermektedir.
**HEADER.SENDER** | String | Faturayı gönderen firma VKN'si.
**HEADER.RECEIVER** | String | Faturayı alan firma VKN'si.
**HEADER.SUPPLIER** | String | Faturayı gönderen firma ünvanı.
**HEADER.CUSTOMER** | String | Faturayı alan firma ünvanı.
**HEADER.ISSUE_DATE** | String | Fatura tarihi.
**HEADER.PAYABLE_AMOUNT** | String | Toplam ödenecek tutar.
**HEADER.FROM** | String | Faturayı gönderen Gönderici Birim (GB)
**HEADER.TO** | String | Faturanın geldiği Posta Kutusu (PK)
**HEADER.PROFILEID** | String | Faturanın senaryosu. TEMELFATURA, TICARIFATURA,IHRACATFATURA, YOLCUBERABER değerleri olabilir.
**HEADER.INVOICE_TYPE_CODE** | String | Faturanın tipi. SATIS, IADE, ISTISNA, IHRACAT, OZELMATRAH, TEVKIFAT, IHRACKAYITLI değerleri olabilir.
**HEADER.STATUS** | String | Faturanın durumu. Detay için **Fatura Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Fatura durum açıklaması. Detay için **Fatura Durumları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_CODE** | String | Faturanın GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_DESCRIPTION** | String | Faturanın GİB'de ki durumunun kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**HEADER.RESPONSE_CODE** | String | Ticari fatura için verilen yanıtı içeren zarfın durum kodu
**HEADER.RESPONSE_DESC** | String | Ticari fatura için verilen yanıtı içeren zarfın durum açıklaması           
**HEADER.CDATE** | String | Faturanın sistemimize ulaştığı tarih
**HEADER.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi.
**INVOICE.CONTENT** | Base64Binary | Faturanın talep edilen formatta **(PDF, HTML)** sıkıştırılmış/ziplenmiş dosyası dönülür. **İstemciye çektikten sonra unzip edilmeldir.**
