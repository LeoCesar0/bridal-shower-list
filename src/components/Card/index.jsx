import { Button } from "../Button";
import { Styles } from "./styles";

export const Card = ({
  productName,
  isAvailable,
  rightActions,
  leftActions,
  ...rest
}) => {

  const statusLabel = isAvailable ? "disponível" : "selecionado";

  return (
    <Styles.Card {...rest}>
      <div className="image-container" >
        <img className="image" alt="tea-logo" src="tea.svg" />
      </div>
      <div className="content">
        <div className="texts">
          <span className={
            ["status",
              isAvailable ? "available" : "selected"
            ].join(" ")
          }
          
          >{statusLabel}</span>
          <h3 className="product-name">{productName}</h3>
        </div>
        <div className="actions">
          <div className="left-actions">{leftActions}</div>
          <div className="right-actions">{rightActions}</div>
        </div>
      </div>
    </Styles.Card>
  );
};
