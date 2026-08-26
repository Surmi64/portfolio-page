#!/usr/bin/env bash
# Register the self-hosted GitHub Actions runner that deploys istumpf.dev.
#
# Run this ON the host that serves the site, as root:
#
#   1. Get a registration token (valid ~1 hour):
#      GitHub -> repo -> Settings -> Actions -> Runners -> New self-hosted runner
#      Copy the token out of the `./config.sh --token XXXX` line it shows.
#
#   2. sudo ./setup-runner.sh <TOKEN>
#
# The runner is installed as a systemd service running as an unprivileged user
# whose primary group is www-data, so it can write the webroot directly and
# needs no sudo at all. The existing runner on this host runs as root; this one
# deliberately does not.
set -euo pipefail

REPO_URL="https://github.com/Surmi64/portfolio-page"
RUNNER_USER="gh-runner-istumpf"
RUNNER_DIR="/var/istumpf-dev-runner"
RUNNER_NAME="istumpf-dev-runner-vps"
LABELS="self-hosted,linux,istumpf-dev"     # must match runs-on in deploy.yml
WEBROOT="/var/istumpf-dev"

TOKEN="${1:-}"
[ -n "$TOKEN" ] || { echo "usage: sudo $0 <registration-token>" >&2; exit 1; }
[ "$(id -u)" = "0" ] || { echo "run as root" >&2; exit 1; }

echo "==> deploy user"
if ! id "$RUNNER_USER" >/dev/null 2>&1; then
  useradd --system --gid www-data --create-home --home-dir "$RUNNER_DIR" \
          --shell /bin/bash "$RUNNER_USER"
fi
install -d -o "$RUNNER_USER" -g www-data -m 755 "$RUNNER_DIR"

echo "==> webroot ownership (nginx keeps read access via the www-data group)"
install -d -o "$RUNNER_USER" -g www-data -m 755 "$WEBROOT"
chown -R "$RUNNER_USER:www-data" "$WEBROOT"
find "$WEBROOT" -type d -exec chmod 755 {} +
find "$WEBROOT" -type f -exec chmod 644 {} +

echo "==> download the runner"
# Pin a version rather than tracking "latest": an unattended runner that
# silently changes underneath a deploy is not worth the convenience.
RUNNER_VERSION="2.328.0"
ARCH="x64"
TARBALL="actions-runner-linux-${ARCH}-${RUNNER_VERSION}.tar.gz"
if [ ! -f "$RUNNER_DIR/config.sh" ]; then
  sudo -u "$RUNNER_USER" bash -c "
    cd '$RUNNER_DIR'
    curl -fsSL -o '$TARBALL' \
      'https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/${TARBALL}'
    tar xzf '$TARBALL'
    rm -f '$TARBALL'
  "
fi

echo "==> configure"
sudo -u "$RUNNER_USER" bash -c "
  cd '$RUNNER_DIR'
  ./config.sh --unattended --replace \
    --url '$REPO_URL' \
    --token '$TOKEN' \
    --name '$RUNNER_NAME' \
    --labels '$LABELS' \
    --work _work
"

echo "==> install as a service"
cd "$RUNNER_DIR"
./svc.sh install "$RUNNER_USER"
./svc.sh start
sleep 3
./svc.sh status || true

cat <<EOF

Done. The runner is registered to $REPO_URL with labels: $LABELS

Check it under Settings -> Actions -> Runners; it should show Idle.

To remove it later:
  cd $RUNNER_DIR && sudo ./svc.sh stop && sudo ./svc.sh uninstall
  sudo -u $RUNNER_USER ./config.sh remove --token <REMOVAL-TOKEN>
EOF
