## Mükellef Kontrol(CheckUser)
* Mükellef VKN veya TCKN yada ismi kullanarak mükellef çekiminde ve kontrolünde kullanılır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**IDENTIFIER_VKN_TCKN** | String | **Hayır** | Firmanın VKN veya TCKN si.
**TITLE** | String | **Hayır** | Firmanın ismi.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**USER** | Complex | Kullanıcı bilgilerini içeren yapı.
**USER.IDENTIFIER** | String | Kullanıcının tanımlayıcı numarası.
**USER.ALIAS** | String | **Format: urn:mail:defaultpk@firma.com.tr**
**USER.TITLE** | String | Firmanın İsmi
**USER.TYPE** | String | Kullanıcı tipi
**USER.REGISTER_TIME** | DateFormat | Kullanıcı kayıt zamanı. **Format: 2019-12-31T23:59:59**
**USER.UNIT** | String | Unite değeri. 
**USER.ALIAS_CREATION_TIME** | DateFormat | Kullanıcı `ALIAS` üretilme zamanı. **Format: 2019-12-31T23:59:59**