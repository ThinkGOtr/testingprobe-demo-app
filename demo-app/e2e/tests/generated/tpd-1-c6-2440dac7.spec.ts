// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C6 (2440dac7-dee8-5f79-bd36-02942576c3e2) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: 6b6ae9e44f0985436bc47a019088f3fb9f954774ecf03e74d8d8035adff0f7b8
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 27f917901655894d13054ab3cb83a2c76fee95cd635d2bb5775c3fc1410c448f · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C6", () => {
  test("Kampanyasız siparişte minimum tutara eşit toplamda uyarı gösterilmez ve onay aktif olur @tp-uretilen", { tag: ["@tp-case-2440dac7-dee8-5f79-bd36-02942576c3e2", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Şeftalili Soğuk Çay 1L" (P-004) kartında adedi 25 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-004", 25);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectTotal("750,00 TL");
    await cartPage.expectNoMinOrderWarning();
    await cartPage.expectCheckoutEnabled();
  });
});
