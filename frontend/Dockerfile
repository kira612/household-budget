FROM node:18-alpine

WORKDIR /app

# package.jsonをコピー
COPY package.json ./

# 依存関係をインストール（package-lock.jsonがないのでnpm installを使用）
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
