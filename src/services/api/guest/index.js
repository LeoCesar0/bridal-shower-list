import { slugify } from "@/helpers/slugfy";
import { prisma } from "@/services/prisma";

export async function getGuestBySlug(slug) {
  return await prisma.guest.findUnique({ where: { slug } });
}

export async function createGuest(data) {
  if (!data || !data.name) {
    return {
      message: "Informe seu nome",
    };
  }

  const slug = slugify(data.name);

  const existingGuest = await getGuestBySlug(slug)

  if (existingGuest) {
    return existingGuest;
  }

  return await prisma.guest.create({
    data: {
      ...data,
      slug,
    },
  });
}

export async function getGuestById(id) {
  return await prisma.guest.findUnique({ where: { id } });
}

export async function getAllGuests() {
  return await prisma.guest.findMany();
}


export async function updateGuest(id, data) {
  return await prisma.guest.update({ where: { id }, data });
}

export async function deleteGuest(id) {
  return await prisma.guest.delete({ where: { id } });
}
