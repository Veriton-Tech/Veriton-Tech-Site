Deploy behind existing Caddy (Hetzner)

Overview
- The frontend runs on port 3000 in a container and is proxied by Caddy.
- Join the same Docker network as your Caddy container so it can resolve
  the service name `atveriton-frontend`.

1) Build the image (locally or on server)

   docker build -t atveriton-frontend:latest .

2) Ensure the correct Docker network name

   Find your caddy stack network name (example: `hojaega_net` or `hojaega_hojaega_net`):

   docker network ls | findstr /I hojaega

   Set the name via env var when running compose:

   set CADDY_NETWORK_NAME=hojaega_net

3) Run the service

   docker compose -f docker-compose.frontend.yml up -d --build

4) Add vhost to Caddyfile

   atveriton.com, www.atveriton.com {
       encode zstd gzip
       reverse_proxy atveriton-frontend:3000
   }

   Then reload Caddy (zero downtime):

   docker exec hojaega_caddy caddy reload --config /etc/caddy/Caddyfile

5) Verify

- DNS A record for atveriton.com and www.atveriton.com points to the server IP.
- HTTPS is auto-provisioned by Caddy; first request may take a few seconds.

Notes
- The image builds the Next.js app and runs `npm run start`.
- Do not publish port 3000 to the host; Caddy connects over the Docker network.
- Rollback: remove the Caddyfile block and reload, then `docker compose down` for the frontend.
