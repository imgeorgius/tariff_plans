import { renderHook } from "@testing-library/react";
import { useTariffsFiltered } from "./hooks";
import { expect } from "vitest";
import { tariffs } from "@/data/tariffs";
import { Filter, Sort } from "@/constants/Tariffs";

describe("useTariffsFiltered", () => {
  it("should return original items", () => {
    const { result } = renderHook(() => useTariffsFiltered(tariffs));
    expect(result.current).toEqual(tariffs);
  });

  it("should sort items by price ascending", () => {
    const { result } = renderHook(() =>
      useTariffsFiltered(tariffs, Sort.PRICE_ASC)
    );

    const tariffsSortedByPriceAsc = tariffs.sort((a, b) => a.price - b.price);

    expect(result.current).toEqual(tariffsSortedByPriceAsc);
  });

  it("should sort items by download speed descending", () => {
    const { result } = renderHook(() =>
      useTariffsFiltered(tariffs, Sort.DOWNLOAD_DESC)
    );

    const tariffsSortedByDownloadSpeedDesc = tariffs.sort(
      (a, b) => b.downloadSpeed - a.downloadSpeed
    );

    expect(result.current).toEqual(tariffsSortedByDownloadSpeedDesc);
  });

  it("should filter items by price under 300", () => {
    const { result } = renderHook(() =>
      useTariffsFiltered(tariffs, "", Filter.PRICE_UNDER_300)
    );

    const tariffsFilteredByPriceUnder300 = tariffs.filter(
      (tariff) => tariff.price <= 300
    );

    expect(result.current).toEqual(tariffsFilteredByPriceUnder300);
  });

  it("should filter items by price under 300", () => {
    const { result } = renderHook(() =>
      useTariffsFiltered(tariffs, "", Filter.PRICE_UNDER_300)
    );

    const tariffsFilteredByPriceUnder300 = tariffs.filter(
      (tariff) => tariff.price <= 300
    );

    expect(result.current).toEqual(tariffsFilteredByPriceUnder300);
  });

  it("should filter items by download speed >= 100 and sort by price descending", () => {
    const { result } = renderHook(() =>
      useTariffsFiltered(tariffs, Sort.PRICE_DESC, Filter.DOWNLOAD_100)
    );

    const tariffsFilteredAndSorted = tariffs
      .filter((tariff) => tariff.downloadSpeed >= 100)
      .sort((a, b) => b.price - a.price);

    expect(result.current).toEqual(tariffsFilteredAndSorted);
  });
});
