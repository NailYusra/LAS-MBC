# Tahap 1: Build aplikasi
FROM node:20-alpine AS build

WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi proyek
RUN npm install

# Salin semua file dari direktori proyek ke dalam kontainer
COPY . .

# Bangun aplikasi Next.js
RUN npm run build

# Tahap 2: Menjalankan aplikasi
FROM node:20-alpine AS runner

WORKDIR /app

# Salin hasil build dari tahap build
COPY --from=build /app ./

# Expose port yang akan digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi dalam mode produksi
CMD ["npm", "start"]
