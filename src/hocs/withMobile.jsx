import { useSelector } from "react-redux";
import { selectIsMobile } from "../services/app";
import { ModalMobile } from "../components/modal/modal-mobile";
import { ModalAlert } from "../components/modal";

export const withMobile = (Component, ComponentMobile) => (props) => {
  const isMobile = useSelector(selectIsMobile);

  return isMobile ? <ComponentMobile {...props} /> : <Component {...props} />;
};

export const withMobileModal =
  (Element, title) =>
  ({ closeModalHandler, ...props }) => {
    const isMobile = useSelector(selectIsMobile);

    return isMobile ? (
      <ModalMobile closeModalHandler={closeModalHandler} title={title}>
        <Element {...props} />
      </ModalMobile>
    ) : (
      <ModalAlert closeModalHandler={closeModalHandler}>
        <Element {...props} />
      </ModalAlert>
    );
  };
