## E-Arşiv Fatura İptal (CancelEArchiveInvoice)
* Özel entegratör platformuna gönderildikten veya GİB'e raporlandıktan sonra eksik veya hata tespit edilen veya müşteri tarafından iade edilen belgenin GIB'e iptal fatura durumunda raporlanmasını sağlayan servistir.
* GİB'e raporlamadan tespit edilmiş bir hata sebebi ile hiç raporlanmamasını istenildiği durumlarda belge numarası farklı bir faturaya atanarak gönderilebilir.
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
**TOPLAM_TUTAR** | String  | Hayır | İptal edilen faturanın ödenecek tutarı.  E-Arşiv platformunda bulunmayan bir faturayı iptal ederken gönderilmelidir.
**IPTAL_NOTU** | String  | Hayır | İptal edilen faturanın iptal not değeri.  E-Arşiv faturasını iptal ederken not eklemek istendiğinde gönderilmelidir.
**INVOICE_CONTENT** | String  | Hayır | **Kullanmayınız**

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner.
