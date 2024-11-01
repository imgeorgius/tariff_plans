import { tariffs } from "@/data/tariffs";
import { Tariff } from "@/types/tariffs";

export const fetchTariffs: () => Promise<Tariff[]> = () => {
  return new Promise((resolve, reject) => {
    // FAKE
    const isError = Math.random() < 0.1;

    setTimeout(() => {
      if (isError) {
        reject();
      } else {
        resolve(tariffs);
      }
    }, 1000);
  });
};
