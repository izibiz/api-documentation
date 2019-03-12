## E-İrsaliye Durumunu Okuma (GetDespatchAdviceStatus)
* Sistemde bulunan irsaliyelerin durumlarını okumak için kullanılan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**UUID** | String | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**DESPATCHADVICE_STATUS** | Complex | Sorgu kriterine uyan irsaliye yanıtlarının listesi. 
**DESPATCHADVICE_STATUS.DESPATCHADVICEHEADER** | Complex | İrsaliye yanıtına ait özet bilgiler içermektedir.
**DESPATCHADVICEHEADER.ID** | String | İrsaliye yanıtı numarası.
**DESPATCHADVICEHEADER.UUID** | String | Evrensel tekil tanımlama numarası.
**DESPATCHADVICEHEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**DESPATCHADVICEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**DESPATCHADVICEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_DATE** | Date | Fiili sevk tarihi.
**DESPATCHADVICEHEADER.ACTUAL_SHIPMENT_TIME** | String | Fiili sevk zamanı.
**DESPATCHADVICEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye yanıtı için `IN`, giden irsaliye yanıtı için `OUT` değeri dönülür.
**DESPATCHADVICEHEADER.STATUS** | String | Belgenin durumu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_CODE** | String | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**DESPATCHADVICEHEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.