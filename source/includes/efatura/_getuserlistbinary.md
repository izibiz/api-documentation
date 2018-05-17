## Mükellef Listesi Çekme (GetUserListBinary)
E-Fatura ve E-İrsaliye sistemine kayıtlı firmalara ait GB/PK etiketlerinin sıkıştırılmış olarak istenilen tipte dönüldüğü servistir.

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**TYPE** | String | Hayır | Listenin dönüleceği dosya tipi. XML ve CSV olabilir. Varsayılan XMLdir.   
**DOCUMENT_TYPE** | String | Hayır | Mükellef listesi çekilmek istenilen ürün tipi. E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` gönderilmelidir. Her iki ürüne ait etiketkleri çekmek için `ALL` değeri gönderilebilir. Eleman gönderilmez veya boş gönderilirse e-fatura ve e-irsaliye ait bütün liste dönülecektir.
**REGISTER_TIME_START** | DateTime | Hayır| Belirli bir tarihten sonra sisteme dahil olmuş mükellefi çekmek için kullanılabilir. formatı: 2013-01-01T01:01:01

<br><br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CONTENT** | Base64Encoded | Kriterlere uygun mükelleflere ait GB ve PK adresleri

<aside class="success">
Sonuç sıkıştırılmış XML dosyası içerisinde USER tipinde değerler dönmektedir. Sonuç istemci tarafına çekildikten sonra zipten çıkarılmalı ve XML dosya işlenmelidir.
</aside>


**XML dosyasının içerisinde bulunan USER objesinin elamanları şu şekildedir :**

Eleman | Tip        | Açıklama
--------- | ----------- | -----------
**USER.IDENTIFIER** | String | Mükellefe ait VKNsı.
**USER.ALIAS** | String | Mükellefe ait GB veya PK etiketi. format: urn:mail:defaultgb@firma.com
**USER.TITLE** | String | Firmanın GİB e-fatura sisteminde tanımlı ünvanı.
**USER.TYPE** | String | Firmanın GİB e-fatura sisteminde tanımlı tipi. OZEL veya KAMU olabilir.
**USER.UNIT** | String | Etiketin tipi. GB veya PK
**USER.DOCUMENT_TYPE** | String | E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` dönülmektedir.
**USER.REGISTER_TIME** | Date | Firmanın GİB e-fatura sistemine ilk kayıt olduğu tarih. formatı: 2013-07-01T15:22:11
**USER.ALIAS_CREATION_TIME** | Date | Etiketin oluşturulduğu tarih. formatı: 2013-07-01T15:22:11



## Mükellef Listesi Çekme (GetUserList) - Kullanmayınız
Bu servis e-fatura sistemine kayıtlı bütün mükelleflere ait etiketlerin XML formatında sıkıştırılmadan toplu çekmeyi sağlamaktadır. E-Fatura sistemine kayıtlı mükellef listesinin arttığından dolayı performans sorunu oluşmuştur. Mükellef listesini sıkıştırılmış/ziplenmiş XML olarak dönen **GetUserListBinary** servisi eklenmiştir. **Bu servis kullanımı sonlandırılmıştır.** Mevcut iş ortaklarımız yeni servise geçince tamamen kapatılacaktır.  **Lütfen Mükellef Listesi Çekme (GetUserListBinary) başlığını inceleyiniz.**


## E-Fatura Mükellefi Sorgulama (CheckUser) - Kullanmayınız
<aside class="warning">
  Bu servis kullanımı sonlandırılmıştır. Lütfen Uygulama Yanıtı Gönderme (SendInvoiceResponseWithServerSign) başlığını inceleyiniz.
</aside>

* Mükellefin, Gelir İdaresi Başkanlığı E-Fatura sistemine kayıtlı olup olmadığının kontrol edildiği servistir.
* Sorgulanan VKN e-fatura sistemine kayıtlıysa, sistemde tanımlanmış etiket listesi dönülmektedir.
* Sorgulanan VKN e-fatura sistemine kayıtlı değilse liste boş dönülür.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**USER.IDENTIFIER** | String | Hayır | E-Fatura mükellefiyeti sorgulanacak firmanın vergi kimlik numarası
**USER.UNIT** | String | Hayır | Mükellefe ait bir etiket tipi sorgulanmak istenildiğinde kullanılabilir. Değer olarak GB veya PK gönderilebilir.


<br><br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**USER.IDENTIFIER** | String | Mükellefe ait VKNsı.
**USER.ALIAS** | String | Mükellefe ait GB veya PK etiketi.
**USER.TITLE** | String | Firmanın GİB e-fatura sisteminde tanımlı ünvanı.
**USER.TYPE** | String | Firmanın GİB e-fatura sisteminde tanımlı tipi. OZEL veya KAMU olabilir.
**USER.REGISTER_TIME** | Date | Firmanın GİB e-fatura sistemine ilk kayıt olduğu tarih. formatı: 2013-07-01T15:22:11
**USER.UNIT** | Date | Etiketin tipi. GB veya PK
**USER.ALIAS_CREATION_TIME** | Date | Etiketin oluşturulduğu tarih. formatı: 2013-07-01T15:22:11
