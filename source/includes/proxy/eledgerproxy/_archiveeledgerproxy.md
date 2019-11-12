## E-Defter Yedekleme (ArchiveELedger)
* Bir döneme ait bütün defterlerin yüklenmesini sağlayan metotdur.
* Döneme için bütün parçalara ait XML dosyaları içermeledir.


### İstek Parametreleri
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**FILENAME** | String | **Evet** | Yüklenecek dosyanın adı. (Format: VKN-DONEM-SUBE.zip : 4840847211-201911-0000.zip). Şubesiz yapıda bir firma ise şube numarası 0000 olarak gönderilmelidir.
**CONTENT** | Base64Binary | **Evet** | Bir dönemde ki bütün parçalara ait XML dosyalarının (Yevmiye, Kebir, Yevmiye Beratı, Kebir Beratı, GIB İmzalı Yevmiye Beratı, GIB İmzalı Kebir Beratı, Defter Raporu) sıkıştırılmış (zip) Base64Binary olarak encode edilmiş değeri.

### Başarılı Sonuç Nesnesi
Webservis işlemi başarılı olması durumunda response objesi içerisinde  `REQUEST_RETURN` tipinde sonuç dönülecektir.

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**REQUEST_RETURN** | ComplexType | Başarılı sonuç nesnesi
**REQUEST_RETURN.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**REQUEST_RETURN.RETURN_CODE** | String | Başarılı durumlarda `0` değeri döner. Başarısız olduğunda `REQUEST_RETURN` objesi dönülmez. `ERROR_TYPE` objesi dönülecektir.
**REQUEST_RETURN.CLIENT_TXN_ID** | String | İstek ile istemci tarafından işlem IDsi gönderilmişse sonuç ile beraber dönülür.


### Hata Sonuç Nesnesi
Webservis metodunda hata oluşması durumunda response objesi içerisinde `ERROR_TYPE` tipinde sonuç dönülecektir.

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ERROR_TYPE** | ComplexType | Başarısız sonuç nesnesi
**ERROR_TYPE.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**ERROR_TYPE.ERROR_CODE** | String | Başarısız işlemlerde `0` değeri döner.
**ERROR_TYPE.ERROR_SHORT_DESC** | String | Hatanın kısa açıklaması.
