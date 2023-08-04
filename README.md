# 🥞 Pancake Frontend

<p align="center">
  <a href="https://pancakeswap.finance">
      <img src="https://pancakeswap.finance/logo.png" height="128">
  </a>
</p>

This project contains the main features of the pancake application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## Documentation

- [Info](doc/Info.md)
- [Cypress tests](doc/Cypress.md)

> Install dependencies using [pnpm](https://pnpm.io)

## `apps/web`
<details>
<summary>
How to start
</summary>

```sh
pnpm i
```

start the development server
```sh
pnpm dev
```

build with production mode
```sh
pnpm build

# start the application after build
pnpm start
```

**Vercel Settings**
- Build & Development Settings:
  - Framework Preset: `Next.js`
  - Build Command: Override -> `cd ../ && pnpm build`
  - Install Command: Override -> `cd ../ && pnpm install`
- Root Directory: `apps/web`

</details>


## Packages

| Package                                                       | Description                                                                                                            |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [sdk](/packages/swap-sdk)                                     | An SDK for building applications on top of Pancakeswap                                                                 |
| [swap-sdk-core](/packages/swap-sdk-core)                      | Swap SDK Shared code                                                                                                   |
| [wagmi](/packages/wagmi)                                      | Extension for [wagmi](https://github.com/wagmi-dev/wagmi), including bsc chain and binance wallet connector            |


