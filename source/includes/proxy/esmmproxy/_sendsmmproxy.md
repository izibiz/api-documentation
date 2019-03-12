## E-SMM Gönderme (SendSmm)
* E-SMM belgesini özel entegratör sistemlerine gönderilmesini sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**COMPRESSED** | String | **Hayır** | Belge sıkıştırılarak/ziplenerek gönderiliyorsa değer verilmeyebilir veya `Y` olarak gönderilebilir. XML formatında sıkıştırılmadan yüklemek için `N` değeri gönderilmelidir.
**ID** | String | **Hayır** | Yüklenecek taslağın ID değeri.
**UUID** | String | **Hayır** | Yüklenecek taslağın UUID değeri.
**SMS_FLAG** | Enum | **Hayır** | `ELEKTRONIK` olarak yollanan belgelerde kontrolü yapılır. `Y` girildi ise `SMS_NUMBER` değeri verilmelidir. `N`verildiğinde verilse bile `SMS_NUMBER` değeri dikkate alınmaz.
**SMS_NUMBER** | String | **Hayır** | Belgenin yollanacağı kişinin telefon numarası. **Format: 0(500) 500 50 50**
**EMAIL_FLAG** | Enum | **Hayır** | `ELEKTRONIK` olarak yollanan belgelerde kontrolü yapılır. `Y` girildi ise `EMAIL` değeri verilmelidir. `N`verildiğinde verilse bile `EMAIL` değeri dikkate alınmaz.
**EMAIL** | String | **Hayır** | Belgenin yollanacağı mail adresi. Format kontrolü yapılır, emailin doğruluğu kullanıcıya aittir. **Format: smm@firma.com.tr**
**SERIES_FLAG** | Enum | **Hayır** | Belge numarasının özel entegratör tarafından atanması için `Y` değeri gönderilmelidir. DİKKAT: `SERIES_PREFIX` elemanında belirlenen ön ek ile belge numarası atanacak ve belge içerisinde ki değer ezilecektir.
**SERIES_PREFIX** | String | **Hayır** | Belge numarası atanacak ön ek. 3 hane alfanumerik değer içermelidir. Belge numarası yönetimi hakkında daha detaylı bilgi almak için **Başlarken -> Belge Numarası Yönetimi** başlığını inceleyiniz. Belge numarasının özel entegratör tarafından atanması için `Y` değeri gönderilmelidir. DİKKAT: `SERIES_FLAG` elemanı `Y` değeri gönderilmemişse bu alan dolu olsa dahi belge numarası atanmayacaktır.
**SENDING_TYPE** | Enum | **Evet** | Belgenin yollanma şekli. `ELEKTRONIK` veya `KAGIT` olabilir. Gönderim şekli `ELEKTRONIK` olan belge SMS veya ePosta adresi olmak zorundadır
**SMM_CONTENT** | Base64Binary | **Evet** | Belgenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Eğer belgeyi ziplemeden/sıkıştırmadan göndermek istiyorsanız `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.