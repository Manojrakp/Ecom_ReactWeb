import apiClient from "./apiClient";

export const fetchProductDetails = async (productId) => {
  const payload = { productId };
  const response = await apiClient.post("/product/getByproductById", payload);
  console.log(
    " fetchProductDetails Response:",
    JSON.stringify(response.data, null, 2)
  );
  return response.data;
};
