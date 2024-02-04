import Image from "next/image";
import { Button } from "../Button";
import { Card } from "../Card";
import { IconButton } from "../IconButton";
import {Styles} from "./styles";
import { updateProductGuestId } from "@/services/supabase-api/product";



export const ProductsList = ({products}) => {



  return (
    <>
      <Styles.List>
        {products.map((product) => {

          return (
            <li key={product.slug}>
              <Card
                product={product}
              />
            </li>
          );
        })}
      </Styles.List>
    </>
  );
};