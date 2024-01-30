"use client";
import { CONFIG } from "@/static/config";
import { Styles } from "./styles";


export default function ListPage() {

  return (
    <Styles.Container>
      <header>
        <Styles.HeaderTop >
          <h1>{CONFIG.appTitle}</h1>
          <div class='actions' ></div>
        </ Styles.HeaderTop >
        <Styles.HeaderBottom>
          <Styles.Description>
            {CONFIG.appDescription}
          </Styles.Description>
          <img alt='tea-logo' src='tea.svg' />
        </Styles.HeaderBottom>
      </header>
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
    guestId: null
  },
  {
    id: 2,
    name: "Kitchen Set 2",
    slug: "kitchen-set-2",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null
  },
  {
    id: 3,
    name: "Kitchen Set 3",
    slug: "kitchen-set-3",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null
  },
  {
    id: 4,
    name: "Kitchen Set 4",
    slug: "kitchen-set-4",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null
  },
  {
    id: 5,
    name: "Kitchen Set 5",
    slug: "kitchen-set-5",
    image: "https://picsum.photos/200",
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedBy: null,
    guestId: null
  },
];