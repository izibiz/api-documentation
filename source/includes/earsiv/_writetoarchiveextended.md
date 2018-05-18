## E-Arşiv Fatura Gönderme (WriteToArchieveExtended)
* E-Arşiv faturalarını göndermek için kullanılan servistir.
<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama | Örnek
--------- | ----------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**SEARCH_KEY.LIMIT** | String  | Hayır | Kaç fatura okunmak istendiği. Eğer eleman gönderilmezse 10 adet fatura, fatura içerikleri (XML) ile beraber en fazla 100 adet fatura, sadece fatura başlıklarını çekildiğindeise en fazla 25.000 adet fatura dönülür. | 100
**SEARCH_KEY.FROM** | String  | Hayır | Gönderici firma gönderici birim (GB) etiketine göre çekmek için kullanılabilir. Örneğin birden fazla GB etiketi olan bir firmanın sadece muhasebe departmanından gelen faturaları okumak için kullanılabilir. | urn:mail:muhasebegb@firma.com
**SEARCH_KEY.TO** | String  | Hayır | Birden fazla Posta Kutusu (PK) etiketi olan bir firmanın sadece bir PK adresine gelen faturaları çekmek için kullanılabilir. Eğer etiket gönderilmez ise kullanıcının yetkisine bağlı olarak bütün faturalar dönülür. | urn:mail:muhasebepk@firma.com
**SEARCH_KEY.ID** | String  | Hayır | Fatura numarası ile fatura okumak için kullanılabilir. | FYA2018000000001
**SEARCH_KEY.UUID** | String  | Hayır | Fatura Evrensel Tekil Tanımlama Numarası (ETTN) ile fatura okumak için kullanılabilir. | GUID formatında
**SEARCH_KEY.START_DATE** | String  | Hayır | Belirli tarih aralığında fatura çekmek istendiğinde dönem başlangıç tarihi | YYYY-MM-DD
**SEARCH_KEY.END_DATE** | String  | Hayır | Belirli tarih aralığında fatura çekmek istendiğinde dönem bitiş tarihi | YYYY-MM-DD
**SEARCH_KEY.READ_INCLUDED** | String  | Hayır | Fatura okurken daha önce okunmuş faturaları dönüşe dahil edilip edilmeyeceğini belirler. `Y` değeri gönderilirse fatura daha önce okunmuş olsa bile yanıta eklenir. Gönderilmezse veya `N` gönderilirse sadece yeni gelen faturalar dönülür. | Y/N
**HEADER_ONLY** | String  | Hayır | Fatura içerik ile beraber mi yoksa sadece özet bilgisi mi okunmak istenildiğini belirler. Eleman **gönderilmezse** veya `N` değeri gönderilirse faturalar XML ile beraber dönülür. `Y` değeri gönderilirse faturaların özeti dönülür.  | Y/N
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
**INVOICE.CONTENT** | String | Faturanın içeriği. Eğer `COMPRESSED` elemanı `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.
