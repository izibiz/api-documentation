## Oturum Kapatma (Logout)
Web servis istemcisinin(client) EFATURA Entegrasyon Platformununda ki oturumu kapatmasını sağlayan metotdur.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | Evet | Oturum kapatılmak istenen session ID değeri gönderilir.

<br>
<br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RETURN_CODE** | String | Oturum başarı ile sonlandırılmışsa 0 döner
