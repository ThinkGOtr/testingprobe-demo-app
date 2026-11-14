// AI-generated — AI Testing Probe (CasesToCode). Elle düzenlemeyin; değişiklik case'in yeniden
// onayı ve yeniden üretimle yapılır.
// Case: TPD-1-C1 (73a59dd8-152b-5dda-b4f5-29bb4c1f1559) · Story: TPD-1 · Jira Test: -
// Onaylı case hash: da92a897fa69e6b17ef006bced5233561bc9be4824355cbbcc40928a059e37f7
// Eşleme: verify_and_map · mod: replay · bundle: e2ce35533f865dd9daa849d098825c6412e0efb80e5129db59f1bf010d2106b1
// Eşleme hash: 4389820cbe3683aa3fc0a6776f04a142d87de3c46f7036d95716fa4e7df8c47e · şablon: 27d7a7d397b6f70fe448639790e56991ed28ed83a025acad14ba76ad00a7f55d
import { test } from "../fixtures";

test.use({ dealerUsername: "bayi1" });

test.describe("TPD-1 · C1", () => {
  test("Sepete ekle ile ürün sepete eklenir ve sepet sayacı artar @tp-uretilen", { tag: ["@tp-case-73a59dd8-152b-5dda-b4f5-29bb4c1f1559", "@TPD-1"] }, async ({ catalogPage, loginPage }) => {
    // S1 — Giriş sayfasını aç
    await loginPage.goto();
    // S2 — Bayi kullanıcısıyla giriş yap
    await loginPage.login("bayi1", process.env.TP_TESTVERI_DEMO_PAROLA);
    // S3 — "Portakal Gazozu 1L" (P-001) kartında adedi 1 yapıp "Sepete ekle" butonuna bas
    await catalogPage.addToCart("P-001", 1);
    // Beklenen sonuç (değerler onaylı case metninden)
    await catalogPage.expectCartCount(1);
  });
});
