# Stellar Burgers [![Netlify Deploy](https://api.netlify.com/api/v1/badges/0cdc7d13-db54-4edd-90fc-0d9a85ec95ff/deploy-status?branch=master)](https://stellar-burgers-ha308ing.netlify.app/)

React-приложение бургерной, с конструктором бургеров и лентой заказов.

[макет](https://www.figma.com/design/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link?node-id=724-350&t=c3Vtvd1QyrQQygCF-4)

# Деплой

- [netlify](https://stellar-burgers-ha308ing.netlify.app/)
- _docker образ_:
  - скачать / обновить образ:  
    `docker pull ghcr.io/ha308ing/stellar-burgers:latest`
  - запустить  
    `docker run --rm -p 80:80 ghcr.io/ha308ing/stellar-burgers:latest`

# Скрипты

- `npm start` - dev-сервер
- `npm run build` - сборка в директорию `build`
- `npm run start:build` - сервер продуктовой сборки

<br>

_тесты_:

- `npm run test` - тестирование хранилища, api
  - `npm run test:watch` - запустить тесты в watch-режиме
  - `npm run test:coverage` - с отображением покрытия
  - `npm run test:verbose` - с подробным логом
- `npm run test:ui` - тестирование ui (параллельно запускает dev-сервер приложения и cypress, нужно убедиться, что приложение запущено)
  - `npm run cypress:build` - тестирование продуктовой сборки приложения (параллельно запускает сервер папки _build_ и cypress)
  - `npm run cypress:run` - тестирование без интерфейса cypress (предварительно нужно запустить приложение)

<br>

_линтеры, форматтеры_:

- `npm run lint` - запустить все линтеры параллельно
  - `npm run eslint`
  - `npm run stylelint`
  - `npm run prettier`

# Спринт 6. Тестирование и деплой

## Задачи

- тестирование хранилища
  - экшены, изменение состояния слайсов
- тестирование ui
  - сборка и оформление заказа
  - взаимодействие с модальными окнами
- тестирование контроллера api
- деплой: [netlify](https://stellar-burgers-ha308ing.netlify.app/)
  - github action для сборки docker образа [packages](https://github.com/ha308ing/stellar-burgers/pkgs/container/stellar-burgers)

# Спринт 5. Лента заказов

## Задачи

- добавить ленту заказов и историю заказов пользователя
  - получать данные через WebSocket
  - обновлять слайсы с лентой и историей с помощью middleware для redux хранилища
  - информация о заказе в модальном окне при навигации из приложения, на отдельной странице при навигации извне

## Демо

[![Animation.gif](https://i.postimg.cc/cLmGLBt4/Animation.gif)](https://postimg.cc/CRzQvD4W)

[Ссылка на гифку](https://postimg.cc/CRzQvD4W)

# Спринт 4. Typescript

Миграция на typescript

# Спринт 3. Роутинг и авторизация

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

# Спринт 2. Redux хранилище и drag & drop

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

# Спринт 1. Шаг 2. Функциональные компонентыи модальные окна

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

- [create-react-app](https://create-react-app.dev/) (css-modules, [eslint](https://typescript-eslint.io/)) (`npx create-react-app stellar-burgers --template typescript`)
- [ui библиотека](https://yandex-practicum.github.io/react-developer-burger-ui-components/docs/)
- [sass](https://www.npmjs.com/package/sass)
- [prettier](https://www.npmjs.com/package/prettier) ([eslint-config](https://www.npmjs.com/package/eslint-config-prettier))
- [stylelint](https://www.npmjs.com/package/stylelint) (конфиги: [sass](stylelint-config-standard-scss), [idiomatic-order](stylelint-config-idiomatic-order), [css-modules](stylelint-config-css-modules))
- [lefthook](https://www.npmjs.com/package/lefthook) (pre-commit, commit-msg)
- [commitlint](https://www.npmjs.com/package/@commitlint/cli) (conventional commit [specs](https://www.conventionalcommits.org/), [config](https://www.npmjs.com/package/@commitlint/config-conventional))
- [redux toolkit](https://redux-toolkit.js.org/)
- [jest](https://jestjs.io/)
- [cypress](https://www.cypress.io/)
- utils:
  - [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run scripts
  - [serve](https://www.npmjs.com/package/serve) to start server from dir
  - [cross-env](https://www.npmjs.com/package/cross-env) to set env for scripts
