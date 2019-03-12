## E-Arşiv Fatura Okuma (ReadFromArchive)
* E-Arşiv Fatura içeriğinin fatura UUID ve içerik tipi kullanılarak çekilmesini sağlar.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**INVOICE_ID** | String | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
**DOCUMENT_TYPE** | String | **Evet** | E-Arşiv Fatura içeriğinin nasıl yollanacağını belirler. `XML`, `HTML` ve `PDF` olabilir.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CONTENT** | Base64Binary | Belgenin Base64Binary formatında gelen içeriği.