import { create } from "zustand";
import { fetchPreloginHome } from "../api/PreloginHomeService";

export const usePreLoginHomeStore = create((set) => ({
  response: [],
  loading: false,
  homeAds: [],
  error: null,

  getPreloginHome: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchPreloginHome();
      set({
        response: data,
        homeAds: data.adsList || [],
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
