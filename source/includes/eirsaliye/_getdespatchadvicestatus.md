## E-İrsaliye Durum Sorgulama (GetDespatchAdviceStatus)
* Entegrasyon platformunda bulunan bir veya birden fazla taslak, gelen ve giden irsaliyenin durumunu sorgulamayı sağlayan servistir.
* Birden fazla belge durumu sorgulamak için `DESPATCHADVICEINFO` parametresi çoklanabilir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**DESPATCHADVICEINFO** | String  | **Evet** | Sorgulanacak belge numarası `ID` attribute içerisine, Evrensel Tekil Tanımlama Numarası (ETTN) ise `UUID` attribute eklenmelidir. `DIRECTION` attribute kullanılmamaktadır.


Servisten dönen parametreler şu şekildedir:


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**DESPATCHADVICE** | ComplexType | Sorgu kriterine uyan irsaliyelerin listesi. İrsaliye numarası `ID`, evrensel tekil tanımlama numarası  `UUID` ve e-irsaliye sisteminde tanımlı tekil numara değeri  `LIST_ID` attribute içerisinde dönülmektedir.
**DESPATCHADVICE.DESPATCHADVICEHEADER** | ComplexType | İrsaliyeye ait özet bilgiler içermektedir.
**DESPATCHADVICEHEADER.ID** | String | Belgenin numarası.
**DESPATCHADVICEHEADER.UUID** | String | Belgenin evrensel tekil tanımlama numarası.
**DESPATCHADVICEHEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**DESPATCHADVICEHEADER.TYPE_CODE** | String | Belgenin tipi. `SEVK` değeri olabilir.
**DESPATCHADVICEHEADER.SENDER** | String |  Belgeyi gönderen firmanın VKNsi `VKN` attribute içerisinde, firma ünvanı ise `IDENTIFIER` attribute içerisinde dönülmektedir.
**DESPATCHADVICEHEADER.RECEIVER** | String |  Belgeyi alan firmanın VKNsi `VKN` attribute içerisinde, firma ünvanı ise `IDENTIFIER` attribute içerisinde dönülmektedir.
**DESPATCHADVICEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**DESPATCHADVICEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_DATE** | Date | Fiili sevk tarihi.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_TIME** | String | Fiili sevk zamanı.
**DESPATCHADVICEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye için `IN`, giden irsaliye için `OUT` değeri dönülür.
**DESPATCHADVICEHEADER.STATUS** | String | Belgenin durumu. Lütfen bu alanı kullanarak karar vermeyin. Karar vermek için `STATUS_CODE` alanını kullanınız.
**DESPATCHADVICEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.STATUS_DESCRIPTION** | String | Belgenin durum açıklaması. Detay için **İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_CODE** | int | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.  
**DESPATCHADVICEHEADER.CDATE** | DateTime | Belgenin sisteme ulaştığı/yüklendiği tarih
**DESPATCHADVICEHEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.




### E-İrsaliye Durumları


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
