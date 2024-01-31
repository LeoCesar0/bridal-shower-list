import { Styles } from "./styles";

export const IconButton = ({
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
