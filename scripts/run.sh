#!/bin/bash
# GovTech Platform - WSL Runner (v9 - Rancher Bridge Fix)

echo "--- GovTech Microservices Startup ---"

# 1. DETECT RANCHER BRIDGE
# We look for the shared socket provided by Rancher Desktop in /mnt/wsl
RANCHER_BRIDGE="/mnt/wsl/rancher-desktop/run/docker.sock"

if [ -S "$RANCHER_BRIDGE" ]; then
    echo "[1/3] Path found: Rancher Desktop Bridge is active."
    export DOCKER_HOST="unix://$RANCHER_BRIDGE"
else
    # Fallback to standard socket if bridge is missing
    echo "[1/3] Warning: Rancher Bridge not found. Attempting standard socket..."
    export DOCKER_HOST="unix:///var/run/docker.sock"
fi

# 2. ISOLATED ENVIRONMENT
# Force Docker to ignore broken credential helpers
export NUCLEAR_CONFIG=$(mktemp -d)
echo '{"auths": {}, "credsStore": ""}' > "$NUCLEAR_CONFIG/config.json"
export DOCKER_CONFIG=$NUCLEAR_CONFIG
export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0

# 3. LAUNCH
echo "[2/3] Launching Infrastructure with Isolated Config..."
if ! docker info >/dev/null 2>&1; then
    echo "ERROR: Still cannot connect to Docker daemon via $DOCKER_HOST"
    echo "Please ensure Rancher Desktop 'WSL Integration' is toggled ON for this distro."
    exit 1
fi

docker compose -f infra/docker-compose.yml up -d

echo "[3/3] Platform is starting!"
echo "------------------------------------"
echo "Public Site: http://localhost"
echo "Traefik: http://localhost:8080"
echo "------------------------------------"

docker compose -f infra/docker-compose.yml logs -f
