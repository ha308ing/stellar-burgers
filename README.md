# Stellar Burgers [![Netlify Status](https://api.netlify.com/api/v1/badges/0cdc7d13-db54-4edd-90fc-0d9a85ec95ff/deploy-status)](https://app.netlify.com/sites/starlit-wisp-9e886a/deploys)

React-приложение бургерной, с конструктором бургеров и лентой заказов.

[макет](https://www.figma.com/design/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link?node-id=724-350&t=c3Vtvd1QyrQQygCF-4)

# Скрипты

_Стандартные CRA_:

- `npm start` - dev-сервер
- `npm run build` - сборка в директорию `build`

<br>

_линтеры, форматтеры_:

- `npm run eslint`
- `npm run stylelint`
- `npm run prettier`
- `npm run lint` - все параллельно с [npm-run-all](https://www.npmjs.com/package/npm-run-all)

# Спринт 1. Шаг 1.

## Задачи

- инициализация проекта
- сверстать основные компоненты главного экрана (конструктора бургеров)
  - `AppHeader`
    ![](https://pictures.s3.yandex.net/resources/Untitled_1618657736.png)
  - `BurgerIngredients`
    ![](https://pictures.s3.yandex.net/resources/12Untitled_1618657778.png)
  - `BurgerConstructor`
    ![](https://pictures.s3.yandex.net/resources/Untitled_1618657801.png)

# Что используется

- create-react-app (css-modules, eslint) (`npx create-react-app stellar-burgers --template typescript`)
- [ui библиотека](https://yandex-practicum.github.io/react-developer-burger-ui-components/docs/)
- [sass](https://www.npmjs.com/package/sass)
- [prettier](https://www.npmjs.com/package/prettier) ([eslint-config](https://www.npmjs.com/package/eslint-config-prettier))
- [stylelint](https://www.npmjs.com/package/stylelint) (конфиги: [sass](stylelint-config-standard-scss), [idiomatic-order](stylelint-config-idiomatic-order), [css-modules](stylelint-config-css-modules))
- [lefthook](https://www.npmjs.com/package/lefthook) (pre-commit, commit-msg)
- [commitlint](https://www.npmjs.com/package/@commitlint/cli) (conventional commit [specs](https://www.conventionalcommits.org/), [config](https://www.npmjs.com/package/@commitlint/config-conventional))
