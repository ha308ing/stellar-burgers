import type { FC } from "react";
import { useState } from "react";

// add modal to component
// component must accept handleClick (to show modal)
// modal component must accept closeModalHandler
export const withModal =
  (
    Component: React.FC<{ handleClick: () => void }>,
    ModalComponent: React.FC<{ closeModalHandler?: () => void }>,
  ): FC =>
  () => {
    const [isModal, setIsModal] = useState(false);

    const toggleModal = () => {
      setIsModal(!isModal);
    };

    const handleClick = () => {
      toggleModal();
    };

    return (
      <>
        {isModal && <ModalComponent closeModalHandler={toggleModal} />}
        <Component handleClick={handleClick} />
      </>
    );
  };
