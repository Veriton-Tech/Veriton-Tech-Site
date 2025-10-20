Quick Docker deployment

1. Build the image locally (or on your server):

   docker build -t atveriton-frontend:latest .

2. Run with docker-compose file for the project (this assumes your other services use a docker network named `hojaega`):

   docker-compose -f docker-compose.frontend.yml up -d --build

3. Caddy reverse proxy should be configured to route atveriton.com to the service name `atveriton-frontend:3000` (container-to-container networking) or to the host port 3000 if you expose it.

Notes:
- If you don't have an external docker network named `hojaega`, create one:
  docker network create hojaega

- The image builds the Next.js app and runs `npm run start`.
- For automated builds, run the same docker build on your Hetzner server or use CI/CD.
