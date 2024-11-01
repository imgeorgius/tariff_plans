export enum Filter {
  PRICE_UNDER_300 = "price_under_300",
  DOWNLOAD_100 = "download_100",
  DOWNLOAD_200 = "download_200",
  UPLOAD_50 = "upload_50",
  UPLOAD_100 = "upload_100",
}

export enum Sort {
  PRICE_ASC = "price_asc",
  PRICE_DESC = "price_desc",
  UPLOAD_ASC = "upload_asc",
  UPLOAD_DESC = "upload_desc",
  DOWNLOAD_ASC = "download_asc",
  DOWNLOAD_DESC = "download_desc",
}

export type FilterOption = {
  value: Filter;
  label: string;
};

export type SortOption = {
  value: Sort;
  label: string;
};

export const filterOptions: FilterOption[] = [
  { value: Filter.PRICE_UNDER_300, label: "Price under 300€" },
  { value: Filter.DOWNLOAD_100, label: "Download speed >= 100 Mbit/s" },
  { value: Filter.DOWNLOAD_200, label: "Download speed >= 200 Mbit/s" },
  { value: Filter.UPLOAD_50, label: "Upload speed >= 50 Mbit/s" },
  { value: Filter.UPLOAD_100, label: "Upload speed >= 100 Mbit/s" },
];

export const sortOptions: SortOption[] = [
  { value: Sort.PRICE_ASC, label: "Price: Ascending" },
  { value: Sort.PRICE_DESC, label: "Price: Descending" },
  { value: Sort.UPLOAD_ASC, label: "Upload: Ascending" },
  { value: Sort.UPLOAD_DESC, label: "Upload: Descending" },
  { value: Sort.DOWNLOAD_ASC, label: "Download: Ascending" },
  { value: Sort.DOWNLOAD_DESC, label: "Download: Descending" },
];
