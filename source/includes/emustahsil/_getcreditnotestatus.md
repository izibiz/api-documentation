## E-Müstahsil Durum Sorgulama (GetCreditNoteStatus)
* Özel entegratör platformuna gönderilen bir veya birden fazla belgenin durumunu sorgulamayı sağlayan servistir.
* Birden fazla belge durumu sorgulamak için `UUID` parametresi çoklanabilir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**UUID** | String  | **Evet** | Sorgulanacak serbest meslek makbuzuna ait Evrensel Tekil Tanımlama Numarası (ETTN) yazılmalıdır.
 
Servisten dönen parametreler şu şekildedir:


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDITNOTE_STATUS** | ComplexType | Sorgu kriterine uyan belgelerin listesi. Belge numarası `ID`, evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**CREDITNOTE_STATUS.HEADER** | ComplexType | Belgeye ait özet bilgiler içermektedir. Parametre listesi aşağıdadır.
**HEADER.ISSUE_DATE** | Date | Belgenin numarası. 
**HEADER.PROFILEID** | String | Belge senaryosu. `EARSIVBELGE` değeri olabilir.
**HEADER.STATUS** | String | Belgenin durumu. Lütfen bu alanı kullanarak karar vermeyin. Karar vermek için `STATUS_CODE` alanını kullanınız.
**HEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-CREDITNOTE Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması. Detay için **E-CREDITNOTE Durumları** başlığını inceleyiniz.


## E-Müstahsil Durumları

Durum Kodu | Durum Açıklaması
------- | --------------
100	| DURUM HENÜZ GÜNCELLENMEDİ
101	| TASLAK
102	| NUMARA ATANMA BEKLENİYOR
103	| KUYRUĞA EKLENDİ
104	| İŞLENİYOR
105	| İŞLENDİ
106	| BAŞARISIZ
107 | İPTAL EDİLDİ 


### E-Müstahsil E-Posta Gönderim Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | HENÜZ İŞLENMEDİ
110 | İŞLENİYOR
120 | İŞLENDİ
130 | E-MAIL GÖNDERİM SONLANDI