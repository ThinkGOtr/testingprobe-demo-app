// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C5 (09cb397e-1f0b-5f7f-85e3-2ba1a5522195) · Story: TPD-1 · Jira Test: TPD-30
// Onaylı case hash: 338805a9f029ec2fe15743e4fd87fd5bdf1de86cfb989ed301eaf81b9cd059e5
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 18be7e17169d01382b9beb24030ccb95b9183844da0508044aea8ac9155073a6 · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C5", () => {
  test("Kampanyasız siparişte minimum tutarın altında uyarı gösterilir ve onay pasif olur @tp-uretilen", { tag: ["@tp-case-09cb397e-1f0b-5f7f-85e3-2ba1a5522195", "@TPD-1"] }, async ({ cartPage, catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", "Demo123!");
    // S3 — "Limonata 330ml" (P-002) kartında adedi 10 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-002", 10);
    // S4 — Üst menüden sepete git
    await catalogPage.openCart();
    // Beklenen sonuç (değerler onaylı case metninden)
    await cartPage.expectTotal("150,00 TL");
    await cartPage.expectMinOrderWarning("Minimum sipariş tutarı 750,00 TL");
    await cartPage.expectCheckoutDisabled();
  });
});
