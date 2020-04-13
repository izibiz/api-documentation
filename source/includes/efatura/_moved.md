## Oturum Açma (Login) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki OTURUM AÇMA (Login) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Lütfen oturum açmak için Authentication servisini kullanınız.
</aside>

## Oturum Kapatma (Logout) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki OTURUM KAPATMA (Logout) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Lütfen oturum kapatmak için Authentication servisini kullanınız.
</aside>

## Mükellef Listesi Çekme (GetUserListBinary) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki MÜKELLEF LİSTESİ ÇEKME (GetUserListBinary) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Ayrıca servisin ismi GetGibUserList olarak değiştirilmiştir. Lütfen mükellef listesini çekmek için Authentication servisindeki GetGibUserList metodunu kullanınız.
</aside>

## Mükellef Listesi Çekme (GetUserList) - Kullanmayınız
<aside class="warning">
Bu servis e-fatura sistemine kayıtlı bütün mükelleflere ait etiketlerin XML formatında sıkıştırılmadan toplu çekmek için kullanılmıştır. Ancak E-Fatura sistemine kayıtlı mükellef listesinin artmasından dolayı performans sorunu oluşmuştur. Mükellef listesini sıkıştırılmış/ziplenmiş XML olarak dönen GetGibUserList servisi eklenmiştir. Bu servis kullanımı sonlandırılmıştır. Mevcut iş ortaklarımız yeni servise geçince tamamen kapatılacaktır.  Lütfen Kimlik Doğrulama webservisinde ki Mükellef Listesi Çekme (GetGibUserList) başlığını inceleyiniz.
</aside>



## Uygulama Yanıtı Hazırlama (PrepareInvoiceResponse) - Kullanmayınız
<aside class="warning">
Bu servis kullanımı sonlandırılmıştır. Lütfen Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign) başlığını inceleyiniz.
</aside>

## Uygulama Yanıtı Gönderme - İmzalı  (SendInvoiceResponse)
<aside class="warning">
Bu servis uygulama yanıtını kendi mali mühürü ile hazırlayıp göndermek isteyenler için hazırlanmıştır. Eğer belgelerinizin imzalanmasını Özel Entegratör'e devretmişseniz bu servisi kullanmayınız. Lütfen  Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign) başlığını inceleyiniz.
</aside>

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**APPRESPONSE** | Base64Binary  | Evet | ApplicationResponse formatında hazırlanmış ve imzalanmış uygulama yanıtının Base64Binary encode edilmiş değeri. Uygulama yanıtı hazırlamak için GİB kılavuzunda paylaşılan Uygulama Yanıtı dokümanı inceleyebilirisiniz.
br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**RETURN_CODE** | String | İşlem başarılı ise `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.
