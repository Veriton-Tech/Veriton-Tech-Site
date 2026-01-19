#!/bin/bash

# Auto-deploy script for Veriton Site
# Place this in /opt/deploy-scripts/deploy-veriton.sh

set -e  # Exit on error

APP_DIR="/path/to/Veriton-Tech-Site"  # Update this path
CADDY_NETWORK_NAME="hojaega_net"       # Update if different
LOG_FILE="/var/log/veriton-deploy.log"

echo "[$(date)] Starting deployment..." | tee -a "$LOG_FILE"

cd "$APP_DIR"

# Pull latest changes
git pull origin main 2>&1 | tee -a "$LOG_FILE"

# Build and deploy
export CADDY_NETWORK_NAME="$CADDY_NETWORK_NAME"
docker compose -f docker-compose.frontend.yml up -d --build 2>&1 | tee -a "$LOG_FILE"

# Clean up old images
docker image prune -f 2>&1 | tee -a "$LOG_FILE"

echo "[$(date)] Deployment completed!" | tee -a "$LOG_FILE"
