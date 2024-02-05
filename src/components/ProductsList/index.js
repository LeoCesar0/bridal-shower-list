import { Card } from "../Card";
import {Styles} from "./styles";

export const ProductsList = ({products}) => {

  return (
    <>
      <Styles.List>
        {products.map((product) => {

          return (
            <li key={product.id}>
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