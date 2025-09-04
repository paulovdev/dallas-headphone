import { create } from "zustand";

export const useReserveStore = create((set) => ({
  reserve: false,
  reserveOpen: () => set({ reserve: true }),
  reserveClose: () => set({ reserve: false }),
}));
