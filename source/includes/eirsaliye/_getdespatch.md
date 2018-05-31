## E-İrsaliye Okuma (GetDespatchAdvice)
* E-İrsaliye sisteminden giden imzalı irsaliye veya gelen irsaliyeyi ERP/muhasebe paketine çekmek için kullanılır.
* İrsaliye özet bilgilerini veya irsaliye özet bilgileri ile beraber XML içeriğini de çekmek için kullanılabilir.
* Entegrasyon yapan iş ortaklarımızdan yeni gelen bütün irsaliye içerikleri (XML) beraber müşteri ortamına çekilmesini tavsiye ediyoruz.
* İçerik ile beraber en fazla 100 fatura çekilebilir.
* Fatura özet bilgileri ile en fazla 25000 adet fatura dönülmektedir.
* Alıcı tarafından zamanlanmış fatura çekme özelliği eklenecekse en fazla 15 dakika aralığında olmalıdır.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**SEARCH_KEY.LIMIT** | String  | Hayır | Kaç kayıt okunmak istendiği. Eğer eleman gönderilmezse 10 adet, içerikleri (XML) ile beraber en fazla 100 adet, sadece özet/başlıklarını çekildiğinde ise en fazla 25.000 adet kayıt dönülür.
**SEARCH_KEY.FROM** | String  | Hayır | Gönderici firma gönderici birim (GB) etiketine göre çekmek için kullanılabilir. Örneğin birden fazla GB etiketi olan bir firmanın sadece muhasebe departmanından gelen belgeleri okumak için kullanılabilir. örnek: urn:mail:muhasebegb@firma.com
**SEARCH_KEY.TO** | String  | Hayır | Birden fazla Posta Kutusu (PK) etiketi olan bir firmanın sadece bir PK adresine gelen belgeleri çekmek için kullanılabilir. Eğer etiket gönderilmez ise kullanıcının yetkisine bağlı olarak bütün irsaliyeler dönülür. urn:mail:muhasebepk@firma.com
**SEARCH_KEY.ID** | String  | Hayır | İrsaliye numarası ile okumak için kullanılabilir. örnek: FYA2018000000001
**SEARCH_KEY.UUID** | String  | Hayır | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılabilir.  GUID formatında
**SEARCH_KEY.START_DATE** | String  | Hayır | Belirli tarih aralığında ki irsaliyeleri çekmek istendiğinde dönem başlangıç tarihi. format: YYYY-MM-DD
**SEARCH_KEY.END_DATE** | String  | Hayır | Belirli tarih aralığında ki irsaliyeleri çekmek istendiğinde dönem bitiş tarihi format: YYYY-MM-DD
**SEARCH_KEY.READ_INCLUDED** | String  | Hayır | Daha önce okunmuş irsaliyeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir. `Y` değeri gönderilirse daha önce okunmuş olsa bile yanıta eklenir. Gönderilmezse veya `N` gönderilirse sadece yeni gelen irsaliyeler dönülür. Gönderilebilecek değerler: Y/N
**SEARCH_KEY.DIRECTION** | String  | Hayır | Belge yönü. Gelen veya Giden irsaliyeleri çekmek için kullanılabilir. Gelen irsaliyeleleri çekmek için `IN`, giden irsaliyeleleri çekmek için `OUT` değeri gönderilebilir. Varsayılan değer `IN` olduğu için eğer parametre gönderilmezse sadece gelen irsaliyeler dönülecektir.  Gönderilebilecek değerler: `IN`, `OUT`
**SEARCH_KEY.SENDER** | String  | Hayır | Sadece bir firmadan gelen irsaliyeleri çekmek için göndericinin VKNsi.
**SEARCH_KEY.RECEIVER** | String  | Hayır | Alıcı firma VKNsi.
**HEADER_ONLY** | String  | Hayır | Sadece özet değerler mi yoksa içerik ile beraber mi okunmak istenildiğini belirleyen parametredir. Eleman **gönderilmezse** veya `N` değeri gönderilirse irsaliyeler XML ile beraber dönülür. `Y` değeri gönderilirse irsaliyelerin özeti dönülür.  Gönderilebilecek değerler: Y/N
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**DESPATCHADVICE** | ComplexType | Sorgu kriterine uyan irsaliyelerin listesi. İrsaliye numarası `ID`, evrensel tekil tanımlama numarası  `UUID` ve e-irsaliye sisteminde tanımlı tekil numara değeri  `LIST_ID` attribute içerisinde dönülmektedir.
**DESPATCHADVICE.HEADER** | ComplexType | İrsaliyeye ait özet bilgiler içermektedir.
**HEADER.SENDER** | String |  Belgeyi gönderen firma VKN'si.
**HEADER.RECEIVER** | String | Belgeyi alan firma VKN'si.
**HEADER.SUPPLIER** | String | Belgeyi gönderen firma ünvanı.
**HEADER.CUSTOMER** | String | Belgeyi alan firma ünvanı.
**HEADER.ISSUE_DATE** | String | Belge tarihi.
**HEADER.PAYABLE_AMOUNT** | String | Toplam ödenecek tutar.
**HEADER.FROM** | String | Belgeyi gönderen Gönderici Birim (GB)
**HEADER.TO** | String | Belgenin gönderildiği Posta Kutusu (PK)
**HEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**HEADER.INVOICE_TYPE_CODE** | String | Belgenin tipi. `SEVK` değeri olabilir.
**HEADER.STATUS** | String | Belgenin durumu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_CODE** | String | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**HEADER.CDATE** | String | Belgenin sisteme ulaştığı tarih
**HEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.
**DESPATCHADVICE_CONTENT** | Base64Binary | Belgenin içeriği. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.
