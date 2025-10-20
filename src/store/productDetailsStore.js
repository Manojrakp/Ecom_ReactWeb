import { create } from "zustand";

import { fetchProductDetails } from "../api/productDetailsService";

export const useProductDetailsStore = create((set) => ({
  productID_Details: [],
  isLoading: false,
  error: null,
  getProductDetails: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      const data = await fetchProductDetails(productId);
      set({ productID_Details: data, isLoading: false });
      return data;
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  clearProductDetails: () => set({ productID_Details: [] }),
}));
