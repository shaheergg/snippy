import { create } from "zustand";
import { toast } from "sonner";
import { PISTON_API_URL } from "@/constants";
export const usePistonStore = create((set) => ({
  runtimes: [],
  getRuntimes: async () => {
    try {
      const res = await fetch(`${PISTON_API_URL}/runtimes`);
      const runtimes = await res.json();
      if (!res.ok)
        throw new Error(runtimes.message || "Failed to fetch runtimes");
      set({ runtimes });
    } catch (error) {
      toast.error("Failed to fetch runtimes");
    }
  },
}));
