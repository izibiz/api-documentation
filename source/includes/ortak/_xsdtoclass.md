## Belge Oluşturma

Özel Entegeratör webservislerine gönderilecek belgelerin (fatura, irsaliye, müstahsil vs) UBL-TR formatında istemci ortamında oluşturulması gerekmektedir. UBL-TR XML belge oluşturmak için iki yöntem kullanılabilir :


* Gelir İdaresi Başkanlığı tarafından yayınlan UBL-TR paketinde bulunan belgelere ait şema (XSD) dosyasında uygulama geliştirme ortamına uygun sınıflar üretilebilir. Üretilen sınıftan obje oluşturarak fieldleri doldurarak belge hazırlanır. Hazırlanan belge webservise parametre olarak gönderilebiir.

Öncelikle http://www.efatura.gov.tr/dosyalar/kilavuzlar/UBL-TR1.2.1_Paketi.zip adresinden indirilip unzip edilmelidir.

.Net Framework yüklü olan bir bilgisayarda **Developer Command Prompt** UBL-TR paketinin unzip edildiği dizinde başlatılmalı ve aşağıda ki belgeye uygun komut  çalıştırılır.

Belge Tipi | Çalıştırılacak Komut | Oluşacak Sınıf | Belge Tipi
---------- | -------- | -------- | ---------
E-Fatura / E-Arşiv Fatura |  xsd /c UBL-Invoice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-Invoice-2.1.cs | InvoiceType
E-İrsaliye |  xsd /c UBL-DespatchAdvice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-DespatchAdvice-2.1.cs | DespatchAdviceType
E-İrsaliye Yanıtı |  xsd /c UBL-ReceiptAdvice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-ReceiptAdvice-2.1.cs | ReceiptAdviceType  
Müstahsil Makbuzu |  xsd /c UBL-CreditNote-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd | UBL-CreditNote-2.1.cs | CreditNoteType


* Diğer bir yöntem ise String Replacement yöntemidir. Belgelere ait değişecek alanların belirlendiği bir şablon oluşturulur. Belge düzenlenirken ilgili alanlar güncellenir. Oluşan belge webservice parametre olarak gönderilir.


### .NET üzerinden XSD dosyasından sınıf üretmek için şu adımları uygulayınız:

1. http://www.efatura.gov.tr/dosyalar/kilavuzlar/UBL-TR1.2.1_Paketi.zip adresinden paket indirilir.
2. İndirilen dosya unzip edilir.
3. .Net Framework yüklü olan bir bilgisayarda **başlat>Developer Command Prompt** yazılır ve gelen seçenek tıklanarak komut dosyası açılır
4. 2.maddedeki unzip yapılan dizine **cd UNZIP_EDILEN_DIZIN** olarak gidilir.
5. Gelen ekranda aşağıdaki komutu yapıştırıyoruz.<br>
**xsd /c UBL-Invoice-2.1.xsd UBL-CommonExtensionComponents-2.1.xsd UBL-CommonBasicComponents-2.1.xsd UBL-UnqualifiedDataTypes-2.1.xsd UBL-CoreComponentParameters-2.1.xsd CCTS_CCT_SchemaModule-2.1.xsd UBL-CommonAggregateComponents-2.1.xsd**
6. Bu işlemin sonunda e-Fatura/E-Arşiv fatura oluşturmak için gerekli bütün sınıflar UBL-Invoice-2.1.cs dosyası içerisinde oluşturulacaktır.
7. Fatura **InvoiceType** sınıfı ile üretilmektedir.
