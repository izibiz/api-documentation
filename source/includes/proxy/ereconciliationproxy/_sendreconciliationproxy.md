## E-Mutabakat Gönderme (SendReconciliation)
* Özel entegratör sistemi üzerinden toplu BA/BS ve Cari mutabakat gönderimini sağlayan servisin clientidir.
* `BA/BS Mutabakat` veya `Cari Mutabakat` göndermek için kullanılır. 
* `RECONCILIATION_TYPE` parametresinin aldığı değerlere göre Cari ve BA/BS Mutabakat arası ayrım yapılır.
* BA/BS Mutabakatlar için `BABS_ACCOUNTING_PERIOD`, `BA_DOCUMENT_AMOUNT`, `BA_DOCUMENT_COUNT`, `BS_DOCUMENT_AMOUNT` ve `BS_DOCUMENT_COUNT` kullanılır. Cari Mutabakatlar için `CM_AMOUNT`, `CM_AMOUNT_TYPE` ve `CM_DATE` kullanılır. Kalan parametreler iki seçenek için ortaktır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**BABS_ACCOUNTING_PERIOD** | String | **Evet** | Mutabakat dönemi. **RECONCILIATION_TYPE** `EM` girilmiş mutabakatlar için zorunludur.**Format: 201806**
**BA_DOCUMENT_AMOUNT** | Decimal | **Evet** | BA mutabakat belgelerinin toplam tutarı. **RECONCILIATION_TYPE** `EM` girilmiş mutabakatlar için zorunludur.
**BA_DOCUMENT_COUNT** | Integer | **Evet** | BA mutabakat belge adeti.**RECONCILIATION_TYPE** `EM` girilmiş mutabakatlar için zorunludur.
**BS_DOCUMENT_AMOUNT** | Decimal | **Evet** | BS mutabakat belgelerinin toplam tutarı. **RECONCILIATION_TYPE** `EM` girilmiş mutabakatlar için zorunludur.
**BS_DOCUMENT_COUNT** | Integer | **Evet** | BS mutabakat belge adeti.**RECONCILIATION_TYPE** `EM` girilmiş mutabakatlar için zorunludur.
**CM_AMOUNT** | Decimal | **Evet** | Cari mutabakat alacak ve borç toplan tutarı. **RECONCILIATION_TYPE** `CM` girilmiş mutabakatlar için zorunludur.
**CM_AMOUNT_TYPE** | String | **Evet** | Cari mutabakat durumu. Alacak için `A` Borç için `B` gönderilmelidir. **RECONCILIATION_TYPE** `CM` girilmiş mutabakatlar için zorunludur.
**CM_DATE** | Date | **Evet** | Mutabakat tarihi. **RECONCILIATION_TYPE** `CM` girilmiş mutabakatlar için zorunludur.**Format: 2019-01-01**
**COMMERCIAL_NAME** | String | **Evet** | Mutabakat gönderilecek firmanın ünvanı. 
**CURRENCY_CODE** | Enum | **Evet** | Mutabakattaki tutarın para birimi. `TRY`, `USD`, `EUR`, `GBP` ve `CAD` gönderilebilir.
**CUSTOMER_ADDRESS** | String | **Evet** | Mutabakat gönderilecek firmanın adresi.
**CUSTOMER_IDENTIFIER** | String | **Evet** | Mutabakat gönderilecek firmanın vergi kimlik nuarası. VKN doğrulaması yapılmadığı için gönderilen verinin doğruluğu kullanıcıya aittir.
**EMAIL** | String | **Evet** | Mutabakat gönderilecek firmanın e-posta adresi. Format kontrolu yapılır ancak doğruluğu kullanıcıya aittir. **Format: muhasebe@firma.com.tr**
**FAX_NO** | String | **Hayır** | Mutabakat gönderilecek firmanın faks numarası. **Önerilen Format: 0(212) 100 00 00**
**NOTE** | String | **Hayır** | Mutabakata eklenecek ek açıklamalar.
**TAX_OFFICE** | String | **Hayır** | Mutabakat gönderilecek firmanın vergi dairesi.
**PHONE_NO** | String | **Hayır** | Mutabakat gönderilecek firmanın telefon numarası. **Önerilen Format: 0(212) 100 00 00**
**RECONCILIATION_TYPE** | Enum | **Evet** | Mutabakatın türü. BA/BS Mutabakatlar için `EM`, Cari Mutabakatlar için `CM` gönderilir.
**UUID** | String | **Evet** | Mutabakata atanacak Evrensel Tekil Tanımlama Numarası.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.