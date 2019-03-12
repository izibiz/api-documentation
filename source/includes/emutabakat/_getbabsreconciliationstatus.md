## BA/BS Mutabakat Durum Sorgulama (GetBABSReconciliationStatus)
* Entegrasyon platformunda bulunan BA/BS mutabakatın durumunu sorgulamayı sağlayan servistir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME`, `CHANNEL_NAME` alanı zorunludur.
**RECONCILIATION_SEARCHING** | ComplexType  | **Evet** | Sorgulanacak mutabakatlara ait kriterleri belirlemek için kullanılır.
**SEARCH_KEY.CUSTOMER_IDENTIFIER** | String  | Hayır | Durumu sorgulanacak müşteri VKN/TCKN. Bir dönemde sadece bir cari/mükellefe ait mutabakatın durumunu sorgulamak için kullanılabilir.
**SEARCH_KEY.ACCOUNTING_PERIOD** | String  | **Evet** | Durumu sorgulanacak mutabakat dönemi. Bir dönemde ki bütün mutabakatların durumunu sorgulamak için kullanılır.


Servisten dönen parametreler şu şekildedir:


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RECONCILIATION_STATUS** | ComplexType | Mutabakat durum sonuç objesi. Eğer aranan kritere uygun mutabakat bulunmuyorsa sonuç boş kayıt döner.
**RECONCILIATION_STATUS.RECONCILATION** | ComplexType | Durumu sorgulaması kriterine uyan mutabakat objesi.
**RECONCILATION.CUSTOMER_IDENTIFIER** | String | Mutabakat gönderilen mükellef VKN/TCKN.
**RECONCILIATION.ACCOUNTING_PERIOD** | String  | Mutabakat dönemi. **Format: 201807**
**RECONCILIATION.STATUS_CODE** | String  | Mutabakat durum kodu. Detaylar için E-Mutabakat durum kodları başlığını inceleyebilirsiniz.
**RECONCILIATION.STATUS_DESCRIPTION** | String  | Mutabakat durum açıklaması. Detaylar için E-Mutabakat durum kodları başlığını inceleyebilirsiniz.
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
