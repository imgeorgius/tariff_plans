import { Tariff } from "@/types/tariffs";

export const tariffs: Tariff[] = [
  {
    id: 1,
    name: "Tariff Name",
    downloadSpeed: 16,
    uploadSpeed: 8,
    price: 123.45,
    benefits: [
      { id: 1, name: "Tariff Benefit 1" },
      { id: 2, name: "Tariff Benefit 2" },
      { id: 3, name: "Tariff Benefit 3" },
      { id: 4, name: "Tariff Benefit 4" },
    ],
  },
  {
    id: 2,
    name: "Tariff Name",
    downloadSpeed: 50,
    uploadSpeed: 25,
    price: 234.51,
    benefits: [
      { id: 1, name: "Tariff Benefit 1" },
      { id: 2, name: "Tariff Benefit 2" },
      { id: 3, name: "Tariff Benefit 3" },
      { id: 4, name: "Tariff Benefit 4" },
    ],
  },
  {
    id: 3,
    name: "Tariff Name",
    downloadSpeed: 100,
    uploadSpeed: 50,
    price: 345.12,
    benefits: [{ id: 1, name: "Tariff Benefit 1" }],
  },
  {
    id: 4,
    name: "Tariff Name",
    downloadSpeed: 250,
    uploadSpeed: 125,
    price: 451.23,
    benefits: [
      { id: 1, name: "Tariff Benefit 1" },
      { id: 2, name: "Tariff Benefit 2" },
    ],
  },
  {
    id: 5,
    name: "Tariff Name",
    downloadSpeed: 500,
    uploadSpeed: 250,
    price: 512.34,
    benefits: [
      { id: 1, name: "Tariff Benefit 1" },
      { id: 2, name: "Tariff Benefit 2" },
      { id: 3, name: "Tariff Benefit 3" },
    ],
  },
];
