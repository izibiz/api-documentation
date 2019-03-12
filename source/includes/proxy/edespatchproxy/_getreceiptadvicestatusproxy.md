## E-İrsaliye Yanıtı Durumu Okuma (GetReceiptAdviceStatus)
* Sistemde bulunan irsaliye yanıtlarının durumlarını okumak için kullanılan servisin clientıdır.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login metodundan alınmış olan aktif **SESSION_ID** değeri verilmelidir.
**UUID** | String | **Evet** | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılır.
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**RECEIPTADVICE_STATUS** | Complex | Sorgu kriterine uyan irsaliye yanıtlarının listesi. 
**RECEIPTADVICE_STATUS.RECEIPTADVICEHEADER** | Complex | İrsaliye yanıtına ait özet bilgiler içermektedir.
**RECEIPTADVICEHEADER.ID** | String | İrsaliye yanıtı numarası.
**RECEIPTADVICEHEADER.UUID** | String | Evrensel tekil tanımlama numarası.
**RECEIPTADVICEHEADER.PROFILEID** | String | Belge senaryosu. `TEMELIRSALIYE` değeri olabilir.
**RECEIPTADVICEHEADER.ISSUE_DATE** | Date | Belge tarihi.
**RECEIPTADVICEHEADER.ISSUE_TIME** | String | Belge düzenleme zamanı.
**RECEIPTADVICEHEADER.ACTUAL_SHIPMENT_DATE** | Date | Fiili sevk tarihi.
**RECEIPTADVICEHEADER.ACTUAL_SHIPMENT_TIME** | String | Fiili sevk zamanı.
**RECEIPTADVICEHEADER.DIRECTION** | String | Belge yönü. Gelen irsaliye yanıtı için `IN`, giden irsaliye yanıtı için `OUT` değeri dönülür.
**RECEIPTADVICEHEADER.STATUS** | String | Belgenin durumu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-İrsaliye Durumları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.GIB_STATUS_CODE** | String | Belgenin GİB'de ki durum kodu. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.GIB_STATUS_DESCRIPTION** | String | Belgenin GİB'de ki durum kodunun açıklaması. Detay için **GİB Durum Kodları** başlığını inceleyiniz.
**RECEIPTADVICEHEADER.ENVELOPE_IDENTIFIER** | String | Belgenin zarf IDsi.