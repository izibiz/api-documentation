## E-Fatura Mükellefi Sorgulama (CheckUser) - Kullanmayınız
* Mükellefin, Gelir İdaresi Başkanlığı sistemine kayıtlı olup olmadığının kontrol edildiği servistir.
* Sorgulanan VKN GİB sistemine kayıtlıysa, sistemde tanımlanmış etiket listesi dönülmektedir.
* Sorgulanan VKN GİB sistemine kayıtlı değilse liste boş dönülür. **Sonuç boş ise firma mükellef değildir.**

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**USER.IDENTIFIER** | String | **Evet** | Mükellefiyeti sorgulanacak firmanın vergi kimlik numarası
**DOCUMENT_TYPE** | String | **Evet**  | Mükelleffiyet kontrol edilecek ürün tipi. E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` gönderilmelidir.


<br><br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**USER.IDENTIFIER** | String | Mükellefe ait VKNsı.
**USER.ALIAS** | String | Mükellefe ait GB veya PK etiketi.
**USER.TITLE** | String | Firmanın GİB sisteminde tanımlı ünvanı.
**USER.TYPE** | String | Firmanın GİB sisteminde tanımlı tipi. OZEL veya KAMU olabilir.
**USER.REGISTER_TIME** | Date | Firmanın GİB sistemine ilk kayıt olduğu tarih. formatı: 2013-07-01T15:22:11
**USER.UNIT** | Date | Etiketin tipi. GB veya PK
**USER.ALIAS_CREATION_TIME** | DateTime | Etiketin oluşturulduğu tarih. formatı: 2013-07-01T15:22:11
