type TariffBenefit = {
  id: string | number;
  name: string;
};

export type Tariff = {
  id: string | number;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  price: number;
  benefits: TariffBenefit[];
};
