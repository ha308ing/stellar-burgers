import { useAppSelector } from "../hooks";
import { selectIsMobile } from "../services/app";
import { ModalMobile } from "../components/modal/modal-mobile";
import { ModalAlert } from "../components/modal";
import type { FC } from "react";

// render alternaive component for isMobile
export const withMobile =
  <T extends {}>(
    Component: React.JSXElementConstructor<T> | React.FC<T>,
    ComponentMobile: React.JSXElementConstructor<T> | React.FC<T>,
  ) =>
  (props: T) => {
    const isMobile = useAppSelector(selectIsMobile);

    return isMobile ? <ComponentMobile {...props} /> : <Component {...props} />;
  };

// mobile and desktop modal with the same component
export const withMobileModal =
  (Element: FC, title?: string): FC<{ closeModalHandler: () => void }> =>
  ({ closeModalHandler }) => {
    const isMobile = useAppSelector(selectIsMobile);

    return isMobile ? (
      <ModalMobile closeModalHandler={closeModalHandler} title={title}>
        <Element />
      </ModalMobile>
    ) : (
      <ModalAlert closeModalHandler={closeModalHandler}>
        <Element />
      </ModalAlert>
    );
  };