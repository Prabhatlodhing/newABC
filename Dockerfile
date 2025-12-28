
# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Runtime
FROM node:20-alpine

WORKDIR /app

# Install dumb-init to handle signals properly
RUN apk add --no-cache dumb-init

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy package files
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Run the application with dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
 