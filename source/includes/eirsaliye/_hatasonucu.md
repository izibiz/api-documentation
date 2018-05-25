## Hata Sonuç Nesnesi
Webservis metodunda hata oluşması durumunda response objesi içerisinde `ERROR_TYPE` tipinde sonuç dönülecektir.

Servisten dönen hata sonuç nesnesi şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ERROR_TYPE.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**ERROR_TYPE.ERROR_CODE** | String | Hatanın kodu. Detay için hata kodları listesine bakınız.
**ERROR_TYPE.ERROR_SHORT_DESC** | String | Hatanın kısa açıklaması. Detay için hata kodları listesine bakınız.

<br><br>
Hata Kodu |  Açıklama
--------- | -----------
-1    | Sistem Hatası
10001 | İşlem Başarısız Oldu
10002 | Oturum Oluşturulamadı
10003 | İrsaliye Şematrondan Geçemedi
10004 | Geçersiz Oturum
10005 | Hesabınız belirtilen ürün göndermek için aktif degildir
10006 | Yetkiniz bulunmamaktadır
10007 | Zip dosya içermelidir
10008 | Kayıt Bulunamamıştır.
10009 | İrsaliye UUID/ID daha önce gönderilmiş bir İrsaliye ile Eşleşmektedir!
10010 | Zarf boyut sınırını aştı
10011 | Gönderilen istek  aynı dökuman bulunmaktadır.
10012 | Kullanıcı aktif degil
10013 | Gönderilen istek geçersizdir.
10014 | Geçersiz İmza.
10015 | Gönderilen istek sistemde mevcut değildir
10016 | Müşteri sistemde aktif degildir.
10017 | Yetkisiz erişim tepit edildi!
