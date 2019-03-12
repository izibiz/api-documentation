## E-SMM Durumu Okuma (GetSMMStatus)
* Özel entegratör platformundan imzalanmış belgelerin durumlarını okumayı sağlayan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**APPLICATION_NAME** | String | **Hayır** | Metodu kullanan uygulamanın adı verilir.
**UUID** | String | **Hayır** | Yüklenecek taslağın UUID değeri.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**SMM_STATUS** | Complex | Sorgu kriterine uyan tekil belge. Belge numarası `ID`, evrensel tekil tanımlama numarası `UUID` attribute içerisinde dönülmektedir.
**SMM_STATUS.HEADER** | Complex | Belgeye ait özet bilgileri içerir.
**HEADER.ISSUE_DATE** | DateTime | Belge düzenlenme tarihi. **Format: 2019-12-31+03:00**
**HEADER.PAYABLE_AMOUNT** | AmountType | Toplam ödenecek tutar.
**HEADER.PROFILE_ID** | String | Belge senaryosu.
**HEADER.STATUS** | String | Belgenin durumu.
**HEADER.STATUS_CODE** | String | Belge durum kodu.
**HEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması.