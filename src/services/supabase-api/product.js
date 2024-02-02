import { supabase } from "../supabase";

export const listAllProducts = async () => {
  const { data, error } = await supabase.from("Product").select("*");

  if (error) {
    console.error("Error getting products: ", error);
    return [];
  }

  return data || [];
};

export const updateProduct = async ({ productId, values }) => {
  const { data, error } = await supabase
    .from("Product")
    .update({ ...values })
    .eq("id", productId)
    .select()
    .single();

  if (error) {
    console.error("Error update products: ", error);
    return null;
  }

  return data;
};

export const updateProductGuestId = async ({ productId, guestId }) => {
  const { data, error } = await supabase
    .from("Product")
    .update({
      guestId: guestId,
    })
    .eq("id", productId)
    .select()
    .single();

  if (error) {
    console.error("Error updateProductGuestId: ", error);
    return null;
  }

  return data;
};

export const listenToProductsList = (onChange) => {
  supabase
    .channel("Product")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Product" },
      (payload) => {
        onChange(payload?.new || null);
      }
    )
    .subscribe();
};
