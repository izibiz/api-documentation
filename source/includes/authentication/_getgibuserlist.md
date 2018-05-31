## Mükellef Listesi Çekme (GetGibUserList)
E-Fatura ve E-İrsaliye sistemine kayıtlı firmalara ait GB/PK etiketlerinin sıkıştırılmış olarak istenilen tipte dönüldüğü servistir.

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**TYPE** | String | Hayır | Listenin dönüleceği dosya tipi. `XML` ve `CSV` olabilir. Varsayılan `XML`dir.   
**DOCUMENT_TYPE** | String | Hayır | Mükellef listesi çekilmek istenilen ürün tipi. E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` gönderilmelidir. Her iki ürüne ait etiketleri çekmek için `ALL` değeri gönderilebilir. Parametre gönderilmez veya boş gönderilirse bütün liste dönülecektir.
**REGISTER_TIME_START** | DateTime | Hayır| Belirli bir tarihten sonra sisteme dahil olmuş mükellefleri çekmek için kullanılabilir. formatı: 2013-01-01T01:01:01

<br><br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CONTENT** | Base64Encoded | Kriterlere uygun mükelleflere ait GB ve PK adresleri

<aside class="success">
Sonuç sıkıştırılmış XML dosyası içerisinde `USER` tipinde değer dönülmektedir. Sonuç istemci tarafına çekildikten sonra zipten çıkarılmalı ve XML dosya işlenmelidir.
</aside>


**XML dosyasının içerisinde bulunan USER objesinin elamanları şu şekildedir :**

Eleman | Tip        | Açıklama
--------- | ----------- | -----------
**USER.IDENTIFIER** | String | Mükellefe ait VKNsı.
**USER.ALIAS** | String | Mükellefe ait GB veya PK etiketi. format: urn:mail:defaultgb@firma.com
**USER.TITLE** | String | Firmanın GİB e-fatura sisteminde tanımlı ünvanı.
**USER.TYPE** | String | Firmanın GİB e-fatura sisteminde tanımlı tipi. `OZEL` veya `KAMU` olabilir.
**USER.UNIT** | String | Etiketin tipi. `GB` veya `PK`
**USER.DOCUMENT_TYPE** | String | E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` dönülmektedir.
**USER.REGISTER_TIME** | DateTime | Firmanın GİB e-fatura sistemine ilk kayıt olduğu tarih. formatı: 2013-07-01T15:22:11
**USER.ALIAS_CREATION_TIME** | DateTime | Etiketin oluşturulduğu tarih. formatı: 2013-07-01T15:22:11
