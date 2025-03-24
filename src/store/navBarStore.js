import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  isSticky: false, // Estado para saber si el navbar debe ser fijo
  setSticky: (value) => set({ isSticky: value }),
}));
