## E-Mustahsil Okuma (GetCreditNote)
* Özel entegratör platformundan e-müstahsil belgelerini okumayı sağlayan servisin clientıdır.
* Belgeler özet olarak getirilebileceği gibi, imzalı UBL-TR XML, PDF veya HTML olarak okunabilinir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**COMPRESSED** | String | **Hayır** | Fatura contentini nasıl alınacağını belirler. `Y` değeri için sıkıştırılmış, `N` değeri için sıkıştırılmamış contenti verir.
**DIRECTION** | String | **Hayır** | Belgenin gönderildiği yön. Gelen için `IN`, giden için `OUT` değeri verilir.
**ID** | String | **Hayır** | Belge numarası ile okumak için kullanılabilir. Format: ABC2019000000001
**UUID** | String | **Hayır** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
**LIMIT** | Integer | **Hayır** | Gelen cevapta en fazla kaç adet mühtahsil olabileceğini belirtir. Eğer eleman gönderilmezse 10 adet kayıt dönülür.
**READ_INCLUDED** | Boolean | **Hayır** | Daha önce okunmuş belgeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir.`true` değeri atanırsa okunmuş belgelerde gelir, `false` atamasında iste sadece okunmamış belgeler gelecektir.
**CREDIT_NOTE_TYPE** | String | **Evet** | Müstahsil içeriğinin nasıl yollanacağını belirler. `XML`, `HTML` ve `PDF` olabilir. **`HEADER_ONLY` değeri `N` verildiyse değer atanması zorunludur.**
**START_DATE** | String | **Hayır** | Belirli bir tarih aralığı araması yapıldığında başlangıç tarihi ataması yapılır. **Format: 2019-01-01**
**END_DATE** | String | **Hayır** | Belirli bir tarih aralığı araması yapıldığında bitiş tarihi ataması yapılır. **Format: 2019-12-31**
**HEADER_ONLY** | String | **Evet** | `Y` verildiğinde müstahsilin özeti döner. `N` verildiğinde ise içeriğin kendiside yollanır. **`N` yollandığı zaman `CREDIT_NOTE_TYPE` değerinin atanması zorunludur.**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDITNOTE** | Complex | `CREDITNOTEHEADER` ve `CONTENT` objelerini barındıran nesnedir.
**CREDITNOTE.CREDITNOTEHEADER** | Complex | Müstahsilin özet bilgilerini içeren nesnedir.
**CREDITNOTEHEADER.ID** | String | Müstahsilin belge numarası.
**CREDITNOTEHEADER.UUID** | String | Müstahsilin Evrensel Tekil Tanımlama Numarası (ETTN)
**CREDITNOTEHEADER.PROFILEID** | String | Belge senaryosu. 
**CREDITNOTEHEADER.SENDER** | Complex | Belgeyi gönderen firmanın VKN ve ünvanını içeren nesne.
**SENDER.VKN** | String | Belgeyi gönderen firmanın VKNsi.
**SENDER.IDENTIFIER** | String | Belgeyi gönderen firmanın ünvanı.
**CREDITNOTEHEADER.RECEIVER** | Complex | Belgeyi alan firmanın VKN ve ünvanını içeren nesne.
**RECEIVER.VKN** | String | Belgeyi alan firmanın VKNsi.
**RECEIVER.IDENTIFIER** | String | Belgeyi alan firmanın ünvanı.
**CREDITNOTEHEADER.STATUS** | String | Belgenin durumu.
**CREDITNOTEHEADER.STATUS_CODE** | String | Belgenin durum kodu.
**CREDITNOTEHEADER.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması.
**CREDITNOTE.CONTENT** | Base64Binary | Belgenin içeriği. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse sıkıştırılmamış dosya, `COMPRESSED` parametresine `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş dosya dönülür.


