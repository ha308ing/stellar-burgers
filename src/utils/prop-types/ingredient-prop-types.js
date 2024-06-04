import PropTypes from "prop-types";

export const ingredientType = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
};

export const ingredientWithQtyType = {
  ...ingredientType,
  qty: PropTypes.number,
  groupName: PropTypes.string.isRequired,
};

export const ingredientShape = PropTypes.shape(ingredientType);
export const ingredientWithQtyShape = PropTypes.shape(ingredientWithQtyType);
