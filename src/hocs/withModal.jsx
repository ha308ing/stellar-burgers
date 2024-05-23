import { useState } from "react";

export const withModal = (Component, ModalComponent) => (props) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const handleClick = () => {
    if (props.handleClick) props.handleClick();
    toggleModal();
  };

  return (
    <>
      {isModal && <ModalComponent {...props} closeModalHandler={toggleModal} />}
      <Component {...props} handleClick={handleClick} />
    </>
  );
};
