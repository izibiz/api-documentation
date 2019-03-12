## E-Mutabakat Durumu Okuma (GetReconciliationStatus)
* Entegrasyon platformunda bulunan BA/BS Mutabakat ve Cari Mutabakatın durumunu sorgulamayı sağlayan servisin clientidir.
* Sorgulamak için Mutabakatın ETTN değeri verilmelidir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif `SESSION ID` değeri.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**ETTN** | String | **Evet** | Durumu sorgulanacak mutabakatın Evrensel Tekil Tanımlama Numarası.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RECONCILIATION_STATUS** | Complex | ETTN si verilmiş mutabakatları içeren yapıdır.
**RECONCILIATION_STATUS.RECONCILIATION** | Complex | ETTN si verilmiş mutabakata dair bilgileri bulunduran yapıdır.
**RECONCILIATION.TYPE** | Enum | Gelen Mutabakat eğer Cari Mutabakat ise `CM`, BA/BS Mutabakat ise `EM` olarak dönecektir.
**RECONCILIATION.ETTN** | String | Mutabakatın Evrensel Tekil Tanımlama Numarası.
**RECONCILIATION.CUSTOMER_IDENTIFIER** | String | Mutabakat gönderilmiş firmanın vergi kimlik nuarası. 
**RECONCILIATION.COMMERCIAL_NAME** | String | Mutabakat gönderilmiş firmanın ünvanı.
**RECONCILIATION.BABS_ACCOUNTING_PERIOD** | String | BA/BS mutabakat tarihi. Sadece Type değeri `EM` olan mutabakatlarda dönecektir. **Format : 201901**
**RECONCILIATION.CM_DATE** | DateTime | Cari mutabakat tarihi. Sadece Type değeri `CM` olan mutabakatlarda dönecektir. **Format : 2019-01-01T01:01:01.001+03:00**
**RECONCILIATION.CM_AMOUNT_TYPE** | Enum | Cari mutabakat durumu. Alacak için `A` Borç için `B` sonucu dönecektir. Sadece Type değeri `CM` olan mutabakatlarda dönecektir.
**RECONCILIATION.STATUS** | String | ETTN si verilmiş Mutabakatın durumu dönmektedir.
**RECONCILIATION.CREATE_DATE** | DateTime | Mutabakatın üretilme tarihi. **Format : 2019-01-01T01:01:01.001+03:00**