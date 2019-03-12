## E-Arşiv Fatura Metodları
E-Fatura mükellefi olmayan firma veya nihai tüketiciye düzenlenen faturaların özel entegratör sistemine gönderilmesi ve raporlamasını sağlayan webservis uygulamasının clientıdır.

* Aşağıdaki metodlari içerir.
* SendEArchiveInvoice
* CancelEArchiveInvoice
* ReadFromArchive
* GetEArchiveReport
* GetEArchiveInvoiceStatus

## Dikkat Edilecek Hususlar(E-Arşiv Fatura)

* **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Login** servisi ile giriş yaparak session id alınacak. Session Id sistemimiz tarafında 8 saate kadar zaman aşımına uğramadığı için kullanıcı giriş yapınca session id alıp bütün kullanım süresinde aynı session id kullanabilirsiniz.
* **ReadFromArchive** servisi ile fatura istenilen formatta (XML, PDF, HTML) okunabilir.
* **CancelEArchiveInvoice** servisi ile hata tespiti veya müşterinin malı iade etmesi sebebi ile iptal edilen faturaları GIBe bildirilmek üzere gönderilir.
* **GetEArchiveInvoiceStatus** servisi ile özel entegratör sistemine yüklemiş e-Arşiv faturasanın durumu, e-posta durumu ve raporlanma durumunu sorgulayabilirsiniz.
* E-Fatura ve E-Arşiv faturaları farklı seri ile düzenlenmelidir.
* İnternet üzerinden yapılan satışlar için düzenlenen E-Arşiv faturaları ile diğer satışlardan (E-Fatura veya E-Arşiv) farklı serilerden düzenlenmesi zorunludur.
* UBL-TR olarak hazırlanan E-Arşiv faturaların ProfileId alanı `EARSIVFATURA` olarak yazılmalıdır. Bu alan eğer sizin tarafınızda farklı bir değer belirtilmiş ise sistem bu alan otomatik olarak “EARSIVFATURA” yazacaktır.
* E-Arşiv faturalarda faturanın düzenlenme zamanı(IssueTime) zorunludur.
* E-Arşiv faturalarda AdditionalDocumentReference alanında DocumentTypeCode ve DocumentType alanları zorunlu alandır.
* İnternet üzerinden yapılan satış için düzenlenen faturalar için Ödeme Şekli (PaymentMeans) ve Kargo bilgileri (Delivery) zorunludur.