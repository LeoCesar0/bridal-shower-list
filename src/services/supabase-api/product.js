import { supabase } from "../supabase";

export const listAllProducts = async () => {
  const { data, error } = supabase.from("products").select("*");

  if (error) {
    console.error("Error getting products: ", error);
    return [];
  }

  return data;
};
