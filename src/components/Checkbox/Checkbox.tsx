import React, { FC, HTMLAttributes } from "react";

//styles
import "./styles.scss";
import clsx from "clsx";

interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked = false, onChange = () => {}, className }) => {
  return (
    <div className={clsx("checkbox__container", className)}>
      <input type="checkbox" checked={checked} onChange={onChange} className="checkbox" />
    </div>
  );
};
