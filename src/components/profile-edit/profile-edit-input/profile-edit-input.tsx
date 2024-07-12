import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import type { FC, LegacyRef, MutableRefObject } from "react";
import type { TComponentProps } from "types";

interface IProps
  extends Pick<
    TComponentProps<typeof Input>,
    "name" | "placeholder" | "onChange" | "disabled" | "value" | "type"
  > {
  targetRef: MutableRefObject<MutableRefObject<HTMLInputElement> | undefined>;
  toggleDisabled: () => void;
}

export const ProfileEditInput: FC<IProps> = ({
  name,
  placeholder,
  targetRef,
  onChange,
  toggleDisabled,
  disabled = false,
  value = "",
  type = "text",
}) => {
  const ref = useRef<HTMLInputElement>() as LegacyRef<HTMLInputElement>;

  const clickHandler = () => {
    targetRef.current = ref as MutableRefObject<HTMLInputElement>;
    toggleDisabled();
  };

  return (
    <Input
      placeholder={placeholder}
      name={name}
      icon={disabled ? "EditIcon" : undefined}
      disabled={disabled}
      onIconClick={clickHandler}
      ref={ref}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};
