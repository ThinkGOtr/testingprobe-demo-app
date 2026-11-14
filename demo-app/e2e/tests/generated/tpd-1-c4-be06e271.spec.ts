// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C4 (be06e271-355f-58b3-8592-62693d4ed12c) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: 3822bccbee86a1e0bbe30246ddfcddfa016fe9084dee97a42cc2d6c4342591fb
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: a9056d04152c2463a182924ca0c099e9438b945fdca31ddb56ec9dbf92a4fc90 · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C4", () => {
  test("5 adet kampanyalı üründe bedava ürün verilmez @tp-uretilen", { tag: ["@tp-case-be06e271-355f-58b3-8592-62693d4ed12c", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Portakal Gazozu 1L" (P-001) kartında adedi 5 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-001", 5);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectLineQuantity("P-001", 5);
    await cartPage.expectFreeQuantity("P-001", 0);
    await cartPage.expectSubtotal("125,00 TL");
    await cartPage.expectDiscount("0,00 TL");
    await cartPage.expectTotal("125,00 TL");
  });
});
