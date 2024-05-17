import PropTypes from "prop-types";

export const ingredientWithQty = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
  qty: PropTypes.number,
  groupName: PropTypes.string,
};

export const ingredientWithQtyShape = PropTypes.shape(ingredientWithQty);
