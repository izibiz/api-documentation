## E-SMM Okuma (GetSMM)
* Özel entegratör platformundan imzalanmış belgeleri okumayı sağlayan servistir.
* E-SMM belgesinin PDF formatında okunabilir.
* Belirlenen kritere uygun kayıt bulunamamışsa sonuç boş dönecektir. Hata fırlatılmaz.
* Sonuç tek veya çoklu dönülmesine bakılmaksızın liste olarak dönülür.

<br>
Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur. Faturaları XML formatında sıkıştırılmadan çekmek için mutlaka `COMPRESSED` elemanı eklenmeli ve `N` değeri gönderilmelidir. Eğer gönderilmezse faturalar sıkıştırılmış/ziplenmiş olarak dönülecektir. | Y/N
**SMM_SEARCH_KEY** | ComplexType  | **Evet** | Belge okumak için kullanılabilecek filtre kritirleri
**SMM_SEARCH_KEY.LIMIT** | String  | Hayır | Kaç kayıt okunmak istendiği. Eğer eleman gönderilmezse 10 adet kayıt dönülür. İçerikleri (PDF) ile beraber en fazla 100 adet kayıt dönülür. Sadece özet/başlıklarını çekildiğinde ise en fazla 25.000 adet kayıt dönülür.
**SMM_SEARCH_KEY.ID** | String  | Hayır | Belge numarası ile okumak için kullanılabilir. örnek: SMM2018000000001
**SMM_SEARCH_KEY.UUID** | String  | Hayır | Evrensel Tekil Tanımlama Numarası (ETTN) ile okumak için kullanılabilir.  GUID formatında
**SMM_SEARCH_KEY.START_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem başlangıç tarihi. format: YYYY-MM-DD
**SMM_SEARCH_KEY.END_DATE** | String  | Hayır | Belirli tarih aralığında ki belgeleri çekmek istendiğinde dönem bitiş tarihi format: YYYY-MM-DD
**SMM_SEARCH_KEY.READ_INCLUDED** | String  | Hayır | Daha önce okunmuş belgeleri dönüşe dahil edilip edilmeyeceğini belirleyen parametredir. `Y` değeri gönderilirse daha önce okunmuş olsa bile yanıta eklenir. Gönderilmezse veya `N` gönderilirse sadece yeni gelen belgeler dönülür. Gönderilebilecek değerler: Y/N
**SMM_SEARCH_KEY.FROM** | String  | Hayır | Gönderici vergi kimlik/TC kimlik numarası ile sorgulamak için kullanılabilir.
**SMM_SEARCH_KEY.TO** | String  | Hayır | Alıcı vergi kimlik/TC kimlik numarası ile sadece belirli bir müşteriye gönderilen belgeleri okumak için kullanılabilir.
**HEADER_ONLY** | String  | Hayır | Sadece özet değerler mi yoksa içerik ile beraber mi okunmak istenildiğini belirleyen parametredir. Eleman **gönderilmezse** veya `N` değeri gönderilirse belgenin içeriği ile (XML) ile beraber dönülür. `Y` değeri gönderilirse belgenin özeti dönülür.  Gönderilebilecek değerler: Y/N
**CONTENT_TYPE** | Enum  | Hayır | Talep edilen format. Gönderilebilecek değerler: `PDF`
<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**SMM** | ComplexType/Array | Sorgu kriterine uyan tekil belge. Belge numarası `ID`, evrensel tekil tanımlama numarası `UUID` attribute içerisinde dönülmektedir.
**SMM.HEADER** | ComplexType | Belgeye ait özet bilgileri içerir.
**HEADER.CUSTOMER** | ComplexType |  Belge düzenlenen alıcı bilgisi. `identifier` attribute ile VKN/TCKN bilgisi, `name` attribute ile ünvan bilgisi dönülür.
**HEADER.ISSUE_DATE** | DateTime | Belge düzenlenme tarihi. YYYY-MM-DD HH:MM:SS formatında
**HEADER.PAYABLE_AMOUNT** | AmountType | Toplam ödenecek tutar.
**HEADER.STATUS** | String | Belgenin durumu. Detay için **E-SMM Durumları** başlığını inceleyiniz.
**HEADER.STATUS_DESCRIPTION** | String | Belge durum açıklaması. Detay için **E-SMM Durumları** başlığını inceleyiniz.
**HEADER.SMS_STATUS** | String | Belgenin SMS durumu. Detay için **E-SMM SMS Durumları** başlığını inceleyiniz.
**HEADER.SMS_STATUS_DESCRIPTION** | String | Belgenin SMS durum açıklaması. Detay için **E-SMM SMS Durumları** başlığını inceleyiniz.
**HEADER.EMAIL_STATUS** | String | Belgenin E-Posta durumu. Detay için **E-SMM E-Posta Durumları** başlığını inceleyiniz.
**HEADER.EMAIL_STATUS_DESCRIPTION** | String | Belgenin E-Posta durum açıklaması. Detay için **E-SMM E-Posta Durumları** başlığını inceleyiniz.
**HEADER.REPORT_DATE** | String | Belgenin E-Posta durumu. Detay için **E-SMM E-Posta Durumları** başlığını inceleyiniz.
**HEADER.EMAIL_STATUS_DESCRIPTION** | String | Belgenin E-Posta durum açıklaması. Detay için **E-SMM E-Posta Durumları** başlığını inceleyiniz.
**HEADER.CDATE** | String | Belgenin sisteme yüklendiği tarih.
**SMM.CONTENT** | Base64Binary | Belgenin içeriği. PDF formatında. Eğer `COMPRESSED` parametresi `N` olarak gönderilmişse PDF dosya sıkıştırılmadan, `COMPRESSED` elemanı gönderilmemiş veya `Y` değeri gönderilmişse sıkıştırılmış/ziplenmiş PDF dosyası dönülür.
