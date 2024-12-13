import { selector } from "recoil";
import { jobsAtom, networkAtom, notificationAtom } from "./Atoms.jsx";

export const Count = selector({
  key: "Count",
  get: ({ get }) => {
    const c = get(networkAtom);

    return c + 1;
  },
});
