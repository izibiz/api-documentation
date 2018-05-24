## E-Arşiv Fatura İptal (CancelEArchiveInvoice)
* CancelEArchiveInvoice servisi, E-Arşiv sunucularına gönderilen e-arşiv faturasının iptal ederek GIB'e iptal fatura durumunda raporlanmasını sağlar.
* İptal edilen değil ama silinen fatura müteselsilliği bozmamak için tekrar yüklenmelidir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**INVOICE_ID** | String  | Hayır | İptal edilecek faturanın numarası. FYA201800000001 formatında
**INVOICE_UUID** | String  | **Evet** | İptal edilecek faturanın Evrensel Tekil Tanımlama Numarası (ETTN). GUID formatında
**UPLOAD_FLAG** | String  | Hayır | E-Arşiv platformunda bulunmayan bir faturayı iptal etmek için `Y` degeri gönderilmesi ve `İptal Tarihi`, `Toplam Tutar` ve `Fatura Tarihi` parametrelerinin doldurulması gerekir.
**EARSIV_CANCEL_EMAIL** | String  | Hayır | İptal edilecek e-arşiv faturasının alıcısına e-posta olarak bildirimi için kullanılacak parametre. Birden fazla e-posta adresini virgül `,` ile ayırarak gönderebilirsiniz.  E-Posta formatında olmalıdır. (adsoyad@domain.com)
**DELETE_FLAG** | String  | Hayır | Sisteme yüklenmiş ama raporlanmamış bir e-Arşiv faturasını hiç raporlamamak için kullanılan parametredir.  `Y` değeri gönderilirse fatura GİB'e hiç bir türlü raporlanmayacaktır. **Silinen fatura müteselsilliği bozmamak için tekrar yüklenmelidir.**
**IPTAL_TARIHI** | String  | Hayır | E-Arşiv platformunda bulunmayan bir faturanın iptal isteğinde gönderilecek. Faturanın iptal tarihi.
**TOPLAM_TUTAR** | String  | Hayır | iptal edilen faturanın ödenecek tutarı.  E-Arşiv platformunda bulunmayan bir faturayı iptal ederken gönderilmelidir.
**INVOICE_CONTENT** | String  | Hayır | **Kullanmayınız**

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner.
