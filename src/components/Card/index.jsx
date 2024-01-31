import { Button } from "../Button";
import { Styles } from "./styles";

export const Card = ({
  productName,
  isAvailable,
  rightActions,
  leftActions,
  ...rest
}) => {

  const statusLabel = isAvailable ? "Disponível" : "Selecionado";

  return (
    <Styles.Card {...rest}>
      <div className="image-container" >
        <img className="image" alt="tea-logo" src="tea.svg" />
      </div>
      <div className="content">
        <div className="texts">
          <span class={
            ["status",
              isAvailable ? "available" : "selected"
            ].join(" ")
          }
          
          >{statusLabel}</span>
          <h3 className="product-name">{productName}</h3>
        </div>
        <div className="actions">
          <div className="left-actions">{rightActions}</div>
          <div className="right-actions">{leftActions}</div>
        </div>
      </div>
    </Styles.Card>
  );
};
