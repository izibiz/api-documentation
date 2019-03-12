## Oturum Açma (Login) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki OTURUM AÇMA (Login) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Lütfen oturum açmak için Authentication servisini kullanınız.
</aside>

## Oturum Kapatma (Logout) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki OTURUM KAPATMA (Logout) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Lütfen oturum kapatmak için Authentication servisini kullanınız.
</aside>

## Mükellef Listesi Çekme (GetUserListBinary) - Kullanmayınız
<aside class="warning">E-Fatura webservis içerisinde ki MÜKELLEF LİSTESİ ÇEKME (GetUserListBinary) metodu Kimlik Doğrulama (Authentication) Webservisine taşınmıştır. Ayrıca servisin ismi GetGibUserList olarak değiştirilmiştir. Lütfen mükellef listesini çekmek için Authentication servisindeki GetGibUserList metodunu kullanınız.
</aside>

## Mükellef Listesi Çekme (GetUserList) - Kullanmayınız
<aside class="warning">
Bu servis e-fatura sistemine kayıtlı bütün mükelleflere ait etiketlerin XML formatında sıkıştırılmadan toplu çekmek için kullanılmıştır. Ancak E-Fatura sistemine kayıtlı mükellef listesinin artmasından dolayı performans sorunu oluşmuştur. Mükellef listesini sıkıştırılmış/ziplenmiş XML olarak dönen GetGibUserList servisi eklenmiştir. Bu servis kullanımı sonlandırılmıştır. Mevcut iş ortaklarımız yeni servise geçince tamamen kapatılacaktır.  Lütfen Kimlik Doğrulama webservisinde ki Mükellef Listesi Çekme (GetGibUserList) başlığını inceleyiniz.
</aside>
