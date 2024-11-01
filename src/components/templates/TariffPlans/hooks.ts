import { Filter, Sort } from "@/constants/Tariffs";
import { Tariff } from "@/types/tariffs";
import { useMemo } from "react";

export const useTariffsFiltered = (
  tariffs: Tariff[],
  sort?: string,
  filter?: string
) => {
  return useMemo(() => {
    let tariffsToRender = tariffs;

    if (filter) {
      tariffsToRender = tariffsToRender.filter((tariff) => {
        switch (filter) {
          case Filter.PRICE_UNDER_300:
            return tariff.price <= 300;
          case Filter.DOWNLOAD_100:
            return tariff.downloadSpeed >= 100;
          case Filter.DOWNLOAD_200:
            return tariff.downloadSpeed >= 200;
          case Filter.UPLOAD_100:
            return tariff.uploadSpeed >= 100;
          case Filter.UPLOAD_50:
            return tariff.uploadSpeed >= 50;
          default:
            return true;
        }
      });
    }

    if (sort) {
      tariffsToRender = tariffsToRender.sort((a, b) => {
        switch (sort) {
          case Sort.PRICE_ASC:
            return a.price - b.price;
          case Sort.PRICE_DESC:
            return b.price - a.price;
          case Sort.UPLOAD_ASC:
            return a.uploadSpeed - b.uploadSpeed;
          case Sort.UPLOAD_DESC:
            return b.uploadSpeed - a.uploadSpeed;
          case Sort.DOWNLOAD_ASC:
            return a.downloadSpeed - b.downloadSpeed;
          case Sort.DOWNLOAD_DESC:
            return b.downloadSpeed - a.downloadSpeed;
          default:
            return 0;
        }
      });
    }

    return tariffsToRender;
  }, [tariffs, sort, filter]);
};
