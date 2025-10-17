import { create } from "zustand";
import { fetchPreloginHome } from "../api/PreloginHomeService";

export const usePreLoginHomeStore = create((set) => ({
  response: [],
  loading: false,
  homeAds: [],
  products: [],
  error: null,

  getPreloginHome: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPreloginHome();
      set({
        response: data,
        homeAds: data.adsList || [],
        loading: false,
        products: data.products || [],
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
