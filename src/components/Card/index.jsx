import { Styles } from "./styles";
import { updateProductGuestId } from "@/services/supabase-api/product";
import { useGlobalContext } from "@/provider/GlobalContextProvider";
import { Button } from "../Button";
import Image from "next/image";

export const Card = ({ product, ...rest }) => {
  const { currentUser, setModalProps } = useGlobalContext();

  if (!currentUser) return null;

  const isAvailable = !product.guestId;

  const isMyProduct = product.guestId && product.guestId === currentUser?.id;

  const statusLabel = isAvailable ? "disponível" : "selecionado";

  const disabled = product.guestId && product.guestId !== currentUser.id;

  const comment = product.description || "";

  const productName = product.name;

  const toggleSelectedProduct = async () => {
    if (currentUser && product && !disabled) {
      await updateProductGuestId({
        productId: product.id,
        guestId: product.guestId ? null : currentUser.id,
      });
    }
  };

  const buttonIcon = isMyProduct ? "minus.svg" : "plus.svg";

  const titleSm = productName.length > 14;

  return (
    <Styles.Card {...rest}>
      <div className="image-container">
        <Image
          height={72}
          width={72}
          className="image"
          alt="tea-logo"
          src={product.image}
        />
      </div>
      <div className="content">
        <div className="texts">
          <span
            className={["status", isAvailable ? "available" : "selected"].join(
              " "
            )}
          >
            {statusLabel}
          </span>
          <h3 className={["product-name", titleSm ? "sm" : ""].join(" ")}>
            {productName}
          </h3>
        </div>
        {!disabled && (
          <div className="actions">
            <p className="comment">{comment}</p>
          </div>
        )}
      </div>
      {!disabled && (
        <Styles.ButtonContainer>
          <button
            className="button-inner"
            onClick={() => {
              if (isMyProduct) {
                setModalProps({
                  title: "Desmarcar o produto?",
                  onConfirm: toggleSelectedProduct,
                  isOpen: true,
                });
              } else {
                toggleSelectedProduct();
              }
            }}
            disabled={disabled}
          >
            <img src={`icons/${buttonIcon}`} alt="add or remove" />
          </button>
        </Styles.ButtonContainer>
      )}
      {disabled && <div className="disabled-overlay" />}
    </Styles.Card>
  );
};
