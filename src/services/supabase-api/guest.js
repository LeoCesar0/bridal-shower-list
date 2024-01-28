import { slugify } from "@/helpers/slugfy";
import { supabase } from "@/services/supabase";

export const getGuestBySlug = async ({slug}) => {
  const { data, error } = await supabase
    .from("Guest")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error getting guest: ", error);
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

  const name = values.name.trim()
  const slug = slugify(values.name);

  const existingGuest = await getGuestBySlug({slug});

  if (existingGuest) {
    return existingGuest;
  }

  const { data, error } = await supabase
    .from("Guest")
    .insert([{ name: name, slug: slugify(name) }]);

  if (error) {
    console.error("Error inserting guest: ", error);
    return null;
  }

  return data;
}
