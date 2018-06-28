## Belge Görüntüleme
* Bilindiği gibi e-dönüşüm sisteminde düzenlenen ve saklanan belgeler UBL-TR XML formatındadır. Düzenlenmiş her XML belgenin içerisinde görüntüsünü sağlayacak bir şablon (XSLT) dosya bulunmak zorundadır. Şablon belgesinin formatı XSLT (Extensible Stylesheet Language Transformations) Genişletilebilir Biçimlendirme Dili Dönüşümleridir. Bu dosya XML dokümanlarını insanların anlayacağı formata (HTML/PDF) dönüştürmek için kullanılır.

* Belge şablon dosyası XML dosya içerisinde ki **AdditionalDocumentReference** elemanına eklenmek zorundadır.
<img src="/images/xslt_ekleme.png" height="200" width="400"/>

* GİB, Türkiye’deki e-Fatura uygulamasında mükelleflerin kendilerine gelen ya da gönderdikleri e-Fatura’ların şema-şematron uygunluk kontrollerini yapan, görüntüleyen ve imza kontrollerini yapan GİB e-Fatura Görüntüleyici isminde Java tabanlı bir uygulama yayınlamıştır (internet bağlantısı gerekmektedir). Uygulama UBL-TR fatura XML’leri ile çalışmaktadır: <br>
[E-Belge Görüntüleyici Java 1.6 İndir](http://www.efatura.gov.tr/EFaturaGoruntuleyici/Windows/EFaturaGoruntuleyici.jnlp)<br>
[E-Belge Görüntüleyici Java 1.7 İndir](http://www.efatura.gov.tr/EFaturaGoruntuleyici/Windows/Java17/EFaturaGoruntuleyici.jnlp)
