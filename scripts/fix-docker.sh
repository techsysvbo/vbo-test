#!/bin/bash
# scripts/fix-docker.sh

echo "--- GovTech Environment Fix ---"

# 1. Kill anything on 3001
echo "[1/4] Cleaning up port 3001..."
sudo lsof -t -i:3001 | xargs sudo kill -9 2>/dev/null || echo "No process on 3001 found."

# 2. Neutralize Rancher Desktop Credential Helper
echo "[2/4] Sanitizing PATH and Docker config..."
# Find the Rancher path
RANCHER_PATH=$(which docker-credential-pass | grep "Rancher" || true)
if [ ! -z "$RANCHER_PATH" ]; then
    echo "Found Rancher cred helper at $RANCHER_PATH. Overriding..."
    # We'll create a local bin that takes precedence
    mkdir -p ~/.local/bin
    echo '#!/bin/sh' > ~/.local/bin/docker-credential-pass
    echo 'exit 0' >> ~/.local/bin/docker-credential-pass
    chmod +x ~/.local/bin/docker-credential-pass
    export PATH="$HOME/.local/bin:$PATH"
fi

# 3. Force Empty Config
mkdir -p ~/.docker
echo '{"auths": {}, "credsStore": ""}' > ~/.docker/config.json

# 4. Pull required public images
echo "[3/4] Pulling images..."
docker pull traefik:v3.1
docker pull postgres:15-alpine
docker pull redis:7-alpine

echo "[4/4] Environment fixed."
echo "You can now run: ./scripts/run.sh"
