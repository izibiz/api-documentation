## E-Mustahsil Durumu Okuma (GetCreditNoteStatus)
* Özel entegratör platformundan e-müstahsil belgelerinin durumunu okumayı sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**UUID** | String | **Evet** | Durumuna bakılacak belgenin Evrensel Tekil Tanımlama Numarası(ETTN).
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDITNOTE_STATUS** | Complex | Müstahsilin özet bilgilerini içeren nesnedir.
**CREDITNOTE_STATUS.ID** | String | Müstahsilin belge numarası.
**CREDITNOTE_STATUS.UUID** | String | Müstahsilin Evrensel Tekil Tanımlama Numarası (ETTN)
**CREDITNOTE_STATUS.PROFILEID** | String | Belge senaryosu. 
**CREDITNOTE_STATUS.ISSUE_DATE** | Date | Belge tarihi.
**CREDITNOTE_STATUS.ISSUE_TIME** | String | Belge düzenleme tarihi. 
**CREDITNOTE_STATUS.DIRECTION** | String | Belgenin gönderildiği yön. Gelen için `IN`, giden için `OUT` değeri döner.
**CREDITNOTE_STATUS.STATUS** | String | Belgenin durumu. Karar vermek için `STATUS_CODE` alanını kullanınız.
**CREDITNOTE_STATUS.STATUS_CODE** | String | Belgenin durum kodu.
**CREDITNOTE_STATUS.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması.