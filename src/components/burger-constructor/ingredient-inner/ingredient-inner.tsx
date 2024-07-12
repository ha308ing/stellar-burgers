import { useAppDispatch } from "../../../hooks";
import styles from "../burger-constructor.module.scss";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import {
  ConstructorElement as Element,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerConstructorActions } from "../../../services/burger-constructor";
import { DRAG_TYPES } from "../../../utils/drag-types";
import { ConstructorElementMobile as ElementMobile } from "../constructor-element-mobile/constructor-element-mobile";
import { withMobile } from "../../../hocs/with-mobile";
import type { FC } from "react";
import type { IConstructorIngredient } from "../../../services/burger-constructor/initial-state";
import type { TComponentProps } from "../../../types";

const ConstructorElement = withMobile<TComponentProps<typeof Element>>(
  Element,
  ElementMobile,
);

interface IProps {
  ingredient: IConstructorIngredient;
  index: number;
}

interface IDragObject {
  index: number;
}

export const IngredientInner: FC<IProps> = ({ ingredient, index }) => {
  const { internalId, price, name, image } = ingredient;
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [, dropRef] = useDrop<IDragObject>({
    accept: DRAG_TYPES.INNER_INGREDIENT,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset() ?? { y: 0 };
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      dispatch(
        burgerConstructorActions.reorderIngredients({ dragIndex, hoverIndex }),
      );
      item.index = hoverIndex;
    },
  });

  const [, dragRef] = useDrag<IDragObject>({
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
