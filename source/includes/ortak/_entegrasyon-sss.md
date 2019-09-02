## Entegrasyon Sıkça Sorulan Sorular

Entegrasyon sürecinde karşılaşılan soruların cevapları:


**Soru:** Ürün bazlı (E-Fatura, E-İrsaliye) kayıtlı kullanıcıları sorgulayabileceğimiz bir servis mevcut mu ?

**Cevap:** Kimlik Doğrulama webservisinde bulunan **Mükellef Listesi Çekme (GetGibUserList)** metodumuzu kullanarak E-Fatura ve E-İrsaliye mükellef listesini çekebilirsiniz. **DOCUMENT_TYPE**  parametresine E-Fatura için `INVOICE`, E-İrsaliye için `DESPATCHADVICE` gönderilmelidir. Her iki ürüne ait etiketleri toplu çekmek için `ALL` değeri gönderilebilir. Parametre gönderilmez veya boş gönderilirse bütün liste dönülecektir.
