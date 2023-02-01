FROM node:19-alpine3.15 AS BUILD_STAGE

ARG VITE_BASE_URL

# Set working directory
WORKDIR /app

# Copy into working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Add app
COPY . ./

# Build app
RUN npm run build

FROM nginx:1.23.3-alpine AS DEPLOYMENT_STAGE

COPY --from=BUILD_STAGE /app/dist/ /usr/share/nginx/html

EXPOSE 80