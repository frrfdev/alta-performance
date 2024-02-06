FROM node:20.11.0-alpine AS base
ENV NODE_VERSION 21.6.1

WORKDIR /app
FROM base AS deps
# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
FROM deps AS inter
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
FROM inter AS dev
CMD ["npm", "run", "dev"]


