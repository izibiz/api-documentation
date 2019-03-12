## E-Mustahsil Gönderme (SendCreditNote)
* E-Müstahsil Makbuzu belgesini özel entegratör sistemlerine gönderilmesini sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**COMPRESSED** | String | **Hayır** | Belge sıkıştırılarak/ziplenerek gönderiliyorsa değer verilmeyebilir veya `Y` olarak gönderilebilir. XML formatında sıkıştırılmadan yüklemek için `N` değeri gönderilmelidir.
**EMAIL_ADDRESS** | String | **Evet** | Belgenin e-posta olarak iletileceği e-posta adresi. E-Posta formatında olmak zorundadır. E-Posta gönderimini özel entegratör sisteminden yapılması isteniyorsa `Y` değeri gönderilmelidir. Varsayılan değer `N` dir. `EMAIL_FLAG` alanı `Y` gönderildiği zaman bu elaman zorunludur. `EMAIL_FLAG` gönderilmemiş veya `N` değeri gönderilmişse bu elaman dolu olsa dahi e-posta gönderilmeyecektir.
**EMAIL_FLAG** | String | **Hayır** | Belge alıcısına e-posta olarak gönderilip gönderilmeyeceğinin belirlendiği parametredir. E-Posta göndermek istenilen durumda `Y` değeri gönderilmelidir. Eleman gönderilmezse `EMAIL` alanı dolu olsa dahi e-posta gönderilmez. **DİKKAT: Eğer müşterinin özel entegratör ile e-posta gönderme hizmeti sözleşmesi yoksa ve `Y` değeri gönderilirse belgenin sisteme yüklenmesine izin verilmeyecektir. Bu durumda özel entegratör ile iletişime geçerek e-posta gönderim hizmeti satın alınmalı veya  e-posta gönderiminin farklı bir kanaldan müşteri tarafından yapılması gerekmektedir. Bu durumda bu parametre gönderilmemeli veya `N` olarak gönderilmelidir. **
**ID_ASSIGN_FLAG** | String | **Hayır** | Belge numarasının özel entegratör ortamından atanmasını sağlamak için kullanılacak parametredir. Eğer belge numarası istemci tarafında atanmışsa parametre gönderilmemeli veya `N` değeri gönderilmelidir. Belge numarasını sunucuda atamak için `Y` değeri gönderilmelidir.
**ID_ASSIGN_PREFIX** | String | **Evet** | Belge numarasının özel entegratör ortamından atanmasını talep edildiği durumlarda atama yapılacak seri ön eki değerinin belirlendiği parametredir. **Seri ön eki 3 hane alfanumerik değer içerebilir.** Gönderilen seri ön eki özel entegratör platformunda tanımlı olmalıdır. Eğer `ID_ASSIGN_FLAG=Y` olarak gönderilmiş ama `ID_ASSIGN_PREFIX` parametresi gönderilmemişse, müşterinin özel entegratörde tanımlı varsaylılan serisi kullanılacaktır. Eğer varsayılan seri tanımlanmamışsa işlem başarısız olacak ve hata dönülecektir.
**SENDER_VKN** | String | **Hayır** | Belgeyi gönderen firmanın VKNsi.
**RECEIVER_VKN** | String | **Hayır** | Belgeyi alan firmanın VKNsi.
**ID** | String | **Hayır** | Yüklenecek taslağın ID değeri.
**UUID** | String | **Hayır** | Yüklenecek taslağın UUID değeri.
**CREDIT_NOTE_CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Eğer belgeyi ziplemeden/sıkıştırmadan göndermek istiyorsanız `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.