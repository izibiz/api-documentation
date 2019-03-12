## Mutabakat Mail Gönderme (SendMailReconciliation)
* Daha önce gönderilen bir mutabakatın mail olarak tekrardan iletilmesini sağlayan servistir. 


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**MAIL_SEARCHING** | ComplexType   | **Evet** | İstek içerisinde en az bir mutabakat bulunmalıdır.  
**SEARCH_KEY.UUID** | String  | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) tekrardan mail gönderilecek olan mutabakat için kullanılır. GUID formatındadır.
 
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.





### E-Mutabakat Durumları


Durum | Detaylı Açıklama
-------  | --------------
DRAFT	 | TASLAK
ACCEPTED | KABUL EDİLDİ
REJECTED | REDDEDİLDİ
WAIT_APPROVAL_CUSTOMER |	ALICIDAN CEVAP BEKLENİYOR
FAILED	 |	HATA ALDI
CANCEL |	İPTAL EDİLDİ 
