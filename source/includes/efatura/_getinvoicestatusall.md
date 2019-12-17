## Toplu Fatura Durum Sorgulama (GetInvoiceStatusAll)
* E-Fatura sisteminde bulunan bir veya birden fazla taslak, gelen ve giden faturaların durumunu sorgulamayı sağlayan servistir.


<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**UUID** | String  | **Evet** | Durumu sorgulanacak faturanın GUID formatında Evrensel Tekil Tanımlama Numarası. Birden fazla fatura durum sorgulamak için `INVOICE` elementini çoklayınız.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INVOICE_STATUS** | ComplexType | Sorgu kriterine uyan fatura(lar)ın listesi. Fatura numarası `ID`, fatura evrensel tekil tanımlama numarası  `UUID` attribute içerisinde dönülmektedir.
**INVOICE_STATUS.STATUS** | String | Faturanın e-fatura sisteminde ki durumu. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.STATUS_DESCRIPTION** | String | Fatura durum açıklaması. Detay için **Fatura Durumları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_CODE** | String | Faturanın GİB'de ki durum kodu. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**INVOICE_STATUS.GIB_STATUS_DESCRIPTION** | String | Faturanın GİB'de ki durumunun kodunun açıklaması. Faturanın GİB'de ki durumu e-fatura sistemi tarafından henüz sorgulanmadıysa eleman dönülmez. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**INVOICE_STATUS.RESPONSE_CODE** | String | Ticari fatura için verilen yanıtı içeren zarfın durum kodu. Eğer faturanın senaryosu TICARIFATURA değilse eleman dönülmez.
**INVOICE_STATUS.RESPONSE_DESC** | String | Ticari fatura için verilen yanıtı içeren zarfın durum açıklaması. Eğer faturanın senaryosu TICARIFATURA değilse eleman dönülmez.
**INVOICE_STATUS.GTB_REFNO** | String | Gümrük Sistemine alınan ihracat faturaları için, Gümrük ve Ticaret Bakanlığı tarafından üretilen 23 haneli bir referans numarasıdır.  23 haneli bir referans numarası ile belge tarihi yükümlü tarafından gümrük beyannamesinin 44 no’lu kutusunda “Belge Referans No” ve “Belge Tarihi” alanlarında beyan edilecektir. **İhracat faturası değilse dönülmez.**
**INVOICE_STATUS.GTB_GCB_TESCILNO** | String | Gümrük İdaresi fiili ihracatı tamamlanan eşyanın kabul uygulama yanıtı ile ilgilisine dönülen Gümrük Çıkış Belgesi (GÇB) tescil numarasıdır. **İhracat faturası değilse dönülmez.**
**INVOICE_STATUS.GTB_FIILI_IHRACAT_TARIHI** | String |  Gümrük İdaresi tarafından fiili ihracatı tamamlanan ihracat faturaları için döndüğü fiili ihraç tarihi bilgisidir.  Gümrük İdaresi bu bilgiyi fiili ihracat (intaç) gerçekleştiğinde dönecektir. Eğer ihracat faturası için bu alan dönülmemişse hala fiili ihracat yapılmamıştır. **İhracat faturası değilse dönülmez.**
**INVOICE_STATUS.CDATE** | String | Faturanın e-fatura sistemine yüklendiği/ulaştığı tarih
**INVOICE_STATUS.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi. Taslak faturalar için eleman dönülmez.


### Fatura Durumları
AŞAMA | AÇIKLAMA
------ | -------
`Ara Aşama` | Faturanın veya uygulama yanıtının alıcısına ulaştırılmak için geçen aşamanın tamamlanmadığı durumdur. Ara Aşamada ki faturalar üzerinde işlem yapılmamalı ve sürecin tamamlanması beklenmelidir.
`Nihai Aşama` | Faturanın veya uygulama yanıtının alıcısına ulaştırılma süreci tamamlanmıştır. Nihai Aşamada ki faturanın başarılı mı yoksa başarısız mı tamamlandığı kontrol edilerek gerekli aksiyon alınmalıdır. **Nihai Aşama faturanın başarılı olduğu anlamına gelmez.**

### Giden Fatura Durumları
DURUM KODU |	DURUM AÇIKLAMASI	| STATUS_SUBSTATUS |ALINACAK AKSİYON
------- | --------- | ----------- |--------
100 | DURUM HENÜZ GÜNCELLENMEDİ | LOAD_SUCCEED | Durum sorgulanması yapmaya devam edilecek
101 | KUYRUĞA EKLENDİ | LOAD_SUCCEED|
102 | TASLAK İŞLENİYOR | LOAD_PROCESSING | Belge İşleniyor
103 | PAKETLENİYOR | PACKAGE_PROCESSING | Belge GİB'e Göndermek İçin Zarflanıyor
104 | PAKETLENDİ | PACKAGE_SUCCEED | Belge Zarflandı GİB'e Gönderilecek
105 | PAKETLEME HATASI | PACKAGE_FAILED | Belge Zarflanırken Hata Oluştu. Tekrar Denenecektir.
106 | İMZALANIYOR | SIGN_PROCESSING | Belge İmzalanıyor
107 | İMZALANDI" | SIGN_SUCCEED | Belge İmzalandı
109 | GİB'DEN YANIT BEKLİYOR | SEND_WAIT_GIB_RESPONSE| Belge GİB'e Gönderildi
110 | ALICIDAN YANIT BEKLİYOR | SEND_WAIT_SYSTEM_RESPONSE | Belge Alıcıya Başarıyla Ulaştırıldı. Sistem Yanıtı Bekliyor.
111 | ALICIDAN ONAY BEKLİYOR | SEND_WAIT_APPLICATION_RESPONSE | Ticari Belge Alıcıdan Onay Bekliyor

112 | KABUL EDİLDİ | Belge Kabul Edildi
113 | KABUL İŞLENİYOR | Kabul Yanıtı İşleniyor
114 | KABUL GİBDEN YANIT BEKLİYOR | Kabul Yanıtı GİB'e Gönderildi
115 | KABUL ALICIDAN YANIT BEKLİYOR | Kabul Yanıtı Alıcıya Ulaştırıldı
116 | KABUL İŞLENİYOR | Kabul Yanıtı İşleniyor
117 | RET ALICIDAN YANIT BEKLİYOR | Ret Yanıtı Alıcıya Ulaştırıldı
118 | RET GİBDE YANIT BEKLİYOR | Ret Yanıtı GİB'e Gönderildi
119 | RET İŞLENİYOR | Ret Yanıtı İşleniyor
120 | RET EDİLDİ | Belge Ret Edildi
121 | RET İŞLENİYOR | Ret Yanıtı İşleniyor

WAIT_APPLICATION_RESPONSE(111, "ALICIDAN ONAY BEKLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.WAIT_APPLICATION_RESPONSE), //


STATUS |	SUBSTATUS	| PORTAL STATUS	| Detaylı Açıklama	| Aşama Durumu
------- | -------- | ------------| ---------- | -------------
LOAD |	SUCCEED |	Fatura Yükleme - Başarılı |	Fatura Yükleme Başarılı. Taslak olarak sisteme yüklenmiş faturadır. 	 | Nihai Aşama
LOAD |	FAILED |	Fatura Yükleme - Başarısız Oldu | 	Fatura Yükleme Hatalı |	Nihai Aşama
PACKAGE |	FAILED |	Fatura Paketleme - Başarısız oldu |	Fatura paketleme sırasında hata oluştu.  Sistem tarafından tekrar paketle işlemi yapılarak gönderilecektir. |	Ara aşama
PACKAGE |	SUCCEED |	Fatura Paketleme - Başarıyla işlendi |	Fatura paketleme başarılı |	Ara aşama
SEND |	PROCESSING |	Fatura Gönderimi - İşleniyor |	Fatura Gönderimi Yapılıyor |	Ara aşama
SEND |	SUCCEED |	Fatura Gönderimi - Başarıyla işlendi | 	Temel Fatura Gönderimi Başarılı |	Nihai Aşama
SEND |	FAILED |	Fatura Gönderimi – Başarısız Oldu |	Fatura Gönderiminde Hata Alındı |	Nihai Aşama
SEND |	WAIT_GIB_RESPONSE |	Fatura Gönderimi - GIB'e Gönderildi |	Fatura GIB e gönderildi ve GIB den faturanın alındığına dair sistem yanıtı bekleniyor	 | Ara aşama
SEND |	WAIT_SYSTEM_RESPONSE |	Fatura Gönderimi - Sistem Yanıtı Bekleniyor |	Fatura GIB tarafından alıcısına gönderildi ve alıcı taraftan faturanın alındığına dair sistem yanıtı bekleniyor |	Ara aşama
SEND |	WAIT_APPLICATION_RESPONSE |	Fatura Gönderimi - Fatura Onayı Bekleniyor |	Ticari Fatura Alıcıdan Cevap Bekliyor |	Ara aşama
ACCEPTED |	SUCCEED |	Giden Ticari Fatura Kabul - Başarıyla işlendi |	Gönderilmiş olan ticari fatura alıcı tarafından kabul edilmiştir ve alıcının kabul yanıtı gönderen tarafa başarılı şekilde ulaşmıştır. |	Nihai Aşama
REJECTED |	SUCCEED |	Giden Ticari Fatura Red - Başarıyla işlendi |	Gönderilmiş olan ticari fatura alıcı tarafından red edilmiştir ve alıcının red yanıtı gönderen tarafa başarılı şekilde ulaşmıştır. |	Nihai Aşama



public static enum STATUS_DESC {
DURUM_HENUZ_GUNCELLENMEDI(100, "DURUM HENÜZ GÜNCELLENMEDİ", null, null),
LOAD_SUCCEED(101, "KUYRUĞA EKLENDİ", EI.STATUS.LOAD, EI.SUBSTATUS.SUCCEED),
LOAD_PROCESSING(102, "TASLAK İŞLENİYOR", EI.STATUS.LOAD, EI.SUBSTATUS.PROCESSING), //
PACKAGE_PROCESSING(103, "PAKETLENIYOR", EI.STATUS.PACKAGE, EI.SUBSTATUS.PROCESSING), //
PACKAGE_SUCCEED(104, "PAKETLENDİ", EI.STATUS.PACKAGE, EI.SUBSTATUS.SUCCEED), //
PACKAGE_FAILED(105, "PAKETLEME HATASI", EI.STATUS.PACKAGE, EI.SUBSTATUS.FAILED), //
SIGN_PROCESSING(106, "IMZALANIYOR", EI.STATUS.SIGN, EI.SUBSTATUS.PROCESSING), //
SIGN_FAILED(106, "İMZALANIYOR", EI.STATUS.SIGN, EI.SUBSTATUS.FAILED), //
SIGN_SUCCEED(107, "İMZALANDI", EI.STATUS.SIGN, EI.SUBSTATUS.SUCCEED),

WAIT_GIB_RESPONSE(109, "GİB DEN YANIT BEKLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.WAIT_GIB_RESPONSE),//
WAIT_SYSTEM_RESPONSE(110, "ALICIDAN YANIT BEKLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
WAIT_APPLICATION_RESPONSE(111, "ALICIDAN ONAY BEKLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.WAIT_APPLICATION_RESPONSE), //

ACCEPTED(112, "KABUL EDİLDİ", EI.STATUS.ACCEPTED, EI.SUBSTATUS.SUCCEED), //
ACCEPTED_PROCESSING(113, "KABUL İŞLENİYOR", EI.STATUS.ACCEPTED, EI.SUBSTATUS.PROCESSING),
ACCEPTED_GIB_RESPONSE(114, "KABUL GİBDEN YANIT BEKLİYOR", EI.STATUS.ACCEPTED, EI.SUBSTATUS.WAIT_GIB_RESPONSE), //
ACCEPTED_SYSTEM_RESPONSE(115, "KABUL ALICIDAN YANIT BEKLİYOR", EI.STATUS.ACCEPTED, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
ACCEPTED_FAILED(116, "KABUL İŞLEMİ BAŞARISIZ", EI.STATUS.ACCEPTED, EI.SUBSTATUS.FAILED),

REJECTED_SYSTEM_RESPONSE(117, "RED ALICIDAN YANIT BEKLİYOR", EI.STATUS.REJECTED, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
REJECTED_GIB_RESPONSE(118, "RED GİBDE YANIT BEKLİYOR", EI.STATUS.REJECTED, EI.SUBSTATUS.WAIT_GIB_RESPONSE), //
REJECTED_PROCESSING(119, "RED İŞLENİYOR", EI.STATUS.REJECTED, EI.SUBSTATUS.PROCESSING), //
REJECTED_SUCCEED(120, "REDDEDİLDİ", EI.STATUS.REJECTED, EI.SUBSTATUS.SUCCEED), //
REJECTED_FAILED(121, "RED İŞLEMİ BAŞARISIZ", EI.STATUS.REJECTED, EI.SUBSTATUS.FAILED), //

ACCEPT(122, "KABUL EDİLDİ", EI.STATUS.ACCEPT, EI.SUBSTATUS.SUCCEED), //
ACCEPT_PROCESSING(123, "KABUL İŞLENİYOR", EI.STATUS.ACCEPT, EI.SUBSTATUS.PROCESSING),
ACCEPT_GIB_RESPONSE(124, "KABUL GİBDEN YANIT BEKLİYOR", EI.STATUS.ACCEPT, EI.SUBSTATUS.WAIT_GIB_RESPONSE), //
ACCEPT_SYSTEM_RESPONSE(125, "KABUL ALICIDAN YANIT BEKLİYOR", EI.STATUS.ACCEPT, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
ACCEPT_FAILED(126, "KABUL İŞLEMİ BAŞARISIZ", EI.STATUS.ACCEPT, EI.SUBSTATUS.FAILED),

REJECT_SYSTEM_RESPONSE(127, "RED ALICIDAN YANIT BEKLİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
REJECT_GIB_RESPONSE(128, "RED GİBDE YANIT BEKLİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.WAIT_GIB_RESPONSE), //
REJECT_PROCESSING(129, "RED İŞLENİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.PROCESSING), //
REJECT_SUCCEED(130, "REDDEDİLDİ", EI.STATUS.REJECT, EI.SUBSTATUS.SUCCEED), //
REJECT_FAILED(131, "RED İŞLEMİ BAŞARISIZ", EI.STATUS.REJECT, EI.SUBSTATUS.FAILED),

RECEIVE_WAIT_RESPONSE(132, "ONAY BEKLENİYOR", EI.STATUS.RECEIVE, EI.SUBSTATUS.WAIT_APPLICATION_RESPONSE),
RECEIVE_SUCCEED(133, "ALINDI", EI.STATUS.RECEIVE, EI.SUBSTATUS.SUCCEED), //

SEND_TIMEOUT(134, "GÖNDERME İŞLEMİ SİSTEM TARAFINDAN OTOMATİK TEKRARLANCAKTIR", EI.STATUS.SEND, EI.SUBSTATUS.TIMEOUT),//
RECEIVE_TIMEOUT(134, "İŞLEM SİSTEM TARAFINDAN OTOMATİK TEKRARLANCAKTIR", EI.STATUS.RECEIVE, EI.SUBSTATUS.TIMEOUT), //
ACCEPT_TIMEOUT(134, "İŞLEMİ SİSTEM TARAFINDAN OTOMATİK TEKRARLANCAKTIR", EI.STATUS.ACCEPT, EI.SUBSTATUS.SUCCEED), //
REJECT_TIMEOUT(134, "İŞLEMİ SİSTEM TARAFINDAN OTOMATİK TEKRARLANCAKTIR", EI.STATUS.REJECT, EI.SUBSTATUS.SUCCEED), //
SEND_PROCESSING(135, "GÖNDERİLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.PROCESSING),
SEND_FAILED(136, "GÖNDERME İŞLEMİ BAŞARISIZ", EI.STATUS.SEND, EI.SUBSTATUS.FAILED),
SEND_SUCCEED(137, "GÖNDERİLDİ", EI.STATUS.SEND, EI.SUBSTATUS.SUCCEED),
ENVELOPE_APPROVED(138, "GİBE GÖNDERİM ONAYLANDI", EI.STATUS.ENVELOPE , EI.SUBSTATUS.APPROVED),
AUTO_FAILED(139, "OTOMATİK GÖNDERİM HATASI", EI.STATUS.AUTO , EI.SUBSTATUS.FAILED),
LOAD_ID_ASSIGNED(140, "FATURA NUMARASI ATANDI", EI.STATUS.LOAD , EI.SUBSTATUS.ID_ASSIGNED),
LOAD_WAIT_ID_ASSIGNED(141, "FATURA NUMARASI ATANMA BEKLENİYOR", EI.STATUS.LOAD , EI.SUBSTATUS.WAIT_ID_ASSIGN);









Gelen Belge Durumları

122 | KABUL EDİLDİ | Kabul Edildi
123 | KABUL İŞLENİYOR | Kabul Yanıtı İşleniyor
124 | KABUL GİBDEN YANIT BEKLİYOR | Kabul Yanıtı GİB'e Gönderildi
ACCEPT_SYSTEM_RESPONSE(125, "KABUL ALICIDAN YANIT BEKLİYOR", EI.STATUS.ACCEPT, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
ACCEPT_FAILED(126, "KABUL İŞLENİYOR", EI.STATUS.ACCEPT, EI.SUBSTATUS.FAILED),

REJECT_SYSTEM_RESPONSE(127, "KABUL ALICIDAN YANIT BEKLİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.WAIT_SYSTEM_RESPONSE), //
REJECT_GIB_RESPONSE(128, "KABUL GİBDE YANIT BEKLİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.WAIT_GIB_RESPONSE), //
REJECT_PROCESSING(129, "KABUL İŞLENİYOR", EI.STATUS.REJECT, EI.SUBSTATUS.PROCESSING), //
REJECT_SUCCEED(130, "KABUL EDİLDİ", EI.STATUS.REJECT, EI.SUBSTATUS.SUCCEED), //
REJECT_FAILED(131, "KABUL İŞLEMİ BAŞARISIZ", EI.STATUS.REJECT, EI.SUBSTATUS.FAILED),

RECEIVE_WAIT_RESPONSE(132, "ONAY BEKLENİYOR", EI.STATUS.RECEIVE, EI.SUBSTATUS.WAIT_APPLICATION_RESPONSE),
RECEIVE_SUCCEED(133, "RED İŞLEMİ BAŞARISIZ", EI.STATUS.RECEIVE, EI.SUBSTATUS.SUCCEED), //

SEND_TIMEOUT(134, "GÖNDERME İŞLEM SİSTEM TARAFINDAN  TEKRAR DENECEKTİR", EI.STATUS.SEND, EI.SUBSTATUS.TIMEOUT),//
RECEIVE_TIMEOUT(134, "İŞLEM SİSTEM TARAFINDAN  TEKRAR DENECEKTİR", EI.STATUS.RECEIVE, EI.SUBSTATUS.TIMEOUT), //
ACCEPT_TIMEOUT(134, "İŞLEMİ SİSTEM TARAFINDAN  TEKRAR DENECEKTİR", EI.STATUS.ACCEPT, EI.SUBSTATUS.SUCCEED), //
REJECT_TIMEOUT(134, "İŞLEMİ SİSTEM TARAFINDAN  TEKRAR DENECEKTİR", EI.STATUS.REJECT, EI.SUBSTATUS.SUCCEED), //
SEND_PROCESSING(135, "GÖNDERİLİYOR", EI.STATUS.SEND, EI.SUBSTATUS.PROCESSING),
SEND_FAILED(136, "GÖNDERME İŞLEMİ BAŞARISIZ", EI.STATUS.SEND, EI.SUBSTATUS.FAILED),
SEND_SUCCEED(137, "GÖNDERME İŞLEMİ BAŞARILI", EI.STATUS.SEND, EI.SUBSTATUS.SUCCEED),
ENVELOPE_APPROVED(138, "GİBE GÖNDERİM ONAYLANDI", EI.STATUS.ENVELOPE , EI.SUBSTATUS.APPROVED),
AUTO_FAILED(139, "OTOMATİK GÖNDERİM HATASI", EI.STATUS.AUTO , EI.SUBSTATUS.FAILED);


### Gelen Fatura Durumları
STATUS |	SUBSTATUS	|PORTAL STATUS |	Detaylı Açıklama	| Aşama Durumu
------- | --------- | ----------- | --------- | --------- |
RECEIVE	| SUCCEED	| Fatura Alımı - Başarıyla işlendi	| Temel Fatura Alımı Başarılı	| Nihai Aşama
RECEIVE	| WAIT_APPLICATION_RESPONSE	| Fatura Alımı - Fatura Onayı Bekleniyor	| Ticari Faatura Alımı Başarılı	| Ara Aşama
ACCEPT	| PROCESSING	| Gelen Ticari Fatura Kabul – İşleniyor	| Gelen Ticari Fatura Kabul Edilmiştir  ve kabul yanıtı GİB’e gönderilmek üzere işlenmektedir.  Hala GİB’e gönderilmemiştir.	| Ara aşama
ACCEPT	| WAIT_GIB_RESPONSE	| Gelen Ticari Fatura Kabul – GIB'e Gönderildi	| Gelen Ticari Fatura Kabul Edilmiştir  ve kabul yanıtı GIB’e gönderildi.  GIB den onayın alındığına dair sistem yanıtı bekleniyor.	| Ara aşama
ACCEPT	| WAIT_SYSTEM_RESPONSE	| Gelen Ticari Fatura Kabul – Sistem Yanıtı Bekleniyor	| Fatura onayı GIB tarafından alıcısına gönderildi ve alıcı taraftan onayın alındığına dair sistem yanıtı bekleniyor	| Ara aşama
ACCEPT	| FAILED	| Gelen Ticari Fatura Kabul - Başarısız oldu	| Onaylanan Ticari fatura cevabı gönderiminden hata oluştu.  Bu fatura tekrar onaylanabilir.	| Nihai Aşama
ACCEPT	| SUCCEED	| Gelen Ticari Fatura Kabul - Başarıyla işlendi	| Gelen Ticari Fatura Kabul Edilmiştir  ve kabul yanıtı göndericiye başarılı bir şekilde ulaştırılmıştır.	| Nihai Aşama
REJECT	| PROCESSING	| Gelen Ticari Fatura Red – İşleniyor	| Gelen Ticari Fatura Red Edilmiştir  ve red yanıtı GİB’e gönderilmek üzere işlenmektedir.  Hala GİB’e gönderilmemiştir.	| Ara aşama
REJECT	| WAIT_GIB_RESPONSE	| Gelen Ticari Fatura Red – GIB'e Gönderildi	| Gelen Ticari Fatura reddedilmiştir  ve red yanıtı GIB’e gönderildi.  GIB den onayın alındığına dair sistem yanıtı bekleniyor.	| Ara aşama
REJECT	| WAIT_SYSTEM_RESPONSE	| Gelen Ticari Fatura Red – Sistem Yanıtı Bekleniyor	| Fatura onayı GIB tarafından alıcısına gönderildi ve alıcı taraftan onayın alındığına dair sistem yanıtı bekleniyor	| Ara aşama
REJECT	| SUCCEED	| Gelen Ticari Fatura Red - Başarıyla işlendi	| Gelen Ticari Fatura Red Edilmiştir  ve red yanıtı göndericiye başarılı bir şekilde ulaştırılmıştır.	| Nihai Aşama
REJECT	| FAILED	| Gelen Ticari Fatura Red - Başarısız oldu	| Gelen Ticari Fatura Red Edilmiştir  ve red yanıtı GİB’de veya alıcı tarafında oluşan bir sebeple hatalı duruma ulaşmıştır.	| Nihai Aşama

### Giden Fatura Durumları
STATUS |	SUBSTATUS	| PORTAL STATUS	| Detaylı Açıklama	| Aşama Durumu
------- | -------- | ------------| ---------- | -------------
LOAD |	SUCCEED |	Fatura Yükleme - Başarılı |	Fatura Yükleme Başarılı. Taslak olarak sisteme yüklenmiş faturadır. 	 | Nihai Aşama
LOAD |	FAILED |	Fatura Yükleme - Başarısız Oldu | 	Fatura Yükleme Hatalı |	Nihai Aşama
PACKAGE |	FAILED |	Fatura Paketleme - Başarısız oldu |	Fatura paketleme sırasında hata oluştu.  Sistem tarafından tekrar paketle işlemi yapılarak gönderilecektir. |	Ara aşama
PACKAGE |	SUCCEED |	Fatura Paketleme - Başarıyla işlendi |	Fatura paketleme başarılı |	Ara aşama
SEND |	PROCESSING |	Fatura Gönderimi - İşleniyor |	Fatura Gönderimi Yapılıyor |	Ara aşama
SEND |	SUCCEED |	Fatura Gönderimi - Başarıyla işlendi | 	Temel Fatura Gönderimi Başarılı |	Nihai Aşama
SEND |	FAILED |	Fatura Gönderimi – Başarısız Oldu |	Fatura Gönderiminde Hata Alındı |	Nihai Aşama
SEND |	WAIT_GIB_RESPONSE |	Fatura Gönderimi - GIB'e Gönderildi |	Fatura GIB e gönderildi ve GIB den faturanın alındığına dair sistem yanıtı bekleniyor	 | Ara aşama
SEND |	WAIT_SYSTEM_RESPONSE |	Fatura Gönderimi - Sistem Yanıtı Bekleniyor |	Fatura GIB tarafından alıcısına gönderildi ve alıcı taraftan faturanın alındığına dair sistem yanıtı bekleniyor |	Ara aşama
SEND |	WAIT_APPLICATION_RESPONSE |	Fatura Gönderimi - Fatura Onayı Bekleniyor |	Ticari Fatura Alıcıdan Cevap Bekliyor |	Ara aşama
ACCEPTED |	SUCCEED |	Giden Ticari Fatura Kabul - Başarıyla işlendi |	Gönderilmiş olan ticari fatura alıcı tarafından kabul edilmiştir ve alıcının kabul yanıtı gönderen tarafa başarılı şekilde ulaşmıştır. |	Nihai Aşama
REJECTED |	SUCCEED |	Giden Ticari Fatura Red - Başarıyla işlendi |	Gönderilmiş olan ticari fatura alıcı tarafından red edilmiştir ve alıcının red yanıtı gönderen tarafa başarılı şekilde ulaşmıştır. |	Nihai Aşama

### GİB Durum Kodları

Kod | Açıklama | Alınacak Aksiyon
------ | --------- | -------------
1000 | 	ZARF KUYRUĞA EKLENDİ  |	Durum kodunun güncellenmesi beklenmelidir.
1100 | 	ZARF İŞLENİYOR 	 | Durum kodunun güncellenmesi beklenmelidir.
1110 | 	ZIP DOSYASI DEĞİL  | Belge yeniden gönderilmeli
1111 | 	ZARF ID UZUNLUĞU GEÇERSİZ  | Belge yeniden gönderilmeli
1120 | 	ZARF ARŞİVDEN KOPYALANAMADI  |	Belge yeniden gönderilmeli
1130 | 	ZIP AÇILAMADI  |	Belge yeniden gönderilmeli
1131 | 	ZIP BİR DOSYA İÇERMELİ  |	Belge yeniden gönderilmeli
1132 | 	XML DOSYASI DEĞİL  |	Belge yeniden gönderilmeli
1133 | 	ZARF ID VE XML DOSYASININ ADI AYNI OLMALI  |	Belge yeniden gönderilmeli
1140 | 	DOKUMAN AYRIŞTIRILAMADI  |	Belge yeniden gönderilmeli
1141 | 	ZARF ID YOK  |	Belge yeniden gönderilmeli
1142 | 	ZARF ID VE ZIP DOSYASI ADI AYNI OLMALI 	 | Belge yeniden gönderilmeli
1143 | 	GEÇERSİZ VERSİYON  |	Belge yeniden gönderilmeli
1150 | 	SCHEMATRON KONTROL SONUCU HATALI  |	Belge yeniden gönderilmeli
1160 | 	XML SEMA KONTROLÜNDEN GEÇEMEDİ 	 | Belge yeniden gönderilmeli
1161 | 	İMZA SAHİBİ TCKN VKN ALINAMADI  |	Belge yeniden gönderilmeli
1162 | 	İMZA KAYDEDİLEMEDİ 	 | Belge yeniden gönderilmeli
1163 | 	GÖNDERİLEN ZARF SİSTEMDE DAHA ÖNCE KAYITLI OLAN BİR FATURAYI İÇERMEKTEDİR 	 | Belge yeniden gönderilmeli
1170 | 	YETKİ KONTROL EDİLEMEDİ   |	Belge yeniden gönderilmeli
1171 | 	GÖNDERİCİ BİRİM YETKİSİ YOK  |	Belge yeniden gönderilmeli
1172 |	POSTA KUTUSU YETKİSİ YOK  |	Belge yeniden gönderilmeli
1175 | 	İMZA YETKİSİ KONTROL EDİLEMEDİ 	 | Belge yeniden gönderilmeli
1176 | 	İMZA SAHİBİ YETKİSİZ 	 | Belge yeniden gönderilmeli
1177 | 	GEÇERSİZ İMZA 	 | Belge yeniden gönderilmeli
1180 | 	ADRES KONTROL EDİLEMEDİ  |	Belge yeniden gönderilmeli
1181 | 	ADRES BULUNAMADI  |	Belge yeniden gönderilmeli
1182 | 	KULLANICI EKLENEMEDİ 	 | Belge yeniden gönderilmeli
1183 | 	KULLANICI SİLİNEMEDİ 	 | Belge yeniden gönderilmeli
1190 | 	SİSTEM YANITI HAZIRLANAMADI  |	Belge yeniden gönderilmeli
1195 | 	SİSTEM HATASI  |	Belge yeniden gönderilmeli
1200 | 	ZARF BAŞARIYLA İŞLENDİ | Özel entegratörden gönderilen Belgede sorun tespit edilmedi. Sonra ki aşamalara geçilecek.
1210 | 	DOKUMAN BULUNAN ADRESE GÖNDERİLEMEDİ  |	GİB’in tekrar gönderme denemesi sonlandıktan sonra, 1215 durum kodu alınır ise belgeler yeniden gönderilmeli
1215 | 	DOKÜMAN GÖNDERİMİ BAŞARISIZ. TEKRAR GÖNDERME SONLANDI  | 	Belge yeniden gönderilmeli
1220 | 	HEDEFTEN SİSTEM YANITI GELMEDİ  | 	Bu durum kodundan sonra 1230 HEDEFTEN SİSTEM YANITI BAŞARISIZ GELDİ durum kodu alınır ise Belge yeniden gönderilmelidir.
1230 | 	HEDEFTEN SİSTEM YANITI BAŞARISIZ GELDİ 	 | Belge yeniden gönderilmeli
1300 | 	BAŞARIYLA TAMAMLANDI 	| Başarılı olan Belge aynı numara ile gönderilemez.
