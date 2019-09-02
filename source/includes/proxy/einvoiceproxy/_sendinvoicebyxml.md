## Fatura Gönderme(SendInvoiceByXml)
* UBL-TR XML üretmeden webservis parametreleri doldurularak fatura gönderimi sağlar.
* Webservice Endpoint URL için iletişme geçiniz.

Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | İşlem yapılacak oturum. Oturum açmak için `Login` metodu kullanılır.
**INVOICE_PROPERTIES** | Complex | **Evet** | Fatura gönderimi ile ilgili parametreler
**INVOICE_PROPERTIES.INVOICE_TYPE** | String | **Evet** | E-Fatura olarak göndermek için `EINVOICE` E-Arşiv olarak göndermek için `EARCHIVE` değeri gönderilmelidir.
**INVOICE_PROPERTIES.EMAIL_FLAG** | boolean | Hayır | Değerler [Y,N]: E-Arşiv faturalarını e-posta olarak iletmek için `Y` değeri gönderilmelidir. Parametre gönderilmez veya `N` değeri gönderilirse fatura e-posta gönderilmez. E-Fatura için bu parametre dikkate alınmaz.
**INVOICE** | Complex | **Evet** | Gönderilecek fatura alanları
**INVOICE.PROFILE_ID** | String | **Evet** | Gönderilecek fatura profili. E-Arşiv için `EARSIVFATURA` olmalıdır. E-Fatura için  [TEMELFATURA, TICARIFATURA, YOLCUBERABERFATURA, IHRACAT] değerleri içerebilir.
**INVOICE.INVOICE_ID** | String | **Evet** | Faturanın numarası (AAA2019000000001 formatında olmak zorunda)
**INVOICE.UUID** | String | **Evet** | Faturanın ETTN numarası
**INVOICE.ISSUE_DATE** | String | **Evet** | Fatura Tarihi (YYYY-AA-GG formatında)
**INVOICE.ISSUE_TIME** | String | **Evet** | Fatura Düzenleme Saati (SS:DD:ss)
**INVOICE.INVOICE_TYPE_CODE** | String | **Evet** | E-Fatura için [SATIS, IADE, TEVKIFAT, ISTISNA, OZELMATRAH, IHRACKAYITLI]. E-Arşiv için SATIS ve IADE dışında değer gönderilemez.
**INVOICE.DOCUMENT_CURRENCY_CODE** | String | **Evet** | Fatura para birimi [TRY, USD, EUR vs] <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Diğer para birimleri için Kod Listesi dokümanında Para Birimi Kodları bölümünü inceleyiniz.</a>
**INVOICE.LINE_COUNT_NUMERIC** | String | **Evet** | Fatura satır sayısı
**INVOICE.CALCULATION_RATE** | String | Hayır | Dövizli faturalar kur bilgisi
**INVOICE.NOTE** | Array | Hayır | Faturaya eklenecek notlar. Çoklanabilir.
**INVOICE.ORDER_REFERENCE** | Complex | Hayır | Sipariş bilgileri
INVOICE.ORDER_REFERENCE.ID | String | Hayır | Sipariş numarası
INVOICE.ORDER_REFERENCE.ISSUE_DATE | String | Hayır | Sipariş tarihi
**INVOICE.DESPACTH_DOCUMENT_REFERENCE** | Complex | Hayır | İrsaliye bilgileri. Çoklanabilir.
DESPACTH_DOCUMENT_REFERENCE.ID | String | Hayır | İrsaliye numarası
DESPACTH_DOCUMENT_REFERENCE.ISSUE_DATE | String | Hayır | İrsaliye tarihi
**INVOICE.ADDITIONAL_DOCUMENT_REFERENCE** | Complex | **Evet** | Ek belgeler. Çoklanabilir. En az fatura şablonu (xslt) eklenmelidir.
ADDITIONAL_DOCUMENT_REFERENCE.ID | String | Hayır | Ek belge id
ADDITIONAL_DOCUMENT_REFERENCE.ISSUE_DATE | String | Hayır | ek belge tarihi
ADDITIONAL_DOCUMENT_REFERENCE.DOCUMENT_TYPE_CODE | String | Hayır | ek belge tip kodu. Fatura şablonu için XSLT değeri gönderilmelidir.
ADDITIONAL_DOCUMENT_REFERENCE.DOCUMENT_TYPE | String | Hayır | ek belge tipi
ADDITIONAL_DOCUMENT_REFERENCE.ATTACHMENT | String | **Evet** | belgenin Base64Binary değeri
**INVOICE.ACCOUNTING_SUPPLIER_PARTY** | Complex | **Evet** | Faturayı düzenleyen tarafın bilgileri
ACCOUNTING_SUPPLIER_PARTY.PARTY | Complex | Hayır | Gönderen firma bilgileri
PARTY.WEB_SITE_URI | String | Hayır | Gönderen firma websitesi (http://www.firmaadres.com formatında)
PARTY.PARTY_IDENTIFICATION | Complex | Hayır | Gönderen firmayı tanımlayan bilgiler.  VKN/TCKN no bilgisi ekleneblir. Çoklabilir. Bu alan çoklanarak şu bilgiler eklenebilir.
PARTY.PARTY_IDENTIFICATION.ID | String | **Evet** | Düzenleyen tarafı tanımlayan bilgi. VKN veya TCKN bilgisi olmak zorundadır.
PARTY.PARTY_IDENTIFICATION.TYPE | String | **Evet** | Düzenleyen tarafın vergi kimlik numarası veya TC kimlik numarası zorunludur. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Kimlik Şemaları bölümünü inceleyiniz.</a>
PARTY.NAME | String | Hayır | Düzenleyen firma ünvanı
PARTY.POSTAL_ADDRESS | Complex | **Evet** | Düzenleyen firma adresi
POSTAL_ADDRESS.STREET_NAME | String | Hayır | Adres (Sokak mahalle cadde vs)
POSTAL_ADDRESS.BUILDING_NUMBER | String | Hayır | Bina numarası
POSTAL_ADDRESS.CITY_SUB_DIVISION_NAME | String | Hayır | İlçe
POSTAL_ADDRESS.CITY_NAME | String | Hayır | İl
POSTAL_ADDRESS.POSTAL_ZONE | String | Hayır | Posta kodu
POSTAL_ADDRESS.COUNTRY | String | **Evet** | Ülke. (Türkiye)
PARTY.PARTY_TAX_SCHEME | String | **Evet** | Vergi Dairesi.
PARTY.CONTACT | Complex | Hayır| Düzenleyen firma irtibat bilgileri
CONTACT.TELEPHONE | String | Hayır | Telefon numarası
CONTACT.TELEFAX | String | Hayır | Faks numarası
CONTACT.ELECTRONIC_MAIL | String | Hayır | E-Posta adresi
PARTY.FIRST_NAME | String | Hayır | Düzenleyen şahıs firması ise firma sahibinin Adı zorunlu
PARTY.FAMILY_NAME | String | Hayır | Düzenleyen şahıs firması ise firma sahibinin Soyadı zorunlu
**INVOICE.ACCOUNTING_CUSTOMER_PARTY** | Complex | **Evet** | Faturayı alan tarafın bilgileri
PARTY.WEB_SITE_URI | String | Hayır | Alıcı firma websitesi (http://www.firmaadres.com formatında)
PARTY.PARTY_IDENTIFICATION | Complex | Hayır | Alıcı firmayı tanımlayan bilgiler.  VKN/TCKN no bilgisi ekleneblir. Çoklabilir. Bu alan çoklanarak şu bilgiler eklenebilir.
PARTY.PARTY_IDENTIFICATION.ID | String | **Evet** | Alıcı tarafı tanımlayan bilgi. VKN veya TCKN bilgisi olmak zorundadır.
PARTY.PARTY_IDENTIFICATION.TYPE | String | **Evet** | Alıcı tarafın vergi kimlik numarası veya TC kimlik numarası zorunludur. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Kimlik Şemaları bölümünü inceleyiniz.</a>
PARTY.NAME | String | Hayır | Alıcı firma ünvanı
PARTY.POSTAL_ADDRESS | Complex | **Evet** | Alıcı firma adresi
POSTAL_ADDRESS.STREET_NAME | String | Hayır | Adres (Sokak mahalle cadde vs)
POSTAL_ADDRESS.BUILDING_NUMBER | String | Hayır | Bina numarası
POSTAL_ADDRESS.CITY_SUB_DIVISION_NAME | String | Hayır | İlçe
POSTAL_ADDRESS.CITY_NAME | String | Hayır | İl
POSTAL_ADDRESS.POSTAL_ZONE | String | Hayır | Posta kodu
POSTAL_ADDRESS.COUNTRY | String | **Evet** | Ülke. (Türkiye)
PARTY.PARTY_TAX_SCHEME | String | **Evet** | Vergi Dairesi. Alıcısı firma olanlar için zorunludur. Nihai tüketiciye düzenenlenen faturalar için zorunlu değildir.
PARTY.CONTACT | Complex | Hayır| Alıcı firma irtibat bilgileri
CONTACT.TELEPHONE | String | Hayır | Telefon numarası
CONTACT.TELEFAX | String | Hayır | Faks numarası
CONTACT.ELECTRONIC_MAIL | String | Hayır | E-Posta adresi
PARTY.FIRST_NAME | String | Hayır | Alıcı firma şahıs firması ise firma sahibinin Adı zorunlu veya nihai tüketicinin adı
PARTY.FAMILY_NAME | String | Hayır | Alıcı firma şahıs firması ise firma sahibinin Soyadı zorunlu veya nihai tüketici soyadı
**INVOICE.DELIVERY** | Complex | **Evet** | Gönderim, Taşıma, Sevkiyat Bilgileri. E-Arşiv için Zorunludur.
**DELIVERY.CARRIER_PARTY** | Complex | **Evet** | Taşıyan firma bilgiler. Internet üzerinden yapılan satışlar için düzünlenen E-Arşiv fatura için zorunludur.
CARRIER_PARTY.ID | String | **Evet** | Taşıyan firma/şahıs 10 hane VKN veya 11 hane TCKN değeri
CARRIER_PARTY.TYPE | String | **Evet** | Değerler [`VKN`,`TCKN`]. Taşıyan kurumsal firma ise `VKN`, şahıs firması veya şahıs ise `TCKN` gönderilmeldir.
CARRIER_PARTY.NAME | String | Hayır | Taşıyan firma ünvanı
CARRIER_PARTY.FIRST_NAME | String | Hayır | Taşıyan şahıs adı
CARRIER_PARTY.FAMILY_NAME | String | Hayır | Taşıyan şahıs soyadı
CARRIER_PARTY.POSTAL_ADDRESS | Complex | **Evet** | Taşıyan firma adresi
POSTAL_ADDRESS.STREET_NAME | String | Hayır | Adres (Sokak mahalle cadde vs)
POSTAL_ADDRESS.BUILDING_NUMBER | String | Hayır | Bina numarası
POSTAL_ADDRESS.CITY_SUB_DIVISION_NAME | String | Hayır | İlçe
POSTAL_ADDRESS.CITY_NAME | String | Hayır | İl
POSTAL_ADDRESS.POSTAL_ZONE | String | Hayır | Posta kodu
POSTAL_ADDRESS.COUNTRY | String | Hayır| Ülke. (Türkiye)
CARRIER_PARTY.ACTULA_DEPATCH_DATE | String | Hayır | Fiili Sevk Tarihi
**INVOICE.PAYMENT_MEANS** | Complex | Hayır | Ödeme Şekli. Internet satışları için zorunludur.
PAYMENT_MEANS.PAYMENT_MEANS_CODE | String | Hayır | Ödeme şeklinin kodu
PAYMENT_MEANS.PAYMENT_DUE_DATE | String | Hayır | Son ödeme günü yıl-ay-gün formatında
PAYMENT_MEANS.PAYMENT_CHANNEL_CODE | String | Hayır | Ödeme kanalı kodu
PAYMENT_MEANS.INSTRUCTION_NOTE | String | Hayır | Ödeme ile ilgili açıklamalar serbest metin
**INVOICE.PAYMENT_TERMS** | Complex | Hayır | Ödeme Koşulları
PAYMENT_TERMS.PENALTY_SURCHARGE_PERCENT | String | Hayır | Ödemenin gecikmesi durumunda uygulanacak ceza oranı numerik olarak girilir.
PAYMENT_TERMS.AMOUNT | Decimal | Hayır | Ödemenin gecikmesi durumunda uygulanacak ceza tutarı numerik olarak girilir.
PAYMENT_TERMS.NOTE | String | Hayır | Ödeme koşulları ile ilgili açıklama serbest metin olarak girilir.
**INVOICE.TAX_TOTAL** | Complex | Hayır | Vergi Toplamı
TAX_TOTAL.TAX_AMOUNT | Decimal | Hayır | Toplam vergi tutarı girilir.
TAX_TOTAL.TAX_SUB_TOTAL | Complex | Hayır | Vergi ara toplamı. Çoklanarak birden fazla vergi tipi eklenebilir.
TAX_SUB_TOTAL.TAX_ABLE_AMOUNT | Decimal | Hayır | Verginin üzerinden hesaplandığı tutar (matrah) bilgisi
TAX_SUB_TOTAL.TAX_AMOUNT | Decimal | Hayır | Hesaplanan Vergi Tutarı
TAX_SUB_TOTAL.CALCULATION_SEQ_NUMERIC | String | Hayır | Vergi hesaplamasında sıra numarası.
TAX_SUB_TOTAL.PERCENT | Decimal | Hayır | Vergi oranı
TAX_SUB_TOTAL.TAX_NAME | String | Hayır |  Vergi türü ismi. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Vergi Kodları Listesini inceleyiniz.</a>
TAX_SUB_TOTAL.TAX_TYPE_CODE | String | Hayır |  Vergi Tipi Kodu. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Vergi Kodları Listesini inceleyiniz.</a>
TAX_SUB_TOTAL.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna kodu Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
TAX_SUB_TOTAL.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna sebepleri serbest metin. Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
**INVOICE.WITH_HOLDING_TAX** | Complex | Hayır | Tevkifatlı faturalarda, uygulanan tevkifat miktarları, oranları ve diğer bilgileri girilir.
WITH_HOLDING_TAX.TAX_AMOUNT | Decimal | Hayır | Tevkifat tutari
WITH_HOLDING_TAX.TAX_SUB_TOTAL | Complex | Hayır | Tevkifat ara toplamı. Çoklanarak birden fazla tevkifat tipi eklenebilir.
WITH_HOLDING_TAX.TAX_ABLE_AMOUNT | Decimal | Hayır | Tevkifatın üzerinden hesaplandığı tutar (matrah) bilgisi
WITH_HOLDING_TAX.TAX_AMOUNT | Decimal | Hayır | Hesaplanan Tevkifat Tutarı
WITH_HOLDING_TAX.CALCULATION_SEQ_NUMERIC | String | Hayır | Tevkifat hesaplamasında sıra numarası.
WITH_HOLDING_TAX.PERCENT | Decimal | Hayır | Tevkifat oranı
WITH_HOLDING_TAX.TAX_NAME | String | Hayır |  Tevkifat türü ismi. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Tevkifat Kodları Listesi bölümünü inceleyiniz.</a>
WITH_HOLDING_TAX.TAX_TYPE_CODE | String | Hayır |  Tevkifat Tipi Kodu. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Tevkifat Kodları Listesi bölümünü inceleyiniz.</a>
WITH_HOLDING_TAX.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna kodu Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
WITH_HOLDING_TAX.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna sebepleri serbest metin. Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
**INVOICE.ALLOWANCE_CHARGES** | Complex | Hayır |  İskonto / Artırım. Eğer iskonto veya artırım uygulanacaksa eklenir. Birden fazla iskonto/artırım uygulamak için çoklanır.
ALLOWANCE_CHARGES.CHARGE_INDICATOR | String | Hayır |  Eğer artırım ise `Y` değilse `N` değeri doldurulur
ALLOWANCE_CHARGES.MULTIPLIER_FACTOR_NUMERIC | Decimal | Hayır |  Iskonto/ Artırım Oranı
ALLOWANCE_CHARGES.AMOUNT | Decimal | Hayır |  Iskonto/ Artırım Tutarı
ALLOWANCE_CHARGES.BASE_AMOUNT | Decimal | Hayır |  İskonto veya artırımın uygulandığı tutar
**INVOICE.LEGAL_MONETARY_TOTAL** | Complex | **Evet** |  Fatura Parasal Toplam Bilgileri
LEGAL_MONETARY_TOTAL.LINE_EXTENSION_AMOUNT | Decimal | **Evet** |  Mal/hizmet miktarı ile Mal/hizmet birim fiyatının çarpımı ile bulunan tutardır.
LEGAL_MONETARY_TOTAL.TAX_EXCLUSIVE_AMOUNT | Decimal | **Evet** |  Vergiler hariç, ıskonto veya artırım dahil toplam tutarı (Vergi Matrahı)
LEGAL_MONETARY_TOTAL.TAX_INCLUSIVE_AMOUNT | Decimal | **Evet** |  Vergiler, ıskonto ve artırım dahil toplam tutar girilir.
LEGAL_MONETARY_TOTAL.ALLOWANCE_TOTAL_AMOUNT | Decimal | **Evet** |  Toplam ıskonto tutarı
LEGAL_MONETARY_TOTAL.PAYABLE_AMOUNT | Decimal | **Evet** |  Ödenecek tutar
**INVOICE.INVOICE_LINE** | Complex | **Evet** |  Mal/Hizmet Kalemleri
INVOICE_LINE.ID | String | **Evet** |  Kalem sıra numarası
INVOICE_LINE.INVOICE_QUANTITY | Decimal | **Evet** |  Mal/hizmet miktarı
INVOICE_LINE.UNITCODE | String | **Evet** |  Mal/hizmet miktar birimi   Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
INVOICE_LINE.LINE_EXTENSION_AMOUNT | Decimal | **Evet** |  Mal/hizmet miktarı ile Mal/hizmet birim fiyatının çarpımı ile bulunan tutar
**INVOICE_LINE.ALLOWANCE_CHARGES** | Complex | Hayır |  Satırda İskonto / Artırım. Eğer iskonto veya artırım uygulanacaksa eklenir. Birden fazla iskonto/artırım uygulamak için çoklanır.
ALLOWANCE_CHARGES.CHARGE_INDICATOR | String | Hayır |  Eğer artırım ise `Y` değilse `N` değeri doldurulur
ALLOWANCE_CHARGES.MULTIPLIER_FACTOR_NUMERIC | Decimal | Hayır |  Iskonto/ Artırım Oranı
ALLOWANCE_CHARGES.AMOUNT | Decimal | Hayır |  Iskonto/ Artırım Tutarı
ALLOWANCE_CHARGES.BASE_AMOUNT | Decimal | Hayır |  İskonto veya artırımın uygulandığı tutar
**INVOICE_LINE.TAX_TOTAL** | Complex | Hayır | Satırda Vergi Toplamı
TAX_TOTAL.TAX_AMOUNT | Decimal | Hayır | Toplam vergi tutarı girilir.
TAX_TOTAL.TAX_SUB_TOTAL | Complex | Hayır | Vergi ara toplamı. Çoklanarak birden fazla vergi tipi eklenebilir.
TAX_SUB_TOTAL.TAX_ABLE_AMOUNT | Decimal | Hayır | Verginin üzerinden hesaplandığı tutar (matrah) bilgisi
TAX_SUB_TOTAL.TAX_AMOUNT | Decimal | Hayır | Hesaplanan Vergi Tutarı
TAX_SUB_TOTAL.CALCULATION_SEQ_NUMERIC | String | Hayır | Vergi hesaplamasında sıra numarası.
TAX_SUB_TOTAL.PERCENT | Decimal | Hayır | Vergi oranı
TAX_SUB_TOTAL.TAX_NAME | String | Hayır |  Vergi türü ismi. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Vergi Kodları Listesini inceleyiniz.</a>
TAX_SUB_TOTAL.TAX_TYPE_CODE | String | Hayır |  Vergi Tipi Kodu. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Vergi Kodları Listesini inceleyiniz.</a>
TAX_SUB_TOTAL.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna kodu Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
TAX_SUB_TOTAL.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna sebepleri serbest metin. Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
**INVOICE_LINE.WITH_HOLDING_TAX** | Complex | Hayır | satırda uygulanan tevkifat miktarları, oranları ve diğer bilgileri girilir.
WITH_HOLDING_TAX.TAX_AMOUNT | Decimal | Hayır | Tevkifat tutari
WITH_HOLDING_TAX.TAX_SUB_TOTAL | Complex | Hayır | Tevkifat ara toplamı. Çoklanarak birden fazla tevkifat tipi eklenebilir.
WITH_HOLDING_TAX.TAX_ABLE_AMOUNT | Decimal | Hayır | Tevkifatın üzerinden hesaplandığı tutar (matrah) bilgisi
WITH_HOLDING_TAX.TAX_AMOUNT | Decimal | Hayır | Hesaplanan Tevkifat Tutarı
WITH_HOLDING_TAX.CALCULATION_SEQ_NUMERIC | String | Hayır | Tevkifat hesaplamasında sıra numarası.
WITH_HOLDING_TAX.PERCENT | Decimal | Hayır | Tevkifat oranı
WITH_HOLDING_TAX.TAX_NAME | String | Hayır |  Tevkifat türü ismi. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Tevkifat Kodları Listesi bölümünü inceleyiniz.</a>
WITH_HOLDING_TAX.TAX_TYPE_CODE | String | Hayır |  Tevkifat Tipi Kodu. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod Listesi dokümanında Tevkifat Kodları Listesi bölümünü inceleyiniz.</a>
WITH_HOLDING_TAX.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna kodu Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
WITH_HOLDING_TAX.TAX_EXEMPTION_REASON_CODE | String | Hayır |  Vergi muafiyet, istisna sebepleri serbest metin. Bknz. <a href="/resource/BELGELER/UBL-TR Kod Listeleri - V 1.18.pdf">Kod listeleri</a>
**INVOICE_LINE.ITEM_NAME** | String | Hayır |  Mal/hizmet adı serbest metin
**INVOICE_LINE.ITEM_PRICE** | Decimal  | Hayır |  Mal/hizmetin birim fiyatı  
**INVOICE_LINE.BUYER_IDENTIFICATION** | Decimal  | Hayır |  Alıcının mal/hizmete verdiği tanımlama bilgisi. barkod bilgisi girilebilir.  
