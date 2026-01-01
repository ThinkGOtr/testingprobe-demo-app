# testingprobe-demo-app

AI Testing Probe'un **GitHub kipinde** test ettiği demo uygulaması (Bayi Sipariş Portalı;
tüm veri sentetiktir). Bu depo `testing-probe` ürün deposundan
`scripts/github-demo-repo-init.sh` ile üretilmiştir (kaynak c5ee7af8d92c).

| Yol | İçerik |
|---|---|
| `demo-app/` | Uygulama (`api/`, `web/`, `e2e/` page object kütüphanesi + testler, `ci/run-checks.sh`) |
| `.github/workflows/ci.yml` | Zorunlu check'ler: `test-local`, `ast-guard`, `semgrep` (CI'da AI yok) |
| `toolchain/ast-guard/` | Locator onarımı yalnızca `testId` değiştirebilir (AST koruması) |
| `demo-app/e2e-java/` | Web e2e Java hattı (Playwright for Java + TestNG; `ci/run-java-checks.sh`, check `web-java`) |
| `toolchain/java-araclar/`, `toolchain/e2e-java-deps/` | Üretilen Java test koruması ve güvenilir pom (pom kilidi) |

Kurallar (ruleset `tp-main`): `main`'e yalnızca PR ile; 1 insan onayı + CODEOWNERS; bot (GitHub
App) PR açar ama **merge etmez**; ruleset bypass yalnızca `demo-admin` takımındadır.
`demo-baseline` etiketi demo sıfırlamasının hedef ağacıdır. Kurulum: ürün deposunda
`docs/GERCEK-SISTEMLER.md` §5.
