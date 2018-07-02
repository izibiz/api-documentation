## E-Mutabakat Gönderme (SendReconciliation)
* Özel entegratör sistemi üzerinden toplu BA/BS ve Cari mutabakat gönderimini sağlayan servistir.
* Toplu mutabakat göndermek için `RECONCILIATION` parametresi çoklanabilir.
* Bir istek içerisinde hem `BA/BS Mutabakat` hemde `Cari Mutabakat` gönderilebilir.
* BA/BS mutabakat için cariye düzenlenen belge tutarı 5000 TL ve üzeri olmalıdır.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**RECONCILIATION** | ComplexType   | **Evet** | En az bir mutabakat bulunmalıdır. Toplu gönderim için bu eleman çoklanır.
**RECONCILIATION.RECONCILIATION_TYPE** | String  | **Evet** | Mutabakat tipi. BA/BS için `EM`, Cari mutabakat için `CM` değeri yazılır.
**RECONCILIATION.CUSTOMER_IDENTIFIER** | String  | **Evet** | Mutabakat gönderilecek firmanın vergi kimlik nuarası. VKN doğrulaması yapılmadığı için gönderilen verinin doğruluğu mükellefe aittir.
**RECONCILIATION.COMMERCIAL_NAME** | String  | **Evet** | Mutabakat gönderilecek firmanın ünvanı. Alıcı firmaya gönderilen e-posta üzerinde görünecektir.
**RECONCILIATION.TAX_OFFICE** | String  | **Evet** | Mutabakat gönderilecek firmanın vergi dairesi.
**RECONCILIATION.CUSTOMER_ADDRESS** | String  | **Evet** | Mutabakat gönderilecek firmanın adresi.
**RECONCILIATION.TELEFONE_NO** | String  | **Evet** | Mutabakat gönderilecek firmanın telefon numarası. Tavsiye edilen format: 0 (212) 555 55 55
**RECONCILIATION.FAX_NO** | String  | Hayır | Mutabakat gönderilecek firmanın faks numarası. Tavsiye edilen format: 0 (212) 555 55 55
**RECONCILIATION.EMAIL** | String  | Hayır | Mutabakat gönderilecek firmanın e-posta adresi. E-posta adresinin formatı kontrol edilir ancak doğruluğu ve geçerliliği mükellefin sorumluluğundadır. format: muhasebe@firma.com.tr
**RECONCILIATION.NOTE** | String  | Hayır | Mutabakat gönderilecek firmaya iletilmek istenilen not metni. Maksimum 250 karakter gönderilebilir.
**RECONCILIATION.ACCOUNTING_PERIOD** | String  | Hayır | Mutabakat dönemi. **BA/BS mutabakat için zorunludur.**  Format: 201806
**RECONCILIATION.BA_DOCUMENT_COUNT** | String  | Hayır | BA mutabakat belge adeti. **BA/BS mutabakat için zorunludur.**
**RECONCILIATION.BA_DOCUMENT_AMAOUT** | Decimal  | Hayır | BA mutabakat belgelerinin toplam tutarı. **BA/BS mutabakat için zorunludur.**  
**RECONCILIATION.Bs_DOCUMENT_COUNT** | String  | Hayır | BS mutabakat belge adeti. **BA/BS mutabakat için zorunludur.**  
**RECONCILIATION.BA_DOCUMENT_AMAOUT** | Decimal  | Hayır | BS mutabakat belgelerinin toplam tutarı. **BA/BS mutabakat için zorunludur.**  
**RECONCILIATION.CM_AMOUNT_TYPE** | String  | Hayır | Cari mutabakat durumu. Alacak için  `A` Borç için `B` gönderilmelidir. **Cari mutabakat için zorunludur.**  
**RECONCILIATION.CM_AMOUNT** | Decimal  | Hayır | Cari mutabakat alacak ve borç toplan tutarı. **Cari mutabakat için zorunludur.**  
**RECONCILIATION.CM_DATE** | Date  | Hayır | Cari mutabakat tarihi. format: 2018-06-29 **Cari mutabakat için zorunludur.**   

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.





### E-Mutabakat Durumları


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
