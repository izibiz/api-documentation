## E-Defter İptal (CancelELedger)
* E-Defter döneminin iptal edilmesini sağlayan servistir.
* İptal edilen dönem tekrar yedeklenmelidir.


### İstek Parametreleri
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri
**DONEM** | String | **Evet** | Yüklenen e-defter dönemi YYYYAA formatında (Ekim 2019 için 201911)
**VKN** | String | **Evet** | Yüklenen e-defterin sahibi firmanın vergi kimlik numarası. 10-11 hane numerik değer.

### Başarılı Sonuç Nesnesi
Webservis işlemi başarılı olması durumunda response objesi içerisinde `REQUEST_RETURN` tipinde sonuç dönülecektir.


Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN** | ComplexType | Başarılı sonuç nesnesi
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda WS Fault objesi dönecektir.



### Hata Sonuç Nesnesi
Webservis metodunda hata oluşması durumunda response objesi içerisinde `ERROR_TYPE` tipinde sonuç dönülecektir.

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ERROR_TYPE** | ComplexType | Başarısız sonuç nesnesi
**ERROR_TYPE.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**ERROR_TYPE.ERROR_CODE** | String | Başarısız işlemlerde `0` değeri döner.
**ERROR_TYPE.ERROR_SHORT_DESC** | String | Hatanın kısa açıklaması.
