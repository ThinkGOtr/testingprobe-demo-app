// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C8 (92e0cedb-d27c-5e1a-bc92-bf1333a4e564) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: c09ab2788154d164d5f88ee421c7ddee534829b9e499d0558d6af015a3493920
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 8dc6a6c380c6e9cb46deedf753811911e83a9098bcadacc769fd7661513aae4e · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C8", () => {
  test("Onaylanan siparişin numarası gösterilir ve sipariş geçmişinde listelenir @tp-uretilen", { tag: ["@tp-case-92e0cedb-d27c-5e1a-bc92-bf1333a4e564", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage, orderPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Şeftalili Soğuk Çay 1L" (P-004) kartında adedi 25 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-004", 25);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // S5 — "Siparişi onayla" butonuna bas
    await cartPage.checkout();
    // Beklenen sonuç (değerler onaylı case metninden)
    await orderPage.expectConfirmation();
    await orderPage.expectConfirmedTotal("750,00 TL");
    await orderPage.expectConfirmedOrderInHistory();
  });
});
