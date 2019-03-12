## E-SMM Okuma (GetSmm)
* Özel entegratör platformundan imzalanmış belgeleri okumayı sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**COMPRESSED** | String | **Hayır** | Fatura contentini nasıl alınacağını belirler. `Y` değeri için sıkıştırılmış, `N` değeri için sıkıştırılmamış contenti verir.
**LIMIT** | Integer | **Hayır** | Gelen cevapta en fazla kaç adet smm olabileceğini belirtir. 
**ID** | String | **Hayır** | Belge numarası ile okumak için kullanılabilir. Format: ABC2019000000001
**UUID** | String | **Hayır** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
**START_DATE** | String | **Hayır** | Belirli bir tarih aralığı araması yapıldığında başlangıç tarihi ataması yapılır. **Format: 2019-01-01**
**END_DATE** | String | **Hayır** | Belirli bir tarih aralığı araması yapıldığında bitiş tarihi ataması yapılır. **Format: 2019-12-31**
**READ_INCLUDED** | Boolean | **Hayır** | Daha önce okunmuş belgeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir.`true` değeri atanırsa okunmuş belgeler de gelir, `false` atamasında iste sadece okunmamış belgeler gelecektir.
**CONTENT_TYPE** | String | **Evet** | Müstahsil içeriğinin nasıl yollanacağını belirler. `XML`, `HTML` ve `PDF` olabilir. **`HEADER_ONLY` değeri `N` verildiyse değer atanması zorunludur.**
**HEADER_ONLY** | String | **Evet** | `Y` verildiğinde SMM özeti döner. `N` verildiğinde ise içeriğin kendiside yollanır. **`N` yollandığı zaman `CONTENT_TYPE` değerinin atanması zorunludur.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**SMM** | Complex | Sorgu kriterine uyan tekil belge. Belge numarası `ID`, evrensel tekil tanımlama numarası `UUID` attribute içerisinde dönülmektedir.
**SMM.HEADER** | Complex | Belgeye ait özet bilgileri içerir.
**HEADER.CUSTOMER** | Complex | 	Belge düzenlenen alıcı bilgisi. `IDENTIFIER` attribute ile VKN/TCKN bilgisi, `NAME` attribute ile ünvan bilgisi dönülür.
**HEADER.ISSUE_DATE** | DateTime | Belge düzenlenme tarihi. **Format: 2019-12-31+03:00**
**HEADER.PAYABLE_AMOUNT** | AmountType | Toplam ödenecek tutar.
**HEADER.PROFILE_ID** | String | Belge senaryosu.
**HEADER.STATUS** | String | Belgenin durumu.
**HEADER.STATUS_CODE** | String | Belge durum kodu.
**HEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması.
**HEADER.CDATE** | String | Belgenin sisteme yüklendiği tarih. **Format: 2019-12-31T23:59:59.000+03:00**
**SMM.CONTENT** | Base64Binary | Belgenin içeriği. PDF formatında. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse PDF dosya sıkıştırılmadan, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş PDF dosyası dönülür.
