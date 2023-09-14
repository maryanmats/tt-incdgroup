import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
interface InputTypes extends ButtonHTMLAttributes<any> {
  title: string;
}

export default function Button(props: InputTypes) {
  return (
    <button className={styles.button} {...props}>
      {props.title}
    </button>
  );
}
