import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import PropTypes from "prop-types";

export const ProfileEditInput = ({
  name,
  placeholder,
  targetRef,
  onChange,
  toggleDisabled,
  disabled = false,
  value = "",
  type = "text",
}) => {
  const ref = useRef();

  const clickHandler = () => {
    targetRef.current = ref;
    toggleDisabled();
  };

  return (
    <Input
      placeholder={placeholder}
      name={name}
      icon={disabled && "EditIcon"}
      disabled={disabled}
      onIconClick={clickHandler}
      ref={ref}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

ProfileEditInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  targetRef: PropTypes.shape({
    current: PropTypes.shape({ current: PropTypes.object.isRequired }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  toggleDisabled: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.oneOf(["email", "password", "text"]),
};
