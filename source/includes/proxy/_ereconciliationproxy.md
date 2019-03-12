## E-Mutabakat 
e-Mutabakat webservisinin clientıdır. Aşağıdaki metodları içerir.

* GetReconcilationStatus
* SendMailReconciliation
* SendReconciliation

## Dikkat Edilecek Hususlar(E-Mutabakat)

1. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Login** servisi ile oturum açarak session id alınacak. Session Id sistemimiz tarafında 8 saate kadar zaman aşımına uğramadığı için kullanıcı giriş yapınca session id alıp bütün kullanım süresinde aynı session id kullanabilirsiniz.
2. **SendReconciliation** metodu ile BA/BS ve Cari mutabakat gönderimi yapılabilmektedir. Detaylar için **E-Mutabakat Gönderme** bölümünü inceleyiniz.
3. **GetReconciliationStatus** metodu ile gönderilen mutabakatların durumları sorgulanabilir. Nihai duruma erişene kadar mutabakatların durumu özel entegratör sisteminden minumum 4 saatte bir sorgulanmalıdır. **Sık sorgulama yapmayınız.**
4. **Kimlik Doğrulama (Authentication)** Webservisinde bulunan **Logout** metodu ile kullanıcı mutabakat programını kapatınca oturum kapatılabilir.