// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C9 (c727020d-9fca-5fc4-acb8-6e94361ae9fc) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: d5d2d9fc78a9615fc8648ad0b9d11a001e9cf5c71e1e065a031f2fae0d3f9974
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 8b6a8d0ca68d3bcaf8a54220e3fc98fa5ee589a586e6d071bb2e4baf4d203891 · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C9", () => {
  test("Kampanyalı siparişte minimum sipariş tutarı şartı aranmaz @tp-uretilen", { tag: ["@tp-case-c727020d-9fca-5fc4-acb8-6e94361ae9fc", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Portakal Gazozu 1L" (P-001) kartında adedi 7 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-001", 7);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectTotal("150,00 TL");
    await cartPage.expectNoMinOrderWarning();
    await cartPage.expectCheckoutEnabled();
  });
});
