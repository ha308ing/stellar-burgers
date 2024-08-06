export const ingredientsData = [
  {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa093e",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0933",
    name: "Соус 25",
    type: "sauce",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
];

export const ingredientsFormatted = {
  ingredients: {
    [ingredientsData[0]._id]: ingredientsData[0],
    [ingredientsData[1]._id]: ingredientsData[1],
    [ingredientsData[2]._id]: ingredientsData[2],
    [ingredientsData[3]._id]: ingredientsData[3],
  },
  ingredientsIds: ingredientsData.map((ingredient) => ingredient._id),
};

export const ordersData = [
  {
    _id: "66ac4f92119d45001b4fd017",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093e"],
    status: "created",
    name: "Флюоресцентный люминесцентный бургер",
    createdAt: "2024-08-02T03:16:34.961Z",
    updatedAt: "2024-08-02T03:16:35.431Z",
    number: 48112,
  },
  {
    _id: "66ac4f5a119d45001b4fd016",
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093f",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa0940",
    ],
    status: "done",
    name: "Краторный люминесцентный бессмертный био-марсианский метеоритный бургер",
    createdAt: "2024-08-02T03:15:38.912Z",
    updatedAt: "2024-08-02T03:15:39.420Z",
    number: 48111,
  },
  {
    _id: "66ac3dfa119d45001b4fd005",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "pending",
    name: "Флюоресцентный люминесцентный био-марсианский бургер",
    createdAt: "2024-08-02T02:01:30.383Z",
    updatedAt: "2024-08-02T02:01:30.897Z",
    number: 48110,
  },
];

export const ordersNumbers = ordersData.map((order) => order.number);
export const ordersByNumber = ordersData.reduce((acc, order) => {
  let statusLocal;
  switch (order.status) {
    case "pending": {
      statusLocal = "готовится";
      break;
    }
    case "done": {
      statusLocal = "выполнен";
      break;
    }
    case "created": {
      statusLocal = "создан";
      break;
    }
    default:
      statusLocal = "";
  }
  return { ...acc, [order.number]: { ...order, statusLocal } };
}, {});

export const internalId = "nanoid";
export const email = "user@ema.il";
export const name = "username";
export const password = "password";

export const accessToken = "accessToken";
export const refreshToken = "refreshToken";

export const order = { ...ordersData[1], statusLocal: "выполнен" };
export const orderName = order.name;
export const orderNumber = order.number;
