import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create 5 products with unique slugs and optional images
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Elegant Dress",
        slug: "elegant-dress",
        image: "https://example.com/images/elegant-dress.jpg",
      },
      {
        name: "Glamorous Shoes",
        slug: "glamorous-shoes",
        image: "https://example.com/images/glamorous-shoes.jpg",
      },
      {
        name: "Chic Handbag",
        slug: "chic-handbag",
        image: "https://example.com/images/chic-handbag.jpg",
      },
      {
        name: "Stylish Jewelry",
        slug: "stylish-jewelry",
        image: "https://example.com/images/stylish-jewelry.jpg",
      },
      {
        name: "Luxurious Accessories",
        slug: "luxurious-accessories",
        image: "https://example.com/images/luxurious-accessories.jpg",
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