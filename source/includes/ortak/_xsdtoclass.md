## Belge Oluşturma

Özel Entegeratör webservislerine gönderilecek belgelerin (fatura, irsaliye, müstahsil vs) UBL-TR formatında istemci ortamında oluşturulması gerekmektedir. UBL-TR XML belge oluşturmak için **iki yöntem kullanılabilir** :

<aside class="notice">
1. Gelir İdaresi Başkanlığı tarafından yayınlan UBL-TR paketinde bulunan belgelere ait şema (XSD) dosyasında uygulama geliştirme ortamına uygun sınıflar üretilebilir. Üretilen sınıftan obje oluşturarak fieldleri doldurarak belge hazırlanır. Hazırlanan belge webservise parametre olarak gönderilebiir.
</aside>

* Güncel [GİB UBL-TR Paketi] (http://www.efatura.gov.tr/dosyalar/kilavuzlar/UBL-TR1.2.1_Paketi.zip) indirilip yerel C: disizine çıkarılır (unzip/extract).

* Eğer **Visual Studio 2015 öncesi** yüklü olan bir bilgisayar kullanılıyorsa **V(StudioVersiyonu) Command Prompt** komutu çalıştırılır. Örneğin Visual studio 2013 kurulu bir bilgisayarda **V2013 Command Prompt** şeklinde çalıştırılır.

* Eğer **Visual Studio 2015 ve sonrası** yüklü olan bir bilgisayar kullanılıyorsa **Developer Command Prompt** komut çalıştırılır.

* Açılan komut satırında UBL-TR paketinin unzip edildiği dizinde bulunan **maindoc** klasörüne geçiş yapılır. <br> **Örneğin:** cd %UNZIP_EDILEN_KLASOR%\UBLTR_1.2.1_Paketi\xsdrt\maindoc\

* Sınıfı oluşturulacak belge türüne uygun komut aşağıda ki listeye göre çalıştırılır.

Belge Tipi | Çalıştırılacak Komut | Oluşacak Sınıf | Belge Tipi
---------- | -------- | -------- | ---------
E-Fatura / E-Arşiv Fatura |  xsd /c UBL-Invoice-2.1.xsd ../common/UBL-CommonExtensionComponents-2.1.xsd ../common/UBL-CommonBasicComponents-2.1.xsd ../common/UBL-UnqualifiedDataTypes-2.1.xsd ../common/UBL-CoreComponentParameters-2.1.xsd ../common/CCTS_CCT_SchemaModule-2.1.xsd ../common/UBL-CommonAggregateComponents-2.1.xsd | UBL-Invoice-2.1.cs | InvoiceType
E-İrsaliye |  xsd /c UBL-DespatchAdvice-2.1.xsd ../common/UBL-CommonExtensionComponents-2.1.xsd ../common/UBL-CommonBasicComponents-2.1.xsd ../common/UBL-UnqualifiedDataTypes-2.1.xsd ../common/UBL-CoreComponentParameters-2.1.xsd ../common/CCTS_CCT_SchemaModule-2.1.xsd ../common/UBL-CommonAggregateComponents-2.1.xsd | UBL-DespatchAdvice-2.1.cs | DespatchAdviceType
E-İrsaliye Yanıtı |  xsd /c UBL-ReceiptAdvice-2.1.xsd ../common/UBL-CommonExtensionComponents-2.1.xsd ../common/UBL-CommonBasicComponents-2.1.xsd ../common/UBL-UnqualifiedDataTypes-2.1.xsd ../common/UBL-CoreComponentParameters-2.1.xsd ../common/CCTS_CCT_SchemaModule-2.1.xsd ../common/UBL-CommonAggregateComponents-2.1.xsd | UBL-ReceiptAdvice-2.1.cs | ReceiptAdviceType  
Müstahsil Makbuzu |  xsd /c UBL-CreditNote-2.1.xsd ../common/UBL-CommonExtensionComponents-2.1.xsd ../common/UBL-CommonBasicComponents-2.1.xsd ../common/UBL-UnqualifiedDataTypes-2.1.xsd ../common/UBL-CoreComponentParameters-2.1.xsd ../common/CCTS_CCT_SchemaModule-2.1.xsd ../common/UBL-CommonAggregateComponents-2.1.xsd | UBL-CreditNote-2.1.cs | CreditNoteType
<br>
<aside class="notice">
2. Diğer bir yöntem ise String Replacement yöntemidir. Belgelere ait değişecek alanların belirlendiği bir şablon oluşturulur. Belge düzenlenirken ilgili alanlar güncellenir. Oluşan belge webservice parametre olarak gönderilir.
</aside>
