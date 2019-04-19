## E-SMM Raporları Okuma (GetSMMReport)
* Özel entegratör platformundan SMM raporlarını okumaya yarar. 
* Belirlenen kritere uygun kayıt bulunamamışsa sonuç boş dönecektir. Hata fırlatılmaz.
* Sonuç tek veya çoklu dönülmesine bakılmaksızın liste olarak dönülür.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**START_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem başlangıç tarihi. format: YYYY-MM-DD
**END_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem bitiş tarihi format: YYYY-MM-DD
**HEADER_ONLY** | String  | Hayır | Sadece özet değerler mi yoksa içerik ile beraber mi okunmak istenildiğini belirleyen parametredir. Eleman **gönderilmezse** veya `N` değeri gönderilirse belgenin içeriği ile (XML) ile beraber dönülür. `Y` değeri gönderilirse belgenin özeti dönülür.  Gönderilebilecek değerler: Y/N 
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**SMM_REPORT** | ComplexType/Array | Sorgu kriterine uyan tekil belge. Belge numarası `ID`, evrensel tekil tanımlama numarası `UUID` attribute içerisinde dönülmektedir.
**SMM_REPORT.HEADER** | ComplexType | Belgeye ait özet bilgileri içerir.
**HEADER.UUID** | String |  Rapora ait evrensel tekil numarası (ETTN)
**HEADER.PERIOD_SDATE** | DateTime  |  Raporun oluşturulduğu dönemin başlangıç tarihi. format: YYYY-MM-DD
**HEADER.PERIOD_EDATE** | DateTime  |  Raporun oluşturulduğu dönemin bitiş tarihi. format: YYYY-MM-DD
**HEADER.SEGMENT_SDATE** | DateTime  |  Raporun oluşturulduğu parça döneminin bitiş tarihi. format: YYYY-MM-DD
**HEADER.SEGMENT** | String  | Dönem içerisinde ki oluşturulan parçanın numarası. 
**HEADER.DOCUMENT_COUNT** | String  | Gönderilen rapor içerisinde ki makbuz sayısıdır. 
**HEADER.STATUS** | String | Belgenin durumu. Lütfen bu alanı kullanarak karar vermeyin. Karar vermek için `STATUS_CODE` alanını kullanınız.
**HEADER.STATUS_CODE** | String | Belgenin durum kodu. Detay için **E-SMM Rapor Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESC** | String | Belgenin durum açıklaması. Detay için **E-SMM Rapor Durumları** başlığını inceleyiniz.
**HEADER.GIB_STATUS_CODE** | String | GIB tarafından rapora gönderilmiş olan durum kodu.
**HEADER.GIB_STATUS_DESCRIPTION** | String | GIB tarafından rapora gönderilen durum açıklaması.
**HEADER.GIB_STATUS_DATE** | DateTime | GIB tarafından rapora cevap verilen tarih. format: YYYY-MM-DD

## E-SMM Rapor Durumları

Durum Kodu | Durum Açıklaması
------- | --------------
100	| DURUM HENÜZ GÜNCELLENMEDİ
101	| KUYRUĞA EKLENDİ
102	| TASLAK İŞLENİYOR
103	| PAKETLENIYOR
104	| PAKETLENDİ
105	| PAKETLEME_HATASI
106	| İMZALANIYOR
107 | İMZALANDI
109	| GİB DEN YANIT BEKLİYOR
110	| ALICIDAN YANIT BEKLİYOR
111	| ALICIDAN ONAY BEKLİYOR
134 | GÖNDERME İŞLEM SİSTEM TARAFINDAN  TEKRAR DENECEKTİR
135 | GÖNDERİLİYOR
136 | GÖNDERME İŞLEMİ BAŞARISIZ
137 | GÖNDERME İŞLEMİ BAŞARILI
138 | GİBE GÖNDERİM ONAYLANDI
  