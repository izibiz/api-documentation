## Belge Oluşturma

Özel Entegeratör webservislerine gönderilecek belgelerin (fatura, irsaliye, müstahsil vs) UBL-TR formatında istemci ortamında oluşturulması gerekmektedir. UBL-TR XML belge oluşturmak için iki yöntem kullanılabilir :


1. Gelir İdaresi Başkanlığı tarafından yayınlan UBL-TR paketinde bulunan belgelere ait şema (XSD) dosyasında uygulama geliştirme ortamına uygun sınıflar üretilebilir. Üretilen sınıftan obje oluşturarak fieldleri doldurarak belge hazırlanır. Hazırlanan belge webservise parametre olarak gönderilebiir.

* Öncelikle [GİB UBL-TR Paketi] (http://www.efatura.gov.tr/dosyalar/kilavuzlar/UBL-TR1.2.1_Paketi.zip) indirilip unzip edilir.

* Unzip edilen UBL-TR paketi içerisinde ki **%UNZIP_EDILEN_KLASOR%\UBLTR_1.2.1_Paketi\xsdrt\common\** klasöründe bulunan bütün dosyalar **UNZIP Edilen Dizin\UBLTR_1.2.1_Paketi\xsdrt\maindoc\** klasörüne taşınır. **Örneğin mv %UNZIP_EDILEN_KLASOR%\UBLTR_1.2.1_Paketi\xsdrt\common\* %UNZIP_EDILEN_KLASOR%\UBLTR_1.2.1_Paketi\xsdrt\maindoc\**

* **Visual Studio 2015 ve sonrası** yüklü olan bir bilgisayarda **Developer Command Prompt** komut çalıştırılır.

* **Visual Studio 2015 öncesi** yüklü olan bir bilgisayarda **V(StudioVersiyonu) Command Prompt** komutu çalıştırılır. Örneğin Visual studio 2013 kurulu bir bilgisayarda **V2013 Command Prompt** şeklinde çalıştırılır.

* Açılan komut satırında UBL-TR paketinin unzip edildiği dizinde bulunan **maindoc** klasörüne geçiş yapılır. **Örneğin: cd %UNZIP_EDILEN_KLASOR%\UBLTR_1.2.1_Paketi\xsdrt\maindoc\**

* Sınıfı oluşturulacak belge türüne uygun komut aşağıda ki listeye göre çalıştırılır.

Belge Tipi | Çalıştırılacak Komut | Oluşacak Sınıf | Belge Tipi
---------- | -------- | -------- | ---------
E-Fatura / E-Arşiv Fatura |  xsd /c UBL-Invoice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-Invoice-2.1.cs | InvoiceType
E-İrsaliye |  xsd /c UBL-DespatchAdvice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-DespatchAdvice-2.1.cs | DespatchAdviceType
E-İrsaliye Yanıtı |  xsd /c UBL-ReceiptAdvice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-ReceiptAdvice-2.1.cs | ReceiptAdviceType  
Müstahsil Makbuzu |  xsd /c UBL-CreditNote-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-CreditNote-2.1.cs | CreditNoteType

### Karışlaşılabilecek Hatalar

****

2. Diğer bir yöntem ise String Replacement yöntemidir. Belgelere ait değişecek alanların belirlendiği bir şablon oluşturulur. Belge düzenlenirken ilgili alanlar güncellenir. Oluşan belge webservice parametre olarak gönderilir.
