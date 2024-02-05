import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create 5 products with unique slugs and optional images
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Kit de Copos",
        description: "Copos de vidro",
        image:
          "https://i.pinimg.com/736x/37/17/3d/37173d55d75f9a028a41428fd385c91f.jpg",
      },
      {
        name: "Conjunto de Pratos",
        description: "Preferência: cor branca",
        image:
          "https://i.pinimg.com/564x/2c/c9/52/2cc9525256f59b18c5f37bdace6fe5e4.jpg",
      },
      {
        name: "Utensílios de Cozinha",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/f1/bb/23/f1bb23a8e8075575299b0fa24f37b6c8.jpg",
      },
      {
        name: "Talheres",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/53/fd/43/53fd4338b67fec116199dbf9f11eec0b.jpg",
      },
      {
        name: "Escorredor de Prato",
        description: "Preferência: cor preto ou cromado",
        image:
          "https://i.pinimg.com/564x/26/bf/f6/26bff6f5da18f7b16c30fa16ca828178.jpg",
      },
      {
        name: "Gaveteiro Talheres",
        description: "",
        image:
          "https://i.pinimg.com/564x/2d/0f/fa/2d0ffae64aab4d22e535dca9ec487e05.jpg",
      },
      {
        name: "Kit de Taças",
        description: "",
        image:
          "https://i.pinimg.com/564x/c7/08/c2/c708c2cebdba8279f5a41a6899cd1a84.jpg",
      },
      {
        name: "Conjunto Potes",
        description: "Preferência: transparente",
        image:
          "https://i.pinimg.com/564x/1b/98/d8/1b98d8c19ea1822aa105c1a0430a73c0.jpg",
      },
      {
        name: "Conjunto Potes Temperos",
        description: "Preferência: tampa preta",
        image:
          "https://i.pinimg.com/564x/f2/03/a7/f203a7ef541d17e18b3f157cb87b94ac.jpg",
      },
      {
        name: "Bowls",
        description: "Preferência: branco ou preto porcelana",
        image:
          "https://i.pinimg.com/564x/b4/88/fa/b488fae26aab02bc24eba7d41d354e72.jpg",
      },
      {
        name: "Jarra de Suco",
        description: "Preferência: vidro",
        image:
          "https://i.pinimg.com/736x/cd/f5/0f/cdf50f36dde5ae5a89c144c7380ee53a.jpg",
      },
      {
        name: "Panela de Pressão",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/736x/07/d1/7e/07d17ebc7b908bfe885cdcf64c653a63.jpg",
      },
      {
        name: "Fervedor",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/76/03/f2/7603f28b85bd7bde777c02892b582265.jpg",
      },
      {
        name: "Conjunto Frigideiras",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/ba/45/a1/ba45a1bbc4bea5de4b4441cf9421ecc0.jpg",
      },
      {
        name: "Peneira",
        description: "",
        image:
          "https://i.pinimg.com/564x/14/95/84/1495842abfb04509e302b29bd2af71d9.jpg",
      },
      {
        name: "Cuscuzeira",
        description: "Grande ou pequena",
        image:
          "https://i.pinimg.com/564x/a9/aa/8b/a9aa8b364549c3c2763f7076d7c4b810.jpg",
      },
      {
        name: "Tábua de Carne",
        description: "Preferência: madeira",
        image:
          "https://i.pinimg.com/736x/d8/52/53/d8525390b6f48420cc22c9df92a8034a.jpg",
      },
      {
        name: "Tábua de Legumes",
        description: "Preferência: plástico",
        image:
          "https://i.pinimg.com/736x/fb/e5/bb/fbe5bbcd9ee36de95cd26397aeac58ea.jpg",
      },
      {
        name: "Pipoqueira",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/2b/63/06/2b6306c6933616e064a8bff24b232bd8.jpg",
      },
      {
        name: "Panos de Prato",
        description: "",
        image:
          "https://i.pinimg.com/564x/da/bd/0d/dabd0da3a4995d44a171b7096d801a03.jpg",
      },
      {
        name: "Tapete de Cozinha",
        description: "",
        image:
          "https://i.pinimg.com/564x/8b/57/40/8b57402beb2c98bbc1ca49edb4d012db.jpg",
      },
      {
        name: "Tapete de Banheiro",
        description: "",
        image:
          "https://i.pinimg.com/564x/5b/97/fb/5b97fb1283f8b2389414d28e5e22e3d9.jpg",
      },
      {
        name: "Abridor de Vinho",
        description: "",
        image:
          "https://i.pinimg.com/736x/0e/19/c7/0e19c7e0b0414aef369b8ae92e6de0eb.jpg",
      },
      {
        name: "Varal Portátil",
        description: "",
        image:
          "https://i.pinimg.com/564x/1a/11/5b/1a115becd183ad8df2445cdec17f4c95.jpg",
      },
      {
        name: "Processador de Alimentos",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/c3/5a/3f/c35a3f52f207cebb9a51a21dc436e70f.jpg",
      },
      {
        name: "Lixeira Cozinha/Banheiro",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/736x/f1/3d/0a/f13d0aa584142c67cf8f4569829ac302.jpg",
      },
      {
        name: "Jogo de Facas",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/a1/1d/a1/a11da17bd5e58b6d5a2f6ec5a5973112.jpg",
      },
      {
        name: "Fruteira",
        description: "Preferência: cor preto",
        image:
          "https://i.pinimg.com/564x/8e/de/43/8ede43ac522c8350b3cfa2e2dc708de6.jpg",
      },
      {
        name: "Mop",
        description: "",
        image:
          "https://i.pinimg.com/564x/78/c8/75/78c875b0f54db9dc5e25e05b49fef601.jpg",
      },
      {
        name: "Liquidificador",
        description: "",
        image:
          "https://i.pinimg.com/564x/21/45/61/2145610989f38a8c4293222ff1901abc.jpg",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log("error", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
