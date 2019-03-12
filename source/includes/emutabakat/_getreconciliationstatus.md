## Mutabakat Durum Sorgulama (GetReconciliationStatus)
* Entegrasyon platformunda bulunan `BA/BS Mutabakat` veya `Cari Mutabakat` durumunu sorgulamayı sağlayan servistir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**RECONCILIATION_SEARCHING** | ComplexType  | **Evet** | Sorgulanacak mutabakatlara ait kriterleri belirlemek için kullanılır.
**SEARCH_KEY.ETTN** | String  | **Evet** | Mutabakat Evrensel Tekil Tanımlama Numarası (ETTN) mutabakatın durumunu sorgulamak için kullanılabilir. 


Servisten dönen parametreler şu şekildedir:


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RECONCILIATION_STATUS** | ComplexType | Mutabakat durum sonuç objesi. Eğer aranan kritere uygun mutabakat bulunmuyorsa sonuç boş kayıt döner.
**RECONCILIATION_STATUS.RECONCILATION** | ComplexType | Durumu sorgulaması kriterine uyan mutabakat objesi.
**RECONCILIATION.TYPE** | Enum | Durumu sorgulanan mutabakat tipi için kullanılır: BA/BS Mutabakat için `EM`,Cari Mutabakat için `CM` olur.
**RECONCILIATION.ETTN** | String | Durumu sorgulanan Evrensel Tekil Tanımlama Numarasıdır.
 **RECONCILATION.CUSTOMER_IDENTIFIER** | String | Mutabakat gönderilen mükellef VKN/TCKN.
**RECONCILIATION.BABS_ACCOUNTING_PERIOD** | String  | BA/BS Mutabakatlar için  dönem bilgisi. **Format: 201807**
**RECONCILIATION.CM_DATE** | String  | Cari Mutabakatlar için tarih bilgisi. **Format: 2019-01-04T00:00:00.000+02:00**
**RECONCILIATION.STATUS** | String  | Mutabakat durum bilgisi.  
**RECONCILIATION.CREATE_DATE** | DateTime  | Mutabakatın özel entegratör sistemine yüklendiği tarih.
**RECONCILIATION.EMAIL** | ComplexType  | Mutabakatın e-posta durum sonuç objesi
**RECONCILIATION.EMAIL_STATUS_CODE** | String  | Mutabakatın e-posta durum kodu. Detaylar için E-Mutabakat e-posta durum kodları başlığını inceleyebilirsiniz.
**RECONCILIATION.EMAIL_STATUS_DESCRIPTION** | String  | Mutabakatın e-posta durum açıklaması. Detaylar için E-Mutabakat e-posta durum kodları başlığını inceleyebilirsiniz.
**RECONCILIATION.EMAIL_STATUS_DATE** | DateTime  | Mutabakatın e-posta durum tarihi.



### E-Mutabakat Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | KUYRUĞA EKLENDİ
105 | TASLAK OLARAK EKLENDİ
110 | İŞLENİYOR
120 | İŞLENDİ
125 | MUTABIK
126 | MUTABIK DEĞİL

### E-Mutabakat E-Posta Gönderim Durumları

Durum Kodu | Durum Açıklaması       
--------- | -----------
100 | HENÜZ İŞLENMEDİ
110 | İŞLENİYOR
120 | İŞLENDİ
130 | E-POSTA GÖNDERİM SONLANDI
