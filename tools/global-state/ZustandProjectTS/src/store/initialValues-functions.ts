import { create } from "zustand";
import { State } from "./states/state";
import { Action } from "./actions/action";

export const globalState = create<State & Action>((set) => ({
  // initial values
  auth: false,
  currentUser: { email: "", password: "" },

  // setter functions
  setAuth: (value) => set(() => ({ auth: value })),
  setCurrentUser: (value) => set(() => ({ currentUser: {...value} })),

  // clear functions
  clearAuth: () => set({ auth: false }),
  clearCurrentUser: () => set({ currentUser: { email: "", password: "" } }),
}));
