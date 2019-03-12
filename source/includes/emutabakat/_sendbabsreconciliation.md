## BA/BS Mutabakat Gönderme (SendBABSReconciliation)
* Özel entegratör sistemi üzerinden toplu BA/BS mutabakat gönderimini sağlayan servistir.
* Toplu mutabakat göndermek için `RECONCILIATION` parametresi çoklanabilir.
* BA/BS mutabakat için cariye düzenlenen belge tutarı 5000 TL ve üzeri olmalıdır.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**RECONCILIATION** | ComplexType   | **Evet** | En az bir mutabakat bulunmalıdır. Toplu gönderim için bu eleman çoklanır.
**RECONCILIATION.CUSTOMER_IDENTIFIER** | String  | **Evet** | Mutabakat gönderilecek firmanın vergi kimlik nuarası. VKN doğrulaması yapılmadığı için gönderilen verinin doğruluğu mükellefe aittir.
**RECONCILIATION.COMMERCIAL_NAME** | String  | **Evet** | Mutabakat gönderilecek firmanın ünvanı. Alıcı firmaya gönderilen e-posta üzerinde görünecektir.
**RECONCILIATION.TAX_OFFICE** | String  | **Evet** | Mutabakat gönderilecek firmanın vergi dairesi.
**RECONCILIATION.CUSTOMER_ADDRESS** | String  | **Evet** | Mutabakat gönderilecek firmanın adresi.
**RECONCILIATION.TELEFONE_NO** | String  | **Evet** | Mutabakat gönderilecek firmanın telefon numarası. **Format: 0 (212) 555 55 55**
**RECONCILIATION.FAX_NO** | String  | Hayır | Mutabakat gönderilecek firmanın faks numarası. **Format: 0 (212) 555 55 55**
**RECONCILIATION.EMAIL** | String  | Hayır | Mutabakat gönderilecek firmanın e-posta adresi. E-posta adresinin formatı kontrol edilir ancak doğruluğu ve geçerliliği mükellefin sorumluluğundadır. **Format: muhasebe@firma.com.tr**
**RECONCILIATION.NOTE** | String  | Hayır | Mutabakat gönderilecek firmaya iletilmek istenilen not metni. Maksimum 250 karakter gönderilebilir.
**RECONCILIATION.ACCOUNTING_PERIOD** | String  | Hayır | Mutabakat dönemi. **Format: 201807**
**RECONCILIATION.BA_DOCUMENT_COUNT** | String  | Hayır | BA mutabakat belge adeti.
**RECONCILIATION.BA_DOCUMENT_AMAOUT** | Decimal  | Hayır | BA mutabakat belgelerinin toplam tutarı.
**RECONCILIATION.BS_DOCUMENT_COUNT** | String  | Hayır | BS mutabakat belge adeti.
**RECONCILIATION.BA_DOCUMENT_AMAOUT** | Decimal  | Hayır | BS mutabakat belgelerinin toplam tutarı.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INT_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.

### E-Mutabakat Hata Kodları

Hata Kodu | Hata Açıklaması       
--------- | -----------
200	| EKSİK VEYA HATALI PARAMETRE (PARAMETRE ADI)
210	| YETKİ HATASI(xxx.xxx.xxx.xxx adresinin bu işleme yetkisi yoktur)
220	| GÜNLÜK İSTEK LİTİMİ AŞILDI
230	| MUTABAKAT SİSTEMDE MEVCUT ( VKN/TCKN:XXXXX, DÖNEM:yyyymm)
240	| BELGE KONTROL HATASI (MEVZUATA UYGUN OLMAYAN MUTABAKAT KAYDI MEVCUT (5000 TL Limiti)
250	| GEÇERSİZ E-POSTA FORMATI( eposta@adfads.com)
