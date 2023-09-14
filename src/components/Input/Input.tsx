import React, { InputHTMLAttributes, ReactElement } from "react";
import "./styles.scss";

interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  name: string;
  text?: string;
  ref?: any;
}

export default function Input(props: InputTypes) {
  return <input {...props} className="input" />;
}
