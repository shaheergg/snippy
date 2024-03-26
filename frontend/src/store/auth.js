import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("snippy-auth-token") || null,
  authenticated: localStorage.getItem("snippy-auth-token") ? true : false,

  login: (token) => {
    localStorage.setItem("snippy-auth-token", token);
    set({ token, authenticated: true });
  },
  logout: () => {
    localStorage.removeItem("snippy-auth-token");
    set({ token: null, authenticated: false });
  },
}));
