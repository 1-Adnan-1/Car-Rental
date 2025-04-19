import { Car } from "../types";

type ReturnType = {
  results: Car[];
  total_count: number;
};

export const fetchCars = async (
  make?: string,
  model?: string,
  year?: string,
  page: string = "1"
): Promise<ReturnType> => {
  let url =
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?";

  if (make) {
    url += `&refine=make:${encodeURIComponent(make)}`;
  }

  if (model) {
    url += `&refine=model:${encodeURIComponent(model)}`;
  }

  if (year) {
    url += `&refine=year:${encodeURIComponent(year)}`;
  }

  const offset = (parseInt(page) - 1) * 12;

  url += `&limit=12`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
