import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { withModal, withOrderValidate } from "hocs";
import { ModalConstructor } from "../modal-constructor/modal-constructor";
import type { FC } from "react";

interface IProps {
  handleClick: () => void;
}

const ButtonShowConstructor: FC<IProps> = ({ handleClick }) => (
  <Button onClick={handleClick} htmlType="button">
    Показать заказ
  </Button>
);

const ButtonShowConstructorWithValidate = withOrderValidate(
  ButtonShowConstructor,
);

export const ButtonModalConstructor = withModal(
  ButtonShowConstructorWithValidate,
  ModalConstructor,
);
