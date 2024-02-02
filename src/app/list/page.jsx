"use client";
import { CONFIG } from "@/static/config";
import { Styles } from "./styles";
import { IconButton } from "@/components/IconButton";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { useGlobalContext } from "@/provider/GlobalContextProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  listAllProducts,
  updateProductGuestId,
} from "@/services/supabase-api/product";

export default function ListPage() {
  const { currentUser } = useGlobalContext();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const currentUserSlug = currentUser?.slug;

  useEffect(() => {
    if (!currentUserSlug) {
      router.push("/");
    }
  }, [currentUserSlug]);

  useEffect(() => {
    listAllProducts().then((data) => {
      setProducts(data || []);
    });
  }, []);

  const onSelectProduct = async ({ product }) => {
    if (currentUser) {
      await updateProductGuestId({
        productId: product.id,
        guestId: product.guestId ? null : currentUser.id,
      });
    }
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.HeaderTop>
          <Styles.Title>{CONFIG.appTitle}</Styles.Title>
          <div className="actions">
            <IconButton>
              <Image
                width={18}
                height={18}
                alt="search"
                src="icons/search.svg"
              />
            </IconButton>
            <IconButton>
              <Image width={18} height={18} alt="share" src="icons/share.svg" />
            </IconButton>
            <IconButton>
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
      <Styles.Divider />
      <Styles.List>
        {products.map((product) => (
          <li key={product.slug}>
            <Card
              productName={product.name}
              isAvailable={true}
              leftActions={
                <>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      onSelectProduct({ product });
                    }}
                  >
                    Selecionar
                  </Button>
                </>
              }
              rightActions={
                <>
                  <IconButton width={24} height={24} variant="ghost">
                    <Image
                      width={15}
                      height={12}
                      alt="return"
                      src="icons/return.svg"
                    />
                  </IconButton>
                </>
              }
            />
          </li>
        ))}
      </Styles.List>
    </Styles.Container>
  );
}
