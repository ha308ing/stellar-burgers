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

# Спринт 4. Шаг 1.

Миграция на typescript

# Спринт 3. Шаг 1.

## Задачи

- настроить роутинг и авторизацию
  - авторизованный пользователь не может открыть: логин, регистрацию, восстановление пароля
  - неавторизованный пользоатель не может открыть страницу профиля и её дочерние страницы
  - страница с восстановлением пароля доступна только при переходе со страницы с запросом почты для кода
  - при клике на ингридиент открывается модальное окно и меняется адрес, при переходе на этот адрес напрямую открывается отдельная страница с ингридиентом
  - если сохранён актуальный токен доступа, восстанавливать доступ без авторизации

## Демо

[![2024-06-18-00-07-22.gif](https://i.postimg.cc/65h1DTKj/2024-06-18-00-07-22.gif)](https://postimg.cc/svvcWjv7)

[Ссылка на гифку](https://postimg.cc/svvcWjv7)

# Спринт 2. Шаг 1.

## Задачи

- использовать redux хранилице
  - получение ингредиентов
  - конструктор бургера
  - отправка заказа
  - активный ингредиент
- использовать drag & drop для перемещения ингридиентов
- активировать заголовок группы ингридиентов при скролле

## Демо

[![2024-06-06-05-01-19.gif](https://i.postimg.cc/C5fqfnCL/2024-06-06-05-01-19.gif)](https://postimg.cc/64t3k31D)

# Спринт 1. Шаг 2.

## Задачи

- переписать компоненты на классах в функциональные
- получать данные ингридиентов через api
- модальные окна
  - информация об ингредиенте (клик по ингридиенту)
  - информация о заказе (клик по кнопке "Оформить заказ")

## Демо

[![2024-05-23-12-12-13.gif](https://i.postimg.cc/sxPYwpsk/2024-05-23-12-12-13.gif)](https://postimg.cc/y3d3N3Jj)

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
