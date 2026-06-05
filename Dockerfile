FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

FROM node:22-alpine AS builder
WORKDIR /app
# Stamp version into install snippets at build time (see source.config.ts).
ARG PLUGIN_VERSION
ENV PLUGIN_VERSION=$PLUGIN_VERSION
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run postinstall
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# 0.0.0.0 so a reverse proxy can reach the Next.js standalone server.
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
