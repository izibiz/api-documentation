## E-Serbest Meslek Makbuzu Okuma (GetSMM)
* Özel entegratör platformundan imzalanmış belgeleri okumayı sağlayan servistir.
* E-SMM belgesinin imzalı UBL-TR XML, PDF veya HTML olarak okumayı sağlar.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**HEADER_ONLY** | String  | Hayır | Sadece özet değerler mi yoksa içerik ile beraber mi okunmak istenildiğini belirleyen parametredir. Eleman **gönderilmezse** veya `N` değeri gönderilirse irsaliyeler XML ile beraber dönülür. `Y` değeri gönderilirse irsaliyelerin özeti dönülür.  Gönderilebilecek değerler: Y/N
**SEARCH_KEY.LIMIT** | String  | Hayır | Kaç kayıt okunmak istendiği. Eğer eleman gönderilmezse 10 adet kayıt dönülür. İçerikleri (XML) ile beraber en fazla 100 adet kayıt dönülür. Sadece özet/başlıklarını çekildiğinde ise en fazla 25.000 adet kayıt dönülür.
**SEARCH_KEY.ID** | String  | Hayır | Belge numarası ile okumak için kullanılabilir. örnek: FYA2018000000001
**SEARCH_KEY.UUID** | String  | Hayır | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılabilir.  GUID formatında
**SEARCH_KEY.START_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem başlangıç tarihi. format: YYYY-MM-DD
**SEARCH_KEY.END_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem bitiş tarihi format: YYYY-MM-DD
**SEARCH_KEY.READ_INCLUDED** | String  | Hayır | Daha önce okunmuş belgeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir. `Y` değeri gönderilirse daha önce okunmuş olsa bile yanıta eklenir. Gönderilmezse veya `N` gönderilirse sadece yeni gelen belgeler dönülür. Gönderilebilecek değerler: Y/N
**SEARCH_KEY.DIRECTION** | String  | Hayır | Belge yönü. Giden(OUT), Gelen (IN). Müstahsil için gelen olmadığı için `OUT` değeri gönderilebilir. Varsayılan değer `OUT`.
**SEARCH_KEY.TYPE** | String  | Hayır | Talep edilen format. Gönderilebilecek değerler: XML, PDF, HTML. Eğer parametre gönderilmezse imzalı UBL-TR XML dosyası dönülecektir.
**SEARCH_KEY.FROM** | String  | Hayır | **Bu serviste kullanılmaz.**
**SEARCH_KEY.TO** | String  | Hayır | **Bu serviste kullanılmaz.**
**SEARCH_KEY.SENDER** | String  | Hayır | **Bu serviste kullanılmaz.**
**SEARCH_KEY.RECEIVER** | String  | Hayır | **Bu serviste kullanılmaz.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDITNOTE** | ComplexType | Sorgu kriterine uyan belgelerin listesi. Müstahsil numarası `ID`, evrensel tekil tanımlama numarası  `UUID` ve sisteminde tanımlı tekil numara değeri  `LIST_ID` attribute içerisinde dönülmektedir.
**CREDITNOTE.HEADER** | ComplexType | Belgeye ait özet bilgiler içermektedir.
**HEADER.SENDER** | String |  Belgeyi gönderen firma VKN'si.
**HEADER.RECEIVER** | String | Belgeyi alanın TCKNsi.
**HEADER.SUPPLIER** | String | Belgeyi gönderen firma ünvanı.
**HEADER.CUSTOMER** | String | Belgeyi alanın ünvanı.
**HEADER.ISSUE_DATE** | String | Belge tarihi.
**HEADER.PAYABLE_AMOUNT** | String | Toplam ödenecek tutar.
**HEADER.PROFILEID** | String | Belge senaryosu. `EARSIVBELGE` değeri olabilir.
**HEADER.TYPE_CODE** | String | Belgenin tipi. `MUSTAHSILMAKBUZ` değeri olabilir.
**HEADER.STATUS** | String | Belgenin durumu. Detay için **Müstahsil Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **Müstahsil Durumları** başlığını inceleyiniz.
**HEADER.CDATE** | String | Belgenin sisteme ulaştığı tarih.
**CREDITNOTE.CONTENT** | Base64Binary | Belgenin içeriği. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.
