## Fatura Durum Sorgulama (GetInvoiceStatus)
* E-Fatura sisteminde bulunan bir veya birden fazla taslak, gelen ve giden faturaların durumunu sorgulamayı sağlayan servistir.


<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**INVOICE.ID** | String  | Hayır | Durumu sorgulanacak faturanın 16 hane fatura numarası. örnek: FYA2018000000001 **Eğer UUID elemanı gönderilmezse zorunludur.**
**INVOICE.UUID** | String  | Hayır | Durumu sorgulanacak faturanın GUID formatında ETTN değeri. **Eğer ID elemanı gönderilmezse zorunludur.**
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
**INVOICE_STATUS.CDATE** | String | Faturanın e-fatura sistemine yüklendiği/ulaştığı tarih
**INVOICE_STATUS.ENVELOPE_IDENTIFIER** | String | Faturanın zarf IDsi. Taslak faturalar için eleman dönülmez.


### Fatura Durumları
AŞAMA | AÇIKLAMA
------ | -------
`Ara Aşama` | Faturanın veya uygulama yanıtının alıcısına ulaştırılmak için geçen aşamanın tamamlanmadığı durumdur. Ara Aşamada ki faturalar üzerinde işlem yapılmamalı ve sürecin tamamlanması beklenmelidir.
`Nihai Aşama` | Faturanın veya uygulama yanıtının alıcısına ulaştırılma süreci tamamlanmıştır. Nihai Aşamada ki faturanın başarılı mı yoksa başarısız mı tamamlandığı kontrol edilerek gerekli aksiyon alınmalıdır. **Nihai Aşama faturanın başarılı olduğu anlamına gelmez.**


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
LOAD |	SUCCEED |	Fatura Yükleme - Başarılı |	Fatura Yükleme Başarılı	 | Nihai Aşama
LOAD |	FAILED |	Fatura Yükleme - Başarısız | Oldu	Fatura Yükleme Hatalı |	Nihai Aşama
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

KOD | AÇIKLAMA | ALINACAK AKSİYON
------ | --------- | -------------
1000 | 	ZARF KUYRUĞA EKLENDİ  |	Durum kodunun güncellenmesi beklenmelidir.  
1100 | 	ZARF İŞLENİYOR 	 | Durum kodunun güncellenmesi beklenmelidir.
1110 | 	ZIP DOSYASI DEĞİL  |	Faturalar yeniden gönderilmeli
1111 | 	ZARF ID UZUNLUĞU GEÇERSİZ  |	Faturalar yeniden gönderilmeli
1120 | 	ZARF ARŞİVDEN KOPYALANAMADI  |	Faturalar yeniden gönderilmeli
1130 | 	ZIP AÇILAMADI  |	Faturalar yeniden gönderilmeli
1131 | 	ZIP BİR DOSYA İÇERMELİ  |	Faturalar yeniden gönderilmeli
1132 | 	XML DOSYASI DEĞİL  |	Faturalar yeniden gönderilmeli
1133 | 	ZARF ID VE XML DOSYASININ ADI AYNI OLMALI  |	Faturalar yeniden gönderilmeli
1140 | 	DOKUMAN AYRIŞTIRILAMADI  |	Faturalar yeniden gönderilmeli
1141 | 	ZARF ID YOK  |	Faturalar yeniden gönderilmeli
1142 | 	ZARF ID VE ZIP DOSYASI ADI AYNI OLMALI 	 | Faturalar yeniden gönderilmeli
1143 | 	GEÇERSİZ VERSİYON  |	Faturalar yeniden gönderilmeli
1150 | 	SCHEMATRON KONTROL SONUCU HATALI  |	Faturalar yeniden gönderilmeli
1160 | 	XML SEMA KONTROLÜNDEN GEÇEMEDİ 	 | Faturalar yeniden gönderilmeli
1161 | 	İMZA SAHİBİ TCKN VKN ALINAMADI  |	Faturalar yeniden gönderilmeli
1162 | 	İMZA KAYDEDİLEMEDİ 	 | Faturalar yeniden gönderilmeli
1163 | 	GÖNDERİLEN ZARF SİSTEMDE DAHA ÖNCE KAYITLI OLAN BİR FATURAYI İÇERMEKTEDİR 	 | Faturalar yeniden gönderilmeli
1170 | 	YETKİ KONTROL EDİLEMEDİ   |	Faturalar yeniden gönderilmeli
1171 | 	GÖNDERİCİ BİRİM YETKİSİ YOK  |	Faturalar yeniden gönderilmeli
1172 |	POSTA KUTUSU YETKİSİ YOK  |	Faturalar yeniden gönderilmeli
1175 | 	İMZA YETKİSİ KONTROL EDİLEMEDİ 	 | Faturalar yeniden gönderilmeli
1176 | 	İMZA SAHİBİ YETKİSİZ 	 | Faturalar yeniden gönderilmeli
1177 | 	GEÇERSİZ İMZA 	 | Faturalar yeniden gönderilmeli
1180 | 	ADRES KONTROL EDİLEMEDİ  |	Faturalar yeniden gönderilmeli
1181 | 	ADRES BULUNAMADI  |	Faturalar yeniden gönderilmeli
1182 | 	KULLANICI EKLENEMEDİ 	 | Faturalar yeniden gönderilmeli
1183 | 	KULLANICI SİLİNEMEDİ 	 | Faturalar yeniden gönderilmeli
1190 | 	SİSTEM YANITI HAZIRLANAMADI  |	Faturalar yeniden gönderilmeli
1195 | 	SİSTEM HATASI  |	Faturalar yeniden gönderilmeli
1200 | 	ZARF BAŞARIYLA İŞLENDİ | Özel entegratörden gönderilen faturada sorun tespit edilmedi. Sonra ki aşamalara geçilecek.
1210 | 	DOKUMAN BULUNAN ADRESE GÖNDERİLEMEDİ  |	GİB’in tekrar gönderme denemesi sonlandıktan sonra, 1215 durum kodu alınır ise faturalar yeniden gönderilmeli
1215 | 	DOKÜMAN GÖNDERİMİ BAŞARISIZ. TEKRAR GÖNDERME SONLANDI  | 	Faturalar yeniden gönderilmeli  
1220 | 	HEDEFTEN SİSTEM YANITI GELMEDİ  | 	Bu durum kodundan sonra 1230 HEDEFTEN SİSTEM YANITI BAŞARISIZ GELDİ durum kodu alınır ise Faturalar yeniden gönderilmelidir.
1230 | 	HEDEFTEN SİSTEM YANITI BAŞARISIZ GELDİ 	 | Faturalar yeniden gönderilmeli  
1300 | 	BAŞARIYLA TAMAMLANDI 	| Başarılı olan fatura aynı numara ile gönderilemez.


## Çoklu Fatura Durum Sorgulama - (GetInvoiceStatusAll)
<aside class="warning">
BU METOD DESTEKLENMEMEKTEDİR. LÜTFEN KULLANMAYINIZ.
</aside>