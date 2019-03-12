## E-Fatura Okuma (GetInvoice)
* E-Fatura sisteminden giden imzalı faturaları veya gelen faturaları muhasebe paketine çekmek için kullanılır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**DIRECTION** | String | **Hayır** | Belge yönü. Gelen veya Giden faturaları çekmek için kullanılabilir. Gelen faturaları çekmek için `IN`, giden faturaları çekmek için `OUT` değeri gönderilebilir. Varsayılan değer `IN` olduğu için eğer parametre gönderilmezse sadece gelen faturalar dönülecektir. **Gönderilebilecek değerler: `IN`, `OUT`**
**LIMIT** | Integer | **Hayır** | Kaç fatura okunmak istendiği. Eğer eleman gönderilmezse 10 adet fatura, fatura içerikleri (XML) ile beraber en fazla 100 adet fatura, sadece fatura başlıklarını çekildiğindeise en fazla 25.000 adet fatura dönülür.
**SENDER_ALIAS** | String | **Hayır** | Faturayı gönderen firma ünvanı.
**RECEIVER_ALIAS** | String | **Hayır** | Faturayı alan firma ünvanı.
**INVOICE_UUID** | String | **Hayır** | Evrensel Tekil Tanımlama Numarası (ETTN) ile fatura okumak için kullanılabilir. 
**START_DATE** | String | **Hayır** | Belirli tarih aralığında fatura çekmek istendiğinde dönem başlangıç tarihi **Format: 2019-01-01**
**END_DATE** | String | **Hayır** | Belirli tarih aralığında fatura çekmek istendiğinde dönem bitiş tarihi **Format: 2019-12-31**
**HEADER_ONLY** | String | **Hayır** | Fatura içerik ile beraber mi yoksa sadece özet bilgisi mi okunmak istenildiğini belirler. Eleman **gönderilmezse** veya `N` değeri gönderilirse faturalar XML ile beraber dönülür. `Y` değeri gönderilirse faturaların özeti dönülür. **Değerler: Y/N**
**READ_INCLUDED** | String | **Hayır** | Fatura okurken daha önce okunmuş faturaları dönüşe dahil edilip edilmeyeceğini belirler. `true` değeri gönderilirse fatura daha önce okunmuş olsa bile yanıta eklenir. Gönderilmezse veya `false` gönderilirse sadece yeni gelen faturalar dönülür. **Değerler: `true`/`false`**
**COMPRESSED** | String | **Hayır** | Binary Fatura içeriği sıkıştırılmış/sıkıştırılmamış bilgisi. Varsayılan değer Y olduğu için gönderilmediği durumda fatura sıkıştırılarak/ziplenerek gönderilmesi beklenmektedir. **Faturayı XML olarak göndermek için mutlaka eleman eklenmeli ve N değeri gönderilmelidir.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE** | Complex | Sorgu kriterine uyan fatura(lar)ın listesi. Fatura numarası `ID`, fatura evrensel tekil tanımlama numarası  `UUID` ve e-fatura sisteminde tanımlı tekil numara değeri  `LIST_ID` attribute içerisinde dönülmektedir.
**INVOICE.HEADER** | Complex | Faturaya ait özet bilgiler içermektedir.
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
**HEADER.STATUS** | String | Faturanın durumu. Detay için Fatura durum sorgulama ekranında bulunan **Fatura Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Fatura durum açıklaması. Detay için Fatura durum sorgulama ekranında bulunan **Fatura Durumları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_CODE** | String | Faturanın GİB'de ki durum kodu. Detay için Fatura durum sorgulama ekranında bulunan **GİB Durum Kodları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_DESCRIPTION** | String | Faturanın GİB'de ki durumunun kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**HEADER.RESPONSE_CODE** | String | Ticari fatura için verilen yanıtı içeren zarfın durum kodu
**HEADER.RESPONSE_DESC** | String | Ticari fatura için verilen yanıtı içeren zarfın durum açıklaması           
**HEADER.CDATE** | String | Faturanın sistemimize ulaştığı tarih
**HEADER.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi.
**INVOICE.CONTENT** | String | Faturanın içeriği. Eğer `COMPRESSED` elemanı `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.
