import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 10,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 10,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 12,
});
