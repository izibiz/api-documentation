## Z-Rapor Sorgulama / Çekme (GetZReport)
* Entegrasyon platformunda bulunan Z-Raporun sorgulamasını sağlayan servistir.
* **SON_RAPOR** parametresi `Y` göndererek son yüklenen Z-Rapor bilgisi çekilebilir.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**SON_RAPOR** | String  | Hayır | Sadece son yüklenen Z-Raporu sorgulamak için `Y` değerleri gönderilebilir.  Eleman **gönderilmezse** veya `N` değeri gönderilirse diğer kriterlere uyan kayıtlar dönülür. Gönderilebilecek değerler: Y/N
**ZREPORT_SEARCH_KEY.LIMIT** | Integer  | Hayır | Kaç kayıt okunmak istendiği. Eğer eleman gönderilmezse en fazla 25.000 adet kayıt dönülür.
**ZREPORT_SEARCH_KEY.SUBE_KODU** | String  | Hayır | Şube kodu. Şubeli yapısı olan müşteriler için bir şubeye ait Z-Raporları sorgulamak için kullanılabilir.
**ZREPORT_SEARCH_KEY.OKC_SICIL_NO** | String  | Hayır | ÖKC cihaz sicil numarası
**ZREPORT_SEARCH_KEY.EKU_NO** | String  | Hayır | ÖKC cihaz EKU numarası
**ZREPORT_SEARCH_KEY.ZRAPOR_NO** | String  | Hayır | Z-Rapor numarası
**ZREPORT_SEARCH_KEY.BASLANGIC_TARIH** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem başlangıç tarihi. format: YYYY-MM-DD
**ZREPORT_SEARCH_KEY.BITIS_TARIH** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem bitiş tarihi format: YYYY-MM-DD
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**ZREPORT** | ComplexType    | Sorgu kriterine uyan belgelerin listesi.
**ZREPORT.SUBE_KODU** | String  | ÖKC kurulu olduğu şube numarası.
**ZREPORT.OKC_SICIL_NO** | String  | ÖKC Sicil numarası
**ZREPORT.EKU_NO** | String  | ÖKC cihazına ait EKU numarası.
**ZREPORT.ZRAPOR_NO** | String  | Z-Rapor numarası
**ZREPORT.ZRAPOR_TARIH** | String  | Z-Rapor tarihi. **Format: YYYY-MM-DD**
**ZREPORT.SATIS_TUTAR** | Decimal  |   Z-Raporda ki satış tutarı
**ZREPORT.VERGI_KDV** | Decimal  |  Z-Raporda ki toplam KDV tutarı.
**ZREPORT.VERGI_OTV** | Decimal  | Z-Raporda ki toplam OTV tutarı (Eğer varsa)
**ZREPORT.ZREPORT_DETAIL** | ComplexType  | Z-Rapora ait durum, rapor vs detayları
**ZREPORT_DETAIL.STATUS** | String  | Z-Raporun durumu
**ZREPORT_DETAIL.STATUS_CODE** | Integer  | Z-Raporun durum kodu
**ZREPORT_DETAIL.STATUS_DESCRIPTION** | String  | Z-Raporun durum açıklaması
**ZREPORT_DETAIL.REPORT_IDENTIFIER** | String  | Z-Raporun GİB'e raporlandığı rapora ait ETTN bilgisi. Raporlanmadı ise eleman dönülmez.
**ZREPORT_DETAIL.REPORT_DATE** | String  | Z-Raporun GİB'e raporlandığı raporun tarihi. Raporlanmadı ise eleman dönülmez.
**ZREPORT_DETAIL.REPORT_STATUS_CODE** | String  | Z-Raporun GİB'e raporlandığı raporun durum kodu. Raporlanmadı ise eleman dönülmez.
**ZREPORT_DETAIL.REPORT_STATUS_DESCRIPTION** | String  | Z-Raporun GİB'e raporlandığı raporun durum açıklaması. Raporlanmadı ise eleman dönülmez.
