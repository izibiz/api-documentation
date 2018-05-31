## Ortak Kullanılan Eleman

Her webservis isteğinde gönderilmesi beklen ortak elemandır (REQUEST_HEADER)

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**SESSION_ID** | String | **Evet** | Login Metodunda sistem tarafında gönderilen SESSION_ID bilgisi. Sonraki tüm metod çağrılarında parametre olarak metoda geçmelidir.
**APPLICATION_NAME** | String | **Evet** | Metodu çağıran uygulamanın adı. Mutlaka uygulama adının yazılması gerekmektedir.
**COMPRESSED** | String | Hayır | İçerikte taşınan bilginin ZIP formatında sıkıştırılmış mı gönderildiği/talep edildiği bilgisi. Belge gönderim ve belge okuma servislerinde gönderilen değere göre işlem yapılmaktadır.
**CLIENT_TXN_ID** | String | Hayır | İstemci uygulama tarafından işlem için üretilen işlem bilgisi (transaction id) varsa istek esnasında gönderilip, sonuçta alabileceğiniz bir değerdir. request/response eşleşmesi yapmak için kullanılabilir.
**INT_PARENT_TXN_ID** | String | Hayır | İstemci uygulamasında ana modül entitileri ile ilişkilendirelmek istenen ana transaction ID.
**ACTION_DATE** | String | Hayır | Metodun çağrılma tarihi
**CHANGE_INFO** | Array | Hayır | Bu eleman ile eğer verilerde bir değişiklik yapılacak ise o değişikliği ait bilgi.
**REASON** | String | Hayır | İşlem sebebi. Fatura gönderme, fatura alma vs.
**HOST_NAME** | String | Hayır | Metodu çağıran sunucunun host bilgisi.
**CHANNEL_NAME** | String | Hayır | Metodun çağrıldığı kanal adı.
**SIMULATION_FLAG** | String | Hayır | Metod çağrılır ancak arkadaki işlem yapılmaz.
