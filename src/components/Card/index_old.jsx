import Image from "next/image";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Styles } from "./styles";
import { updateProductGuestId } from "@/services/supabase-api/product";
import { useGlobalContext } from "@/provider/GlobalContextProvider";

export const Card = ({
  product,
  ...rest
}) => {
  const { currentUser } = useGlobalContext();

  const isAvailable = !product.guestId;

  const statusLabel = isAvailable ? "disponível" : "selecionado";

  const comment = "Preferência: cor branca";

  const productName = product.name;

  const toggleSelectedProduct = async ({ product }) => {
    if (currentUser) {
      await updateProductGuestId({
        productId: product.id,
        guestId: product.guestId ? null : currentUser.id,
      });
    }
  };

  return (
    <Styles.Card {...rest}>
      <div className="image-container">
        <img className="image" alt="tea-logo" src="tea.svg" />
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
          <h3 className="product-name">{productName}</h3>
        </div>
        <div className="actions">
          <div className="left-actions">
            <>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  toggleSelectedProduct({ product });
                }}
                disabled={!isAvailable}
              >
                Selecionar
              </Button>
            </>
          </div>
          <div className="right-actions">
            <>
              {!isAvailable && product.guestId === currentUser.id && (
                <IconButton
                  width={24}
                  height={24}
                  variant="ghost"
                  onClick={() => {
                    toggleSelectedProduct({ product });
                  }}
                >
                  <Image
                    width={15}
                    height={12}
                    alt="return"
                    src="icons/return.svg"
                  />
                </IconButton>
              )}
            </>
          </div>
        </div>
      </div>
    </Styles.Card>
  );
};
