// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C10 (a735c57c-2eb4-5126-8467-2d1fc02f1972) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: 408655a022f014566b982c2b924fb86f3ddfddc86ffbfdf7b3ebec665fd64fb6
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: cf31f88a3e9573641b0cbbbbbedc4af4af58f8eee0c9432845c6a88b9611c17f · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C10", () => {
  test("Kampanyalı üründen 7 adet sepete eklenince bedava adet ve tutarlar doğru hesaplanır @tp-uretilen", { tag: ["@tp-case-a735c57c-2eb4-5126-8467-2d1fc02f1972", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Portakal Gazozu 1L" (P-001) kartında adedi 7 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-001", 7);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectLineQuantity("P-001", 7);
    await cartPage.expectFreeQuantity("P-001", 1);
    await cartPage.expectSubtotal("175,00 TL");
    await cartPage.expectDiscount("25,00 TL");
    await cartPage.expectTotal("150,00 TL");
  });
});
