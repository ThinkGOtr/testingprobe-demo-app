# testingprobe-demo-app

AI Testing Probe'un **GitHub kipinde** test ettiği demo uygulaması (Bayi Sipariş Portalı;
tüm veri sentetiktir). Bu depo `testing-probe` ürün deposundan
`scripts/github-demo-repo-init.sh` ile üretilmiştir (kaynak c1fce311469c).

| Yol | İçerik |
|---|---|
| `demo-app/` | Uygulama (`api/`, `web/`, `e2e/` page object kütüphanesi + testler, `ci/run-checks.sh`) |
| `.github/workflows/ci.yml` | Zorunlu check'ler: `test-local`, `ast-guard`, `semgrep` (CI'da AI yok) |
| `toolchain/ast-guard/` | Locator onarımı yalnızca `testId` değiştirebilir (AST koruması) |

Kurallar (ruleset `tp-main`): `main`'e yalnızca PR ile; 1 insan onayı + CODEOWNERS; bot (GitHub
App) PR açar ama **merge etmez**; ruleset bypass yalnızca `demo-admin` takımındadır.
`demo-baseline` etiketi demo sıfırlamasının hedef ağacıdır. Kurulum: ürün deposunda
`docs/GERCEK-SISTEMLER.md` §5.
