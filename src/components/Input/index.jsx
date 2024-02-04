import React from "react";
import { Styles } from "./styles";

export const Input = React.forwardRef(
  ({ type = "text", label, name, ...rest }, ref) => {
    return (
      <>
        <div>
          {label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
          <Styles.Input ref={ref} name={name} type={type} {...rest} />
        </div>
      </>
    );
  }
);


Input.displayName = "Input";