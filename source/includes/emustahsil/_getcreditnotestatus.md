## E-Müstahsil Durum Sorgulama (GetCreditNoteStatus)
* Özel entegratör platformuna gönderilen bir veya birden fazla belgenin durumunu sorgulamayı sağlayan servistir.
* Birden fazla belge durumu sorgulamak için `CREDITNOTEINFO` parametresi çoklanabilir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**CREDITNOTEINFO** | ComplexType  | **Evet** | Sorgulanacak belge numarası `ID` attribute içerisine, Evrensel Tekil Tanımlama Numarası (ETTN) ise `UUID` attribute eklenmelidir.


Servisten dönen parametreler şu şekildedir:


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDITNOTE** | ComplexType | Sorgu kriterine uyan belgelerin listesi. Belge numarası `ID`, evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**CREDITNOTE.CREDITNOTEHEADER** | ComplexType | Belgeye ait özet bilgiler içermektedir. Parametre listesi aşağıdadır.
**CREDITNOTEHEADER.ID** | String | Belgenin numarası.
**CREDITNOTEHEADER.UUID** | String | Belgenin evrensel tekil tanımlama numarası.
**CREDITNOTEHEADER.PROFILEID** | String | Belge senaryosu. `EARSIVBELGE` değeri olabilir.
**CREDITNOTEHEADER.TYPE_CODE** | String | Belgenin tipi. `MUSTAHSILMAKBUZ` değeri olabilir.
**CREDITNOTEHEADER.SENDER** | String |  Belgeyi gönderen firmanın VKNsi `VKN` attribute içerisinde, firma ünvanı ise `IDENTIFIER` attribute içerisinde dönülmektedir.
**CREDITNOTEHEADER.RECEIVER** | String |  Belgeyi alan firmanın VKNsi `VKN` attribute içerisinde, firma ünvanı ise `IDENTIFIER` attribute içerisinde dönülmektedir.
**CREDITNOTEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**CREDITNOTEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.

**CREDITNOTEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye için `IN`, giden irsaliye için `OUT` değeri dönülür.
**CREDITNOTEHEADER.STATUS** | String | Belgenin durumu. Lütfen bu alanı kullanarak karar vermeyin. Karar vermek için `STATUS_CODE` alanını kullanınız.
**CREDITNOTEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **İrsaliye Durumları** başlığını inceleyiniz.
**CREDITNOTEHEADER.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması. Detay için **İrsaliye Durumları** başlığını inceleyiniz.
**CREDITNOTEHEADER.REPORT_ID** | String | Belgenin rapor numarası. GİBe raporlandıktan sonra dönülmektedir.
**CREDITNOTEHEADER.CDATE** | DateTime | Belgenin sisteme ulaştığı/yüklendiği tarih.



## E-Müstahsil Durumları


Durum	| Kod | Detaylı Açıklama
------- |---------- | --------------
DURUM_HENUZ_GUNCELLENMEDI	| 100	| DURUM HENÜZ GÜNCELLENMEDİ
LOAD_SUCCEED	| 101	| KUYRUĞA EKLENDİ
LOAD_PROCESSİNG	| 102	|TASLAK İŞLENİYOR
PACKAGE_PROCESSING |	103	 |	PAKETLENİYOR
PACKAGE_SUCCEED	 |	104	 |	PAKETLENDİ
PACKAGE_FAILED	 |	105	 |	PAKETLEME_HATASI
SIGN_PROCESSING	 |	106	 |	İMZALANIYOR
SIGN_FAILED |		106 |	İMZALANIYOR
SIGN_SUCCEED	 |	107	 |	İMZALANDI
RECEIVE_SUCCEED	 |	133	 |	BAŞARIYLA ALINDI
SEND_TIMEOUT	 |	134	 |	GÖNDERME İŞLEMİ SİSTEM TARAFINDAN  TEKRAR DENENECEKTİR
RECEIVE_TIMEOUT	 |	134	 |	GÖNDERME İŞLEMİ SİSTEM TARAFINDAN  TEKRAR DENENECEKTİR
SEND_PROCESSING	 |	135 |		GÖNDERİLİYOR
SEND_FAILED	 |	136	 |	GÖNDERME İŞLEMİ BAŞARISIZ
SEND_SUCCEED	 |	137	 |	GÖNDERME İŞLEMİ BAŞARILI
