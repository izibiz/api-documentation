## E-Fatura Metodları
e-Fatura servisi, e-fatura mükellefinin fatura gönderimini ve gelen faturaları kendisi sistemine çekmesini sağlayan webservis uygulamasının clientıdır.

* Şu metodları içerir.
* SendInvoice
* SendEInvoice
* LoadInvoice
* GetInvoice
* GetUserList
* CheckUser
* MarkInvoice
* GetInvoiceStatus
* SendInvoiceResp
* GetUserListBinary
* GetAllUserListBinary

## Dikkat Edilecek Hususlar(E-Fatura)

1. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Login** servisi ile oturum açarak session id alınacak. Session Id sistemimiz tarafında 8 saate kadar zaman aşımına uğramadığı için kullanıcı giriş yapınca session id alıp bütün kullanım süresinde aynı session id kullanabilirsiniz.
2. E-Fatura Mükellefi olan firmalara kesilen faturaları UBL-TR formatına dönüştürerek (ekte örnek fatura bulunuyor) İzibiz sunucularına gönderebilirsiniz. Her fatura içerisinde faturanın görüntülenmesini sağlayan XSLT dokümanı olmalıdır.
3. **SendInvoice** metodu ile fatura gönderimi yapılacak. Gönderim esnasında eğer faturanın alıcısına ait birden fazla Posta Kutusu bulunuyorsa ekranda seçilerek gönderilmesi sağlanmalı. Sadece 1 adet PK adresi varsa seçim yapılmadan gönderim sağlanabilir.
4. **GetInvoiceStatus** metodu ile gelen/giden faturaların durumları sorgulanacak. Nihai duruma erişene kadar faturanın durumu özel entegratör sisteminden minumum 4 saatte bir sorgulanmalıdır. **Sık sorgulama yapmayınız.**
5. **GetInvoice** metodu ile firmaya gelen faturalar müşteri bilgisayarına aktarılır. İzibiz sistemlerine gelen yeni faturaları almanız gerekmektedir. Servis ile yeni gelen en fazla 100 adet faturayı çekebilirsiniz. Eğer dönen listede 100 adet fatura varsa yeniden getinvoice servisi çağırılarak başka fatura olup olmadığı kontrol edilmelidir. Dönen listede 100den az fatura varsa tekrar sorgulama yapmaya gerek yoktur. Fatura çekme zamanlayıcı ile yapılıyorsa en az 15 dk bir servis çağırılmalıdır.
6. **MarkInvoice** metodu ile başarılı şekilde teslim alınan faturalar izibiz sistemlerinde okundu olarak işaretlenir. Böylece bir sonra ki getinvoice servisi çağrılınca dönülmez.
7. Gelen bir faturaya 8 gün içerisinde kabul veya red gönderilebilir. **8 günü geçtikten sonra kabul/red yapılması engellenmelidir. Temel faturalar için yanıt gönderilmesi kısıtlanmalıdır.**
8. Ticari bir faturaya elektronik ortamda en fazla 1 adet yanıt gönderilebilir. Bundan dolayı bir faturaya başarıyla yanıt (kabul/red) gönderilmişse farklı bir yanıt gönderilmesi kısıtlanmalıdır.
9. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Logout** metodu ile kullanıcı e-fatura programını kapatınca veya sizin belirlediğiniz bir sürede oturumu kapatabilirsiniz.