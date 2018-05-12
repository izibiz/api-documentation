## Oturum Açma (Login)
Web servis istemcisinin(client) EFATURA Entegrasyon Platformuna kimlik doğrulayarak giriş yapmasını sağlar. Webservise giriş için kullanılan kullanıcı bilgileri, portale giriş için kullanılan kullanıcı bilgileri ile aynıdır. Login komutu sonrası dönen session ID parametresi login sonrası çağrılacak tüm metodlarda parameter olarak kullanılmalıdır.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | Evet | Request Header objesi içerisinde bulunan SESSION_ID login servisinde -1 olarak gönderilmelidir.
**USER_NAME** | String | Evet | Kullanıcı adı. Portale giriş için kullanılan ile aynı.
**PASSWORD** | String | Evet | Şifre. Portale giriş için kullanılan ile aynı.



Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**SESSION_ID** | String | Sonraki metod çağrılarında kullanılacak oturum bilgisi.


<aside class="notice">...</aside>

<aside class="success">...</aside>

<aside class="warning">...</aside>
