# React & Express.js Boilerplate

> **Note:** this project is meant for modern browsers only, thus, it won't work on IE due to some dependecies like MobX v5+. You would need to manually downgrade the version if you need IE support.

## Built-in Support

- [x] React v16+
- [x] React Router v4+
- [x] Jest/Enzyme
- [x] MobX v5+
- [x] Decorators support
- [x] Express.js
- [x] Gzip compression
- [x] Prettier/ESLint

## Installation

Requires Node.js v8+ to run.

> First, fork or clone this project:
>
> `git clone https://github.com/lukaasc/react-express-app.git`

**Install the dependencies and start the server in development.**

```sh
cd react-express-app
yarn install
yarn start
```

**or**

```
cd react-express-app
npm install
npm start
```

**for production environments using PM2...**

> First, install PM2 globally
> `yarn global add pm2`
 > **or**
 > `npm install pm2 -g`

```
cd react-express-app
yarn install
yarn build
yarn start-prod
```

**or**

```
cd react-express-app
npm install
npm run build
npm run start-prod
```

## License

MIT
