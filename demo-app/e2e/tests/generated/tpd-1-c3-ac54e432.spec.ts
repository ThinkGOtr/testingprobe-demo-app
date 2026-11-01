// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C3 (ac54e432-66ce-56f5-b93c-b5a837ea615e) · Story: TPD-1 · Jira Test: TPD-15
// Onaylı case hash: 7f9dcc67e00a0e35f49150d82d9d6584120dbe4c1f11ff3921438d12cb1d05a0
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 8cf73dea83655a3549e4f6984649bb41533c72f0c0302c7e93ad96e7c505c80b · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C3", () => {
  test("6 adet kampanyalı üründe bedava ürün verilmez @tp-uretilen", { tag: ["@tp-case-ac54e432-66ce-56f5-b93c-b5a837ea615e", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", "Demo123!");
    // S3 — "Portakal Gazozu 1L" (P-001) kartında adedi 6 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-001", 6);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectLineQuantity("P-001", 6);
    await cartPage.expectFreeQuantity("P-001", 0);
    await cartPage.expectSubtotal("150,00 TL");
    await cartPage.expectDiscount("0,00 TL");
    await cartPage.expectTotal("150,00 TL");
  });
});
