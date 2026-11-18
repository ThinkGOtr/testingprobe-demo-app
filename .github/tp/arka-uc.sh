#!/usr/bin/env bash
# Bayi Sipariş demo arka ucu (API + web vekili, 127.0.0.1:8081/18000) — TP hazırlık betiklerinin
# ortak parçası (uygulamaya özgü; TP'nin değil). Rastgele test belirtecini maskeler ve
# DEMOAPP_TEST_TOKEN olarak GITHUB_ENV'e yazar. Süreç adımdan sonra da çalışır (job sonunda kapanır).
set -euo pipefail
if ! command -v uv >/dev/null 2>&1; then
  if command -v pipx >/dev/null 2>&1; then pipx install --quiet uv==0.8.24 >/dev/null
  else python3 -m pip install --quiet --user uv==0.8.24; fi
  for d in "$HOME/.local/bin" "$(python3 -m site --user-base 2>/dev/null)/bin"; do
    [ -d "$d" ] && { export PATH="$d:$PATH"; echo "$d" >> "$GITHUB_PATH"; }
  done
fi
uv --version
token="$(openssl rand -hex 24)"
echo "::add-mask::$token"
echo "DEMOAPP_TEST_TOKEN=$token" >> "$GITHUB_ENV"
mkdir -p "$RUNNER_TEMP/tp-logs"
PORT=8081 DEMO_API_PORT=18000 DEMOAPP_TEST_TOKEN="$token" \
  nohup bash scripts/github-demo-serve.sh > "$RUNNER_TEMP/tp-logs/serve.log" 2>&1 < /dev/null &
for _ in $(seq 1 120); do
  if curl -fsS "http://127.0.0.1:8081/api/health" >/dev/null 2>&1; then
    echo "Demo arka ucu hazır (API 127.0.0.1:18000)"
    exit 0
  fi
  sleep 2
done
echo "::error::Demo arka ucu 240 sn içinde hazır olmadı"
tail -n 100 "$RUNNER_TEMP/tp-logs/serve.log"
exit 1
