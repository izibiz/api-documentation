## E-Defter Saklama Servisi
Mükellefler tarafında hazırlanan E-Defter dosyalarının özel entegratör sisteminde saklanmasını sağlayan servistir. Aşağıdaki metodlari içerir.

* E-Defter Yedekleme (ArchiveELedger)
* E-Defter Çekme (GetELeger)
* E-Defter İptal Etme (CancelELedger)

## Dikkat Edilecek Hususlar(E-Defter Saklama)

1. Proxy servisinde bulunan **Login** servisi ile oturum açarak session id alınacaktır.
2. **ArchiveELedger** metodu ile bir döneme ait defter yedekleme yapılmaktadır. Bir dönem en fazla bir defa yedeklenebilir.
3. **GetELedger** metodu ile daha önce yedeklenen bir döneme ait e-defterleri tekrar müşteri bilgisayarına çekmek için kullanılabilir.
4. **CancelELedger** metodu ile yedeklendikten sonra iptal edilmiş e-defterlerin iptali sağlanabilir.
5. Proxy servisinde bulunan **Logout** metodu ile oturum kapatılabilir.
