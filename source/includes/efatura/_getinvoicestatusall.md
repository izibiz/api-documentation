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


### Giden Fatura Durumları
DURUM KODU|	<div style="width:200px">DURUM AÇIKLAMASI</div> 	| STATUS_SUBSTATUS |ALINACAK AKSİYON
------- | --------- | ----------- |--------
100 | DURUM HENÜZ GÜNCELLENMEDİ | LOAD_SUCCEED | Durum sorgulanması yapmaya devam edilecek
101 | KUYRUĞA EKLENDİ | LOAD_SUCCEED|Fatura Yükleme - Başarılı
102 | TASLAK İŞLENİYOR | LOAD_PROCESSING | Belge İşleniyor
103 | PAKETLENİYOR | PACKAGE_PROCESSING | Belge GİB'e Göndermek İçin Zarflanıyor
104 | PAKETLENDİ | PACKAGE_SUCCEED | Belge Zarflandı GİB'e Gönderilecek
105 | PAKETLEME HATASI | PACKAGE_FAILED | Belge Zarflanırken Hata Oluştu. Tekrar Denenecektir.
106 | İMZALANIYOR | SIGN_PROCESSING | Belge İmzalanıyor
107 | İMZALANDI" | SIGN_SUCCEED | Belge İmzalandı
109 | GİB'DEN YANIT BEKLİYOR | SEND_WAIT_GIB_RESPONSE| Belge GİB'e Gönderildi
110 | ALICIDAN YANIT BEKLİYOR | SEND_WAIT_SYSTEM_RESPONSE | Belge Alıcıya Başarıyla Ulaştırıldı. Sistem Yanıtı Bekliyor.
111 | ALICIDAN ONAY BEKLİYOR | SEND_WAIT_APPLICATION_RESPONSE | Ticari Belge Alıcıdan Onay Bekliyor
112 | KABUL EDİLDİ | ACCEPTED_SUCCEED | Belge Kabul Edildi
120 | RET EDİLDİ | REJECTED_SUCCEED | Belge Ret Edildi
134 | ZAMAN AŞIMI OLUŞTU | SEND_TIMEOUT | Belge GİB'e Gönderilirken Zaman Aşımına Uğradı.
135 | GÖNDERİLİYOR | SEND_PROCESSING | Belge GİB'e Gönderiliyor
136 | GÖNDERME İŞLEMİ BAŞARISIZ | SEND_FAILED | Belge GİB'e Gönderilirken Hata Oluştu
137 | GÖNDERİLDİ | SEND_SUCCEED | Belge GİB'e Gönderildi
139 | OTOMATİK GÖNDERİM HATASI | AUTO_FAILED | Otomatik Gönderim Hatası
140 | FATURA NUMARASI ATANDI | LOAD_ID_ASSIGNED | Belge Numarası Atandı
141 | FATURA NUMARASI ATANMA BEKLENİYOR | LOAD_WAIT_ID_ASSIGNED | Belge Numarası Atandı


### Gelen Fatura Durumları
DURUM KODU|	<div style="width:200px">DURUM AÇIKLAMASI</div> 	| STATUS_SUBSTATUS |ALINACAK AKSİYON
------- | --------- | ----------- |--------
133 | ALINDI | RECEIVE_SUCCEED |
134 | ZAMAN AŞIMI OLUŞTU | ACCEPT/REJECT_TIMEOUT - YANLIŞ|
122 | KABUL EDİLDİ | ACCEPTED_SUCCEED |
123 | KABUL İŞLENİYOR | ACCEPTED_PROCESSING |
124 | KABUL GİBDEN YANIT BEKLİYOR | ACCEPT_GIB_RESPONSE |
125 | KABUL ALICIDAN YANIT BEKLİYOR | ACCEPT_WAIT_SYSTEM_RESPONSE |
126 | KABUL İŞLEMİ BAŞARISIZ | ACCEPT_FAILED |
127 | RED ALICIDAN YANIT BEKLİYOR | REJECT_WAIT_SYSTEM_RESPONSE |
128 | RED GİBDE YANIT BEKLİYOR | REJECT_WAIT_GIB_RESPONSE |
129 | RED İŞLENİYOR | REJECT_PROCESSING |
130 | REDDEDİLDİ | REJECT_SUCCEED |
131 | RED İŞLEMİ BAŞARISIZ | FAILED |

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
