## E-Mustahsil Raporu Okuma (GetCreditNoteReport)
* Özel entegratör platformundan e-müstahsil belgelerinin raporlarını okumayı sağlayan servisin clientıdır.

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
**REPORT_PERIOD** | String | **Hayır** | 
**REPORT_STATUS_FLAG** | String | **Hayır** | 
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
?

