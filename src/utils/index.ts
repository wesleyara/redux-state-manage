import fetch from "cross-fetch";

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
