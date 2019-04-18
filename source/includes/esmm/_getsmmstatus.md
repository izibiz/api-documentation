## E-SMM Durum Sorgulama (GetSMMStatus)
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
**SMM_STATUS** | ComplexType | Sorgu kriterine uyan belgelerin listesi. Belge numarası `ID`, evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**SMM_STATUS.HEADER** | ComplexType | Belgeye ait özet bilgiler içermektedir. Parametre listesi aşağıdadır.
**HEADER.ISSUE_DATE** | Date | Belgenin numarası. 
**HEADER.PROFILEID** | String | Belge senaryosu. `EARSIVBELGE` değeri olabilir.
**HEADER.STATUS** | String | Belgenin durumu. Lütfen bu alanı kullanarak karar vermeyin. Karar vermek için `STATUS_CODE` alanını kullanınız.
**HEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-SMM Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması. Detay için **E-SMM Durumları** başlığını inceleyiniz.


## E-SMM Durumları

Durum	| Kod | Durum Açıklaması
------- |---------- | --------------
DURUM_HENUZ_GUNCELLENMEDI	| 100	| DURUM HENÜZ GÜNCELLENMEDİ
LOAD_DRAFT	| 101	| TASLAK
LOAD_WAIT_ID_ASSIGN	| 102	|NUMARA ATANMA BEKLENİYOR
LOAD_NEW |	103	 |	KUYRUĞA EKLENDİ
LOAD_PROCESSING	 |	104	 |	İŞLENİYOR
LOAD_SUCCEED	 |	105	 |	İŞLENDİ
LOAD_FAILED	 |	106	 |	BAŞARISIZ
CANCEL_CANCEL |		107 |	İPTAL EDİLDİ 


## E-SMM Rapor Durumları

Durum Kodu	| Durum Açıklaması  
------- |---------- 
200 |  RAPORLANACAK	 
201	| RAPORLANDI	 			 
202	| İPTAL RAPORLANACAK	 			 
203	| İPTAL RAPORLANDI 	 	 
204	| RAPORLANMAYACAK	  