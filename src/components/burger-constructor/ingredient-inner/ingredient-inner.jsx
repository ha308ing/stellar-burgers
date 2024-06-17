import { useDispatch } from "react-redux";
import styles from "../burger-constructor.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerConstructorActions } from "../../../services/burger-constructor";
import { DRAG_TYPES } from "../../../utils/drag-types";
import PropTypes from "prop-types";

export const IngredientInner = ({ ingredient, index }) => {
  const { internalId, price, name, image } = ingredient;
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: DRAG_TYPES.INNER_INGREDIENT,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      dispatch(
        burgerConstructorActions.reorderIngredients({ dragIndex, hoverIndex }),
      );
      item.index = hoverIndex;
    },
  });

  const [, dragRef] = useDrag({
    type: DRAG_TYPES.INNER_INGREDIENT,
    item: () => ({
      index,
    }),
  });

  dropRef(dragRef(ref));

  return (
    <div className={styles.ingredient} ref={ref} draggable>
      <DragIcon type="primary" />
      <ConstructorElement
        price={price}
        text={name}
        thumbnail={image}
        isLocked={false}
        handleClose={() =>
          dispatch(burgerConstructorActions.removeIngredient(internalId))
        }
      />
    </div>
  );
};

IngredientInner.propTypes = {
  ingredient: PropTypes.shape({
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
  }).isRequired,
  index: PropTypes.number.isRequired,
};
