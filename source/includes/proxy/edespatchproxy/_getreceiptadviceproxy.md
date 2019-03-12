## E-İrsaliye Yanıtı Okuma (GetReceiptAdvice)
* Sistemde bulunan irsaliye yanıtlarını okumak için kullanılan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**DIRECTION** | String | **Evet** | Belge yönü. Gelen veya Giden irsaliyeleri çekmek için kullanılabilir. Gelen irsaliyeleleri çekmek için `IN`, giden irsaliyeleleri çekmek için `OUT` değeri gönderilebilir. Varsayılan değer `IN` olduğu için eğer parametre gönderilmezse sadece gelen irsaliyeler dönülecektir. Gönderilebilecek değerler: `IN`, `OUT`
**LIMIT** | Integer | **Hayır** | Gelen cevapta en fazla kaç adet irsaliye olabileceğini belirtir. 
**SENDER_ALIAS** | String | **Hayır** | Gönderenin ünvanı.
**RECEIVER_ALIAS** | String | **Hayır** | Alıcının ünvanı.
**UUID** | String | **Hayır** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
**START_DATE** | Date | **Hayır** | Belirli bir tarih aralığı araması yapıldığında başlangıç tarihi ataması yapılır. **Format: 2019-01-01**
**END_DATE** | Date | **Hayır** | Belirli bir tarih aralığı araması yapıldığında bitiş tarihi ataması yapılır. **Format: 2019-12-31**
**HEADER_ONLY** | String | **Hayır** | `Y` verildiğinde irsaliye özeti döner. `N` verildiğinde ise `CONTENT`i de yollanır.
**READ_INCLUDED** | Boolean | **Hayır** | Daha önce okunmuş belgeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir.`true` değeri atanırsa okunmuş belgeler de gelir, `false` atamasında iste sadece okunmamış belgeler gelecektir.
**COMPRESSED** | String | **Hayır** | İrsaliye contentini nasıl alınacağını belirler. `Y` değeri için sıkıştırılmış, `N` değeri için sıkıştırılmamış contenti verir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RECEIPTADVICE** | Complex | Sorgu kriterine uyan irsaliye yanıtlarının listesi. İrsaliye numarası `ID`, evrensel tekil tanımlama numarası `UUID` ve e-irsaliye sisteminde tanımlı tekil numara değeri `LIST_ID` attribute içerisinde dönülmektedir.
**RECEIPTADVICE.RECEIPTADVICEHEADER** | Complex | İrsaliye yanıtına ait özet bilgiler içermektedir.
**RECEIPTADVICEHEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**RECEIPTADVICEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**RECEIPTADVICEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.
**RECEIPTADVICEHEADER.ACTUAL_SHIPMENT_DATE** | Date | Fiili sevk tarihi.
**RECEIPTADVICEHEADER.ACTUAL_SHIPMENT_TIME** | String | Fiili sevk zamanı.
**RECEIPTADVICEHEADER.TYPE_CODE** | String | Belgenin tipi. `SEVK` değeri olabilir.
**RECEIPTADVICEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye yanıtı için `IN`, giden irsaliye yanıtı için `OUT` değeri dönülür.
**RECEIPTADVICEHEADER.SENDER** | String | 	Belgeyi gönderen firma VKN'si.
**RECEIPTADVICEHEADER.RECEIVER** | String | Belgeyi alan firma VKN'si.
**RECEIPTADVICEHEADER.STATUS** | String | Belgenin durumu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.GIB_STATUS_CODE** | Integer | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.CDATE** | DateTime | Belgenin sisteme ulaştığı tarih
**RECEIPTADVICEHEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.
**RECEIPTADVICE.CONTENT** | Base64Binary | Belgenin içeriği. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.