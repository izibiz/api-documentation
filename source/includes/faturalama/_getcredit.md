## Kontör Bakiye Sorgulama (GetCredit)
* Özel entegratör sistemi üzerinden mevcut kontör bakiye, yüklenen toplam kontör bakiyesi ve bu kontör paketlerine dair detayların sorgulandığı servistir.
* `CREDIT_DETAIL_FLAG` parametresi kullanılarak Kontor Bakiye detay bilgileri alınabilinir.


Servise gönderilmesi gereken parametreler şu şekildedir:

Parametre | Tip         | Zorunluluk  | Açıklama
--------- | ----------- | ----------- | -----------
**REQUEST_HEADER** | ComplexType | **Evet** | Request Header objesi içerisinde `SESSION_ID` ve `APPLICATION_NAME` alanı zorunludur.
**CREDIT_DETAIL_FLAG** | Enum   | **Hayır** | Kontör bilgisine dair detay istenmesi veya istenmemesi. `Y` ve `N` değerleri alır. Değer verilmemesi durumunda `N` olarak kabul edilir.

<br><br>

Servisten dönen parametreler şu şekildedir:

Parametre | Tip        | Açıklama
--------- | ----------- | -----------
**CREDIT_LOADED** | String | Toplam yüklenmiş kontör miktarı.
**CREDIT_BALANCE** | String | Mevcut kalan kontör miktarı.
**LAST_PROCESS_TIME** | Date | En son kontör kullanılma zamanı.
**MESSAGE** | String | Kontör kullanıma dair bilgi mesajı.
**CREDIT_DETAIL** | ComplexType | Yüklenmiş kontör bilgilerini içinde bulunduran yapı.
**CREDIT_DETAIL.CREDIT** | ComplexType | Yüklenen kontörlere ait detayı bulunduran yapı.
**CREDIT.CDATE** | Date | Kontörün tanımlanma tarihi.
**CREDIT.EXPIRE_DATE** | Date | Kontörün kullanım hakkının sona erme tarihi.
**CREDIT.LOADED_AMOUNT** | String | Yüklenmiş kontör adeti.
**CREDIT.REMAINING_AMOUNT** | String | Kalan kontör adeti.
**CREDIT.TARIFF_NAME** | String | Tanımlanmış kontör tarifesinin adı.
**CREDIT.PRICE** | String | Tarifenin ücreti.
