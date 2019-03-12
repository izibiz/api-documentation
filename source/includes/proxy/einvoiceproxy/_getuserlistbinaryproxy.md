## Mükellef Listesi Çekme(GetUserListBinary)
* Mükellef Listesini Çekmek için kullanılır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**TYPE** | String | **Hayır** | Belgenin hangi türde geleceği. 
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CONTENT** | Base64Binary | Belgenin Base64Binary olarak encode edilmiş içeriği dönecektir.