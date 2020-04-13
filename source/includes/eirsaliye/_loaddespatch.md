## Taslak İrsaliye Yükleme (LoadDespatchAdvice)
* Özel entegratör platformu üzerinden 1 yada daha fazla irsaliyeyi sisteme yükler.
* Eğer irsaliye numarası atanmışsa (16 hane ise) şema ve şematron kontrolünden geçirilir. İrsaliye numarası atanmamışsa şema ve şematron kontrolü yapılmaz.
* Aynı İrsaliye tekrar taslaklara yüklenmesine müsade edilir. Farklı kayıt oluşturulmaz. Oluşan kayıt yeni içerik ile güncellenir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. İrsaliye sıkıştırılarak/ziplenerek gönderiliyorsa `COMPRESSED` alanı gönderilmeyebilir veya `Y` olarak gönderilebilir. **XML formatında sıkıştırılmadan yüklemek için mutlaka `COMPRESSED` eleman eklenmeli ve `N` değeri gönderilmelidir.**
**DESPATCHADVICE** | ComplexType | **Evet** | İrsaliye numarasını `ID` attribute içerisine, Evrensel tekil tanımlama numarasını (ETTN) `UUID` attribute eklenmelidir.
**DESPATCHADVICE.CONTENT** | Base64Binary | Evet | İrsaliyenin Base64Binary olarak encode edilmiş XML veya Ziplenmiş içeriği. Bir istek ile çoklu XML gönderimi yapılabilir. **Birden fazla irsaliye göndermek için DESPATCHADVICE elemanı çoklanmalıdır.**

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda request return objesi dönülmez.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.

### Hata Kod Listesi

Hata Kodu |  Açıklama
--------- | -----------
-1    | Sistem Hatası
10001 | Sistemde Beklenmedik Bir Hata Oluştu: {HATA SEBEBİ}
10002 | Oturum oluşturulamadı
10003 | Belge Şematron Kontrolünden Geçemedi: {HATA SEBEBİ}
10004 | Geçersiz oturum. Lütfen tekrar oturum oluşturunuz ve tekrar deneyiniz
10005 | Hesabınızın {EIRSALIYE} ürün aktif degildir
10006 | Yetkiniz bulunmamaktadır
10007 | İstek ZİP bir dosya içermelidir
10008 | Belirtilen kriterlere uygun kayıt bulunamamıştır
10009 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. ID: ve UUID:
10010 | Bir istek  boyutu maksimum 5MB veya 100 adet belge  içerebilir
10011 | Tekrarlanan işlem: kayıt sistemde mevcuttur
10012 | Kullanıcı aktif degil {kullanıcı adı}
10013 | Gönderilen istek geçersizdir. Hata sebebi {0}
10014 | Geçersiz İmza
10015 | Servis desteklenmemektedir. Servis adı
10016 | Müşteri sistemde aktif degildir.
10017 | Gönderilen belge daha önce gönderilmiş bir belge ile eşleşmektedir. ID: ve UUID:
