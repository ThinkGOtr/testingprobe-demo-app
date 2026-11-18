// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-4 C2 (81124b8c-fe6b-5135-8695-d5d1b4f871a2) · Story: TPD-4 · Jira Test: -
// Onaylı case hash: c3807f220981b15fd23a788a77332210473d292d7ec7c4c70eb32e5751df772f
// Eşleme: verify_and_map_app · platform: ios · mod: live · bundle: -
// Eşleme hash: 7c01e64096705d2f4ad3420e507d620affcd79a9bdfb3176c0e17adbf574866c · şablon: 0cd23e804f2315feb72fe77b2026c520e68d3419b259a77f0fd3901648754247
// Doğrulama: müşteri CI (mobil-ios-swift) · kırarak doğrulanmadı
// Senaryo: Hatalı parola ile girişte hata mesajı gösterilir
import XCTest

final class TPD4IosC2_81124b8cTests: TestTabani {
    override class var bayi: String? { "bayi1" }

    func testSenaryo() {
        // S1 — Giriş sayfasını aç
        girisEkrani.ac()
        // S2 — Kullanıcı adı ve hatalı parola gir, "Giriş yap" butonuna bas
        girisEkrani.girisYap(kullaniciAdi: "bayi1", parola: "Yanlis123!")
        // Beklenen sonuç (değerler onaylı case metninden)
        girisEkrani.dogrulaHataMesaji(beklenen: "Kullanıcı adı veya parola hatalı")
        girisEkrani.dogrulaGirisEkraninda()
    }
}
