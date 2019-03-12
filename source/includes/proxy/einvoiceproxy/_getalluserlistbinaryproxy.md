## Tüm Mükelleflerin Listesini Çekme(GetAllUserListBinary)
* Tüm Mükellef Listesini Çekmek için kullanılır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**TYPE** | String | **Hayır** | Belgenin hangi türde geleceği. 
**DOCUMENT_TYPE** | String | **Hayır** | Dökümanın tipi.
**REGISTER_TIME_START** | GregorianCalendar | **Hayır** | Tarih bilgisi girilir. **Format: 2018-01-01**
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CONTENT** | Base64Binary | Belgenin Base64Binary olarak encode edilmiş içeriği dönecektir.