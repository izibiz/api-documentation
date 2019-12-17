## Mükellef Listesi Çekme (GetGibUserList)
E-Fatura ve E-İrsaliye sistemine kayıtlı firmalara ait GB/PK etiketlerinin sıkıştırılmış olarak istenilen tipte dönüldüğü servistir.

## Mükellef Çekme Senaryoları

<div style="width:500px">İşlem</div> | DOCUMENT | ALIAS|ALIAS_MODIFY|REGISTER_TIME       
--------- | -----------|-------|--------|--------
`Aktif` E-Fatura ve E-İrsaliye posta kutusu etiketlerini çekme | ALL | PK | - | -
`Aktif` E-Fatura ve E-İrsaliye GB ve PK etiketlerini çekme | ALL | ALL|-|-
`Aktif` E-Fatura posta kutusu etiketlerini çekme | INVOICE |PK |-|-
`Aktif` E-İrsaliye posta kutusu etiketlerini çekme |DESPATCHADVICE|PK |-|-
Belirli tarihten sonra (2019-12-01) `eklenen veya silinen` E-Fatura ve E-İrsaliye posta kutusu etiketlerini çekme | ALL |PK|2019-12-01|-
Belirli tarihten sonra (2019-12-01) `eklenen veya silinen` E-Fatura ve E-İrsaliye GB ve PK etiketlerini çekme | ALL |ALL|2019-12-01|-
Belirli tarihten sonra (2019-12-01) `eklenen veya silinen` E-Fatura posta kutusu etiketlerini çekme | INVOICE | PK| 2019-12-01 |-
Belirli tarihten sonra (2019-12-01) `eklenen veya silinen` E-İrsaliye posta kutusu etiketlerini çekme | DESPATCHADVICE | PK |2019-12-01
Belirli tarihten sonra (2019-12-01) E-Fatura veya E-İrsaliye `mükellefi` olan firmaların etiketlerini çekme | ALL | ALL | - | 2019-12-01
Belirli tarihten sonra (2013-12-01) E-Fatura veya E-İrsaliye `mükellefi` olan firmaların belirtilen bir tarihten (2019-12-01) sonra `eklenen veya silinen` etiketlerini çekme | ALL | ALL | 2019-12-01 | 2013-12-01

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | Evet | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**TYPE** | String | Hayır | Listenin dönüleceği dosya tipi. `XML` ve `CSV` olabilir. Varsayılan `XML`dir.   
**DOCUMENT_TYPE** | String | Hayır | Mükellef listesi çekilmek istenilen ürün tipi. E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` gönderilmelidir. Her iki ürüne ait etiketleri çekmek için `ALL` değeri gönderilebilir. Parametre gönderilmez bütün ürünlere ait `Aktif` etiket listesi dönülecektir.
**ALIAS_TYPE** | String | Hayır| Mükelleflerin etiketlerine göre çekmek için kullanılır. Sadece Gönderici Birim etiketini çekmek için `GB`, Posta Kutusu etiketini çekmek için  `PK` gönderilmelidir. Bütün etiketleri çekmek için `ALL` değeri gönderilebilir. Varsayılan `PK`dir.  Parametre gönderilmez ise sadece `PK` etiket listesi dönülecektir. Belge göndermek için sadece PK etiketlerine ihtiyaç bulunmaktadır.
**REGISTER_TIME_START** | DateTime | Hayır| Mükellefiyet başlangıç tarihi. Belirli bir tarihten sonra e-fatura veya e-irsaliye mükellefi sisteme dahil olmuş mükellefleri çekmek için kullanılabilir. Eğer tarih içerisinde saat bilgisi gönderilirse sonuç dönülürken dikkate alınacaktır. format: YYYY-AA-GG veya YYYY-AA-GGTSS:DD:SS formatında 2013-01-01, 2013-01-01T01:01:01
**ALIAS_MODIFY_DATE** | DateTime | Hayır| Etiket durum değişiklik tarihi. Belirli bir tarihten sonra sisteme eklenen veya silinen etiketleri çekmek için kullanılabilir. Bu parametre gönderilirse gönderilen tarihten sonra sisteme eklenen veya silinen etiketler dönülecektir. Eğer tarih içerisinde saat bilgisi gönderilirse sonuç dönülürken dikkate alınacaktır. format: YYYY-AA-GG veya YYYY-AA-GGTSS:DD:SS formatında 2013-01-01, 2013-01-01T01:01:01

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
**USER.DELETED** | String | Eleman sadece silinmiş etiketlerde bulunur. Değeri `Y` olur. Silinmemiş etiketlerde bu eleman bulunmaz.
**USER.DELETION_TIME** |  DateTime | Eleman sadece silinmiş etiketlerde bulunur. Etiketin GİB sisteminde kapatıldığı tarih. formatı: 2013-07-01T15:22:11
