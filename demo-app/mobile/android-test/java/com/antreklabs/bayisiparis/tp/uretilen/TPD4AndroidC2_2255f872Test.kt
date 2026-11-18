// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-4 C2 (2255f872-854d-5f8c-82d0-7f82d84f4a18) · Story: TPD-4 · Jira Test: -
// Onaylı case hash: c3807f220981b15fd23a788a77332210473d292d7ec7c4c70eb32e5751df772f
// Eşleme: verify_and_map_app · platform: android · mod: live · bundle: -
// Eşleme hash: 38e3ab4781052034b052e0a0ea0d20d45da9e307da9d59a609ec6f55d3283ef4 · şablon: a074fd6fcaebaec9b2a719cce8353732aa7c70cb02d0c8a53211cffcd7be49a4
// Hat: müşteri CI (derleme ve koşu GitHub Actions'ta) · kırarak doğrulanmadı
package com.antreklabs.bayisiparis.tp.uretilen

import androidx.test.ext.junit.runners.AndroidJUnit4
import com.antreklabs.bayisiparis.tp.altyapi.Bayi
import com.antreklabs.bayisiparis.tp.altyapi.TestTabani
import org.junit.Test
import org.junit.runner.RunWith

// Hatalı parola ile girişte hata mesajı gösterilir
@RunWith(AndroidJUnit4::class)
@Bayi("bayi1")
class TPD4AndroidC2_2255f872Test : TestTabani() {
  @Test
  fun senaryo() {
    // S1 — Giriş sayfasını aç
    girisEkrani().ac()
    // S2 — Kullanıcı adı ve hatalı parola gir, "Giriş yap" butonuna bas
    girisEkrani().girisYap("bayi1", "Yanlis123!")
    // Beklenen sonuç (değerler onaylı case metninden)
    girisEkrani().dogrulaHataMesaji("Kullanıcı adı veya parola hatalı")
    girisEkrani().dogrulaGirisEkraninda()
  }
}
