"use client";
import { CONFIG } from "@/static/config";
import { Styles } from "./styles";
import { IconButton } from "@/components/IconButton";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function ListPage() {
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
        {mockProducts.map((product) => (
          <li key={product.id}>
            <Card
              productName={product.name}
              isAvailable={true}
              leftActions={
                <>
                  <Button
                    size="sm"
                    variant="secondary"
                  >Selecionar</Button>
                </>
              }
              rightActions={
                <>
                  <IconButton width={24} height={24}
                    variant="ghost"
                  >
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

const mockProducts = [
  {
    id: 1,
    name: "Kitchen Set 1",
    slug: "kitchen-set-1",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null,
  },
  {
    id: 2,
    name: "Kitchen Set 2",
    slug: "kitchen-set-2",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null,
  },
  {
    id: 3,
    name: "Kitchen Set 3",
    slug: "kitchen-set-3",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null,
  },
  {
    id: 4,
    name: "Kitchen Set 4",
    slug: "kitchen-set-4",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null,
  },
  {
    id: 5,
    name: "Kitchen Set 5",
    slug: "kitchen-set-5",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null,
  },
];
