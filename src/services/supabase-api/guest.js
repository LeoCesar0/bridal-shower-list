import { slugfy } from "@/helpers/slugfy";
import { supabase } from "@/services/supabase";
import { v4 as uuidv4 } from "uuid";

export const getGuestBySlug = async ({ slug }) => {
  const { data, error } = await supabase
    .from("Guest")
    .select("*, Product (*)")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
};

export async function createGuest(values) {
  if (!values || !values.name) {
    return {
      message: "Informe seu nome",
    };
  }

  const name = values.name.trim();
  const slug = slugfy(values.name);

  const existingGuest = await getGuestBySlug({ slug });

  if (existingGuest) {
    return existingGuest;
  }

  const id = uuidv4();

  const { data, error } = await supabase
    .from("Guest")
    .insert([{ name: name, slug: slugfy(name), id: id }])
    .select()
    .single();

  if (error) {
    console.error("Error inserting guest: ", error);
    return null;
  }

  return data;
}
