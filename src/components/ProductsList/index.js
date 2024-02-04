import Image from "next/image";
import { Button } from "../Button";
import { Card } from "../Card";
import { IconButton } from "../IconButton";
import {Styles} from "./styles";
import { updateProductGuestId } from "@/services/supabase-api/product";



export const ProductsList = ({products, currentUser}) => {

  const toggleSelectedProduct = async ({ product }) => {
    if (currentUser) {
      await updateProductGuestId({
        productId: product.id,
        guestId: product.guestId ? null : currentUser.id,
      });
    }
  };

  return (
    <>
      <Styles.List>
        {products.map((product) => {
          const productIsAvailable = !product.guestId;

          return (
            <li key={product.slug}>
              <Card
                productName={product.name}
                isAvailable={productIsAvailable}
                leftActions={
                  <>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        toggleSelectedProduct({ product });
                      }}
                      disabled={!productIsAvailable}
                    >
                      Selecionar
                    </Button>
                  </>
                }
                rightActions={
                  <>
                    {!productIsAvailable &&
                      product.guestId === currentUser.id && (
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
                }
              />
            </li>
          );
        })}
      </Styles.List>
    </>
  );
};