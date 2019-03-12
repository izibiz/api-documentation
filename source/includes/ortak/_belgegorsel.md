## Belge Görüntüleme
* Bilindiği gibi e-dönüşüm sisteminde düzenlenen ve saklanan belgeler UBL-TR XML formatındadır. Düzenlenmiş her XML belgenin içerisinde görüntüsünü sağlayacak bir şablon (XSLT) dosya bulunmak zorundadır. Şablon belgesinin formatı XSLT (Extensible Stylesheet Language Transformations) Genişletilebilir Biçimlendirme Dili Dönüşümleridir. Bu dosya XML dokümanlarını insanların anlayacağı formata (HTML/PDF) dönüştürmek için kullanılır.

* Belge şablon dosyası XML dosya içerisinde ki **AdditionalDocumentReference** elemanına eklenmek zorundadır.
<img src="/images/xslt_ekleme.png" height="200" width="400"/>

* Gelir İdaresi Başkanlığı tarafından mükellefler arasında ki anlaşmazlıklarda kullanabilecekleri ortak bir uygulama olan **E-Belge Görüntüleyici** uygulaması yayınlamıştır. Bu uygulama UBL-TR formatında ki belgenin içerisinde ki şablon ile görüntülemesini sağlar, şema ve şematron kontrolü yapar, belgenin içerisinde ki imzanın geçerliliğini kontrol eder ve belgenin GİB'de ki durumunu kontrol eder.

Kullandığınız Java Versiyonuna Göre E-Belge Görüntüleyici İndirebilirsiniz:
[E-Belge Görüntüleyici Java 1.6 İndir](http://www.efatura.gov.tr/EFaturaGoruntuleyici/Windows/EFaturaGoruntuleyici.jnlp)<br>
[E-Belge Görüntüleyici Java 1.7 İndir](http://www.efatura.gov.tr/EFaturaGoruntuleyici/Windows/Java17/EFaturaGoruntuleyici.jnlp)
