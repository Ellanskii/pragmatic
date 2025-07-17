# Что-то про P2P

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## I18n
Мы не знаем на данный момент список всех поддерживаемых языков, но совершенно точно будут как LTR, так и RTL. К этому нужно быть готовыми, так что вместо всяких `padding-left` используем `text-indent`.
### Localazy

Для управления переводами используется [localazy](https://localazy.com/). Чтобы скачать актуальные словари или загрузить новые, необходимо создать в корне проекта файл `localazy.json` с приватными ключами и установить `localazy-cli` 

#### Установка `localazy-cli` на MacOS:

    brew tap localazy/tools
    brew install localazy  

После чего выполнить одну из команд

    localazy download
    localazy upload

Язык по умолчанию – английский. остальные переводы руками не пишем, localazy сгенерирует приемлемый машинный перевод для остальных локалей.
