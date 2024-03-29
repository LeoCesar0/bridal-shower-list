export const computeProducts = ({ products = [], currentUser = null }) => {
  const allProducts = [...products];

  allProducts.sort((a, b) => {
    if (!a.guestId && b.guestId) {
      return -1; // a comes first
    } else if (a.guestId && !b.guestId) {
      return 1; // b comes first
    } else {
      // Both have guestId or both don't have guestId, sort alphabetically
      return a.name.localeCompare(b.name);
    }
  });

  const currentGuestProducts = allProducts.filter(
    (product) => currentUser && product.guestId === currentUser.id
  );
  const mainList = allProducts.filter(
    (product) =>
      currentUser && (!product.guestId || product.guestId !== currentUser.id)
  );

  return { currentGuestProducts, mainList };
};
