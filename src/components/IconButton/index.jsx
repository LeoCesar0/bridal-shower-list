import { Styles } from "./styles";

export const IconButton = ({
  type = "button",
  width = 36,
  height = 36,
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <Styles.Button variant={variant} 
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      type={type} {...rest}>
      {children}
    </Styles.Button>
  );
};
