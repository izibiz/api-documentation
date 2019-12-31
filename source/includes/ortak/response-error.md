## Hata Sonuç Nesnesi
Webservis metodunda hata oluşması durumunda response objesi içerisinde `ERROR_TYPE` tipinde sonuç dönülecektir.

Servisten dönen hata sonuç nesnesi şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ERROR_TYPE.INTL_TXN_ID** | String | Sunucuda işlemin gerçekleştirildiği transaction IDsi. Bu ID istemci tarafında kaydedilerek oluşabilecek hatalarda referans olarak destek ekibine iletilebilir.
**ERROR_TYPE.ERROR_CODE** | String | Başarısız işlemlerde `-1` değeri döner.
**ERROR_TYPE.ERROR_SHORT_DESC** | String | Hatanın kısa açıklaması.

### Hata Kodları
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
