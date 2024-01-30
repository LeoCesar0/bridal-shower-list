import { Styles } from "./styles";

export const Input = ({ type = "text", label, name, ...rest }) => {
  return (
    <>
      <div>
        {label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
        <Styles.Input name={name} type={type} {...rest} />
      </div>
    </>
  );
};
