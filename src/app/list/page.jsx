"use client";
import { CONFIG } from "@/static/config";
import { Styles } from "./styles";
import { IconButton } from "@/components/IconButton";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { useGlobalContext } from "@/provider/GlobalContextProvider";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  listAllProducts,
  listenToProductsList,
  updateProductGuestId,
} from "@/services/supabase-api/product";
import Link from "next/link";
import { computeProducts } from "./computeProducts";
import { ProductsList } from "@/components/ProductsList";

export default function ListPage() {
  const { currentUser, logOut } = useGlobalContext();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const productsRef = useRef(products);

  const currentUserSlug = currentUser?.slug;

  const onProductChange = (newProduct) => {
    if (!newProduct) return;
    let productsList = productsRef.current || [];
    productsList = [...productsList];
    const productIndex = productsList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (productIndex === -1) return;
    productsList.splice(productIndex, 1, newProduct);
    setProducts([...productsList]);
  };

  useEffect(() => {
    if (!currentUserSlug) {
      router.push("/");
    }
  }, [currentUserSlug]);

  useEffect(() => {
    let listener;
    listAllProducts().then((data) => {
      setProducts(data || []);
      listener = listenToProductsList(onProductChange);
    });

    return () => {
      if (listener) {
        listener.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    productsRef.current = products;
  }, [products]);

  const { currentGuestProducts, productsAvailable } = useMemo(() => {
    return computeProducts({
      products,
      currentUser,
    });
  }, [products]);

  if (!currentUser) return null;

  const guestName = currentUser.name.split(" ")[0];

  const wppLinkText = `Chá de Casa Nova - Izaelle e Leonardo - Lista de Presentes: ${CONFIG.appUrl}`;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.HeaderTop>
          <Styles.Title>
            <span className="hello">Olá, </span>
            {guestName}
          </Styles.Title>
          <div className="actions">
            <IconButton>
              <Image
                width={18}
                height={18}
                alt="search"
                src="icons/search.svg"
              />
            </IconButton>
            <Link
              href={`https://api.whatsapp.com/send?text=${wppLinkText}`}
              target="_blank"
            >
              <IconButton>
                <Image
                  width={18}
                  height={18}
                  alt="share"
                  src="icons/share.svg"
                />
              </IconButton>
            </Link>
            <IconButton
              onClick={() => {
                logOut();
              }}
            >
              <Image
                width={18}
                height={18}
                alt="logout"
                src="icons/logout.svg"
              />
            </IconButton>
          </div>
        </Styles.HeaderTop>
        <Styles.HeaderBottom>
          <Styles.Description>{CONFIG.appDescription}</Styles.Description>
          <img alt="tea-logo" src="tea.svg" />
        </Styles.HeaderBottom>
      </Styles.Header>
      <main>
        {currentGuestProducts.length > 0 && (
          <Styles.MiddleSection>
            <Styles.Subtitle>Seus presentes</Styles.Subtitle>
            <ProductsList
              currentUser={currentUser}
              products={currentGuestProducts}
            />
          </Styles.MiddleSection>
        )}
        <Styles.Divider />
        <ProductsList currentUser={currentUser} products={productsAvailable} />
      </main>
    </Styles.Container>
  );
}
