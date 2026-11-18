#!/usr/bin/env bash
# Bayi Sipariş (Expo/RN) — TP müşteri CI hazırlığı, Android. TP iş akışı (mobil-android-kotlin)
# derlemeden önce depo kökünden koşar. Uygulamaya özgüdür (TP kurulum PR'ının "elle adımı"):
#   1. android/ depoda yok → expo prebuild; plugins/espresso.js `tpTest` derleme türünü,
#      `testBuildType "tpTest"`i ve androidTest kaynak kökünü (android-test/java) ekler.
#   2. Test arka ucu (demo API + web) → emülatörden http://10.0.2.2:18000.
#   3. Enstrümantasyon argümanları (API kökü, test belirteci) ve x86_64 ABI gradle.properties'e.
set -euo pipefail
kok="$(pwd)"
cd demo-app/mobile
npm ci --no-audit --no-fund --loglevel=error
EXPO_NO_TELEMETRY=1 npx expo prebuild --platform android --clean --no-install
grep -q "@tp-espresso başlangıç" android/app/build.gradle \
  || { echo "::error::espresso config plugin prebuild'de uygulanmadı"; exit 1; }
cd "$kok"
bash .github/tp/arka-uc.sh
token="$(grep '^DEMOAPP_TEST_TOKEN=' "$GITHUB_ENV" | tail -n1 | cut -d= -f2-)"
# Önce satır sonu: prebuild'in gradle.properties'i son satırı satır sonusuz bırakabilir.
{
  echo ""
  echo "reactNativeArchitectures=x86_64"
  echo "android.testInstrumentationRunnerArguments.tpApiUrl=http://10.0.2.2:18000"
  echo "android.testInstrumentationRunnerArguments.tpTestToken=$token"
} >> demo-app/mobile/android/gradle.properties
