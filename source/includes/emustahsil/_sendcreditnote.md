## E-Müstahsil Gönderme (SendCreditNote)
E-Müstahsil Makbuzu belgesini özel entegratör sistemlerine gönderilmesini sağlayan servistir. Bu servis ile gönderilen belgeler kuyruğa eklenerek işleme (imzalama ve raporlama) alınacaktır.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. `SESSION_ID` değeri **Kimlik Doğrulama (Authentication)** webservisinde ki `Login` metodundan alınan değerdir. Belge sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` eleman eklenmeli ve `N` değeri gönderilmelidir.**
**SENDER** | ComplexType | Hayır | İrsaliye gönderen tarafın vergi kimlik numarasını `vkn` attribute içerisine eklenmelidir. Eğer eleman gönderilmezse oturum açılan kullanıcının bağlı olduğu hesapta ki VKN kullanılacaktır. **Sender elemanı gönderilmesini tavsiye ederiz.**
**RECEIVER** | ComplexType | Hayır | Belgeyi alan tarafının kimlik numarasını (TCKN) `vkn` attribute içerisine eklenmelidir. Eğer eleman gönderilmezse belge içerisinde ki alıcı taraf (AccountingCustomerParty) içerisinde ki TCKN değeri kullanılacaktır.
**ID_ASSIGN_FLAG** | String | Hayır | Belge numarasının özel entegratör ortamından atanmasını sağlamak için kullanılacak parametredir. Eğer belge numarası istemci tarafında atanmışsa parametre gönderilmemeli veya `N` değeri gönderilmelidir. Belge numarasını sunucuda atamak için `Y` değeri gönderilmelidir.
**ID_ASSIGN_PREFIX** | String | Hayır | Belge numarasının özel entegratör ortamından atanmasını talep edildiği durumlarda atama yapılacak seri ön eki değerinin belirlendiği parametredir. **Seri ön eki 3 hane alfanumerik değer içerebilir.** Gönderilen seri ön eki özel entegratör platformunda tanımlı olmalıdır.   Eğer `ID_ASSIGN_FLAG=Y` olarak gönderilmiş ama `ID_ASSIGN_PREFIX` parametresi gönderilmemişse, müşterinin özel entegratörde tanımlı varsaylılan serisi kullanılacaktır. Eğer varsayılan seri tanımlanmamışsa işlem başarısız olacak ve hata dönülecektir.
**CREDITNOTE** | ComplexType | **Evet** | Gönderilecek belgenin numarası `ID` attribute içerisine, evrensel tekil tanımlama numarası (ETTN) ise `UUID` attribute içerisine eklenmek zorundadır.  Aynı alıcıya düzenlenen bir veya birden fazla müstahsil makbuzu belgeleri tek istek ile entegrasyon platformuna yüklenebilir.  **Birden fazla belge göndermek için CREDITNOTE elemanı çoklanmalıdır.**
**CREDITNOTE.CREDITNOTEHEADER** | ComplexType | Hayır | Webservis içerisinde ortak eleman tipi olduğu için şema içerisinde görünmektedir. **Göndermeyiniz.**
**CREDITNOTE.CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Eğer belgeyi ziplemeden/sıkıştırmadan göndermek istiyorsanız `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.


Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda REQUEST_RETURN objesi dönülmez. ERROR_TYPE objesi dönülecektir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
