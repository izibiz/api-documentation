## Belge Gönderme Kontrolleri
Özel entegratör sistemi senkron çalışmaktadır. Yani herhangi bir servise gönderilen istek sunucu tarafından anlık olarak işlenerek sonuç dönülür. Yüklenen belgelerde hatalı durum tespit edilmesi durumunda webservis hata (SOAP Fault) dönülmektedir.

Belge gönderiminde aşağıda ki kontroller yapılmaktadır:

* Webservis parametre kontrolü
* İşlem yapılacak aktif oturum kontrolü
* Gönderici firmanın özel entegratör sisteminde ki tanımlama kontrolü
* Gönderici ve alıcı firmaların mükellefiyet ve etiket kontrolü
* Belgenin UBL-TR şemasına uygunluk kontrolü
* Belgenin UBL-TR şematronuna uygunluk kontrolü
* Gönderilen belge(lerin) özel entegratör sisteminde tekillik kontrolü
