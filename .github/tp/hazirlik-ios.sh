#!/usr/bin/env bash
# Bayi Sipariş (Expo/RN) — TP müşteri CI hazırlığı, iOS. TP iş akışı (mobil-ios-swift) derlemeden
# önce depo kökünden koşar. Uygulamaya özgüdür (TP kurulum PR'ının "elle adımı"):
#   1. En yeni kararlı Xcode seçilir (runner'da birden çok Xcode olabilir).
#   2. ios/ depoda yok → expo prebuild; plugins/xcuitest-hedefi.js `BayiSiparisUITests` hedefini
#      eşitlenmiş klasörle (ios-test/BayiSiparisUITests) ekler → pod install.
#   3. "TP iPhone" simülatörü (kurulu iOS çalışma zamanı + iPhone 16 ya da ilk iPhone türü).
#   4. Test arka ucu (demo API + web, 127.0.0.1); test koşucusuna TEST_RUNNER_ önekiyle API kökü
#      ve test belirteci (önek düşer: DEMO_API_URL, DEMOAPP_TEST_TOKEN).
set -euo pipefail
kok="$(pwd)"
xcode="$(find /Applications -maxdepth 1 -name 'Xcode_*.app' -type d \
  | grep -viE 'beta|release_candidate|_rc' | sort -V | tail -n 1 || true)"
if [ -n "$xcode" ]; then sudo xcode-select -s "$xcode/Contents/Developer"; fi
xcodebuild -version
cd demo-app/mobile
export LANG=en_US.UTF-8
npm ci --no-audit --no-fund --loglevel=error
node scripts/kimlik-kontrol.mjs
EXPO_NO_TELEMETRY=1 npx expo prebuild --platform ios --clean --no-install
grep -q 'PBXFileSystemSynchronizedRootGroup' ios/*.xcodeproj/project.pbxproj \
  || { echo "::error::UI test hedefi (eşitlenmiş klasör) prebuild'de eklenmedi"; exit 1; }
(cd ios && pod install)
cd "$kok"
sdkver="$(xcrun --sdk iphonesimulator --show-sdk-version)"
read -r rt_id rt_ver < <(xcrun simctl list runtimes -j | jq -r --arg sdk "$sdkver" '
  [.runtimes[] | select(.platform == "iOS" and .isAvailable)]
  | sort_by(.version | split(".") | map(tonumber))
  | ((map(select(.version == $sdk)) | last) // last)
  | "\(.identifier) \(.version)"')
[ -n "${rt_id:-}" ] || { echo "::error::Kurulu iOS simülatör çalışma zamanı yok"; exit 1; }
dt="$(xcrun simctl list runtimes -j | jq -r --arg id "$rt_id" --arg ad "iPhone 16" '
  [.runtimes[] | select(.identifier == $id) | .supportedDeviceTypes[]
   | select(.productFamily == "iPhone")] as $t
  | (($t | map(select(.name == $ad)) | first) // ($t | first)) | .identifier')"
udid="$(xcrun simctl create "TP iPhone" "$dt" "$rt_id")"
echo "Simülatör: TP iPhone ($udid) · $dt · iOS $rt_ver"
bash .github/tp/arka-uc.sh
token="$(grep '^DEMOAPP_TEST_TOKEN=' "$GITHUB_ENV" | tail -n1 | cut -d= -f2-)"
{
  echo "TEST_RUNNER_DEMO_API_URL=http://127.0.0.1:18000"
  echo "TEST_RUNNER_DEMOAPP_TEST_TOKEN=$token"
} >> "$GITHUB_ENV"
