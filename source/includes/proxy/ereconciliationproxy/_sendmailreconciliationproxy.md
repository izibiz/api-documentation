## E-Mutabakat Maili Gönderme (SendMailReconciliation)
* Mutabakat mükellefine mail yollayan servisin clientidir.
* Mutabakatın UUID değeri verilmesi gerekir.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif `SESSION ID` değeri.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**UUID** | String | **Evet** | Mail yollanacak mutabakatın UUID si.
<br><br>