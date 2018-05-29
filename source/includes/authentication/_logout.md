## Oturum Kapatma (Logout)
Web servis istemcisinin(client)Entegrasyon Platformununda ki oturumu kapatmasını sağlayan servistir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Oturum kapatılmak istenen session ID değeri

<br>
<br>
Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RETURN_CODE** | String | Oturum başarı ile sonlandırılmışsa `0` döner
