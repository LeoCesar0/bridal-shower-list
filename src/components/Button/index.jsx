import { Styles } from "./styles";

export const Button = ({
  type = "button",
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <Styles.Button variant={variant}  type={type} {...rest}>
      {children}
    </Styles.Button>
  );
};
