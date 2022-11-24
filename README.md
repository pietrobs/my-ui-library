# @pietrobs/my-ui-library

Disponível em: [https://www.npmjs.com/package/@pietrobs/my-ui-library](https://www.npmjs.com/package/@pietrobs/my-ui-library)

## Packages utilizados

- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitzen](https://github.com/commitizen/cz-cli)
- [GitActions](https://docs.github.com/en/actions)
- [Rollup](https://rollupjs.org/guide/en/)

## Instalação

```
	git clone https://github.com/pietrobs/my-ui-library.git
```

Para baixar as dependências do projeto:

```
	npm install
```

Para documentação dos componentes, foi adicionado a lib [Storybook](<(https://storybook.js.org/)>) que pode ser acessada através do comando:

```
	npm run storybook
```

O projeto também conta com testes em Jest:

```
	npm run test
```

A publicação para o NPM é feita através de git actions, mas é possível gerar um arquivo .tar.gz local utilizando o comando:

```
	npm run build && npm pack
```

Com o arquivo de build criado, é possível importa-lo para qualquer projeto local utilizando

```
	npm install path/to/file.tar.gz
```
