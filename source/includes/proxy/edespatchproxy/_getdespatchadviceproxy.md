## E-İrsaliye Okuma (GetDespatchAdvice)
* Sistemde bulunan irsaliyeleri okumak için kullanılan servisin clientıdır.

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
**DESPATCHADVICE** | Complex | Sorgu kriterine uyan irsaliyelerin listesi. İrsaliye numarası `ID`, evrensel tekil tanımlama numarası `UUID` ve e-irsaliye sisteminde tanımlı tekil numara değeri `LIST_ID` attribute içerisinde dönülmektedir.
**DESPATCHADVICE.DESPATCHADVICEHEADER** | Complex | İrsaliyeye ait özet bilgiler içermektedir.
**DESPATCHADVICEHEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**DESPATCHADVICEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**DESPATCHADVICEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_DATE** | Date | Fiili sevk tarihi.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_TIME** | String | Fiili sevk zamanı.
**DESPATCHADVICEHEADER.TYPE_CODE** | String | Belgenin tipi. `SEVK` değeri olabilir.
**DESPATCHADVICEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye için `IN`, giden irsaliye için `OUT` değeri dönülür.
**DESPATCHADVICEHEADER.SENDER** | String | 	Belgeyi gönderen firma VKN'si.
**DESPATCHADVICEHEADER.RECEIVER** | String | Belgeyi alan firma VKN'si.
**DESPATCHADVICEHEADER.STATUS** | String | Belgenin durumu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_CODE** | Integer | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.CDATE** | DateTime | Belgenin sisteme ulaştığı tarih
**DESPATCHADVICEHEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.
**DESPATCHADVICE.CONTENT** | Base64Binary | Belgenin içeriği. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse XML dosya, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş XML dosyası dönülür.