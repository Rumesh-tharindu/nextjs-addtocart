import axios, { AxiosError, AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetchPublications = async (year: number): Promise<any> => {
  try {
    const result = await axiosInstance.get(
      BASE_URL + "publications?per_page=3&" + "year=" + year
    );

    return result.data;
  } catch (error: any) {
    throw error;
  }
};

const fetchFilteredPublications = async (
  filter: string,
  year: number,
  page: number
) => {
  try {
    const result = await axiosInstance
      .get(
        BASE_URL +
          "publications?per_page=3&category=" +
          filter +
          "&year=" +
          year +
          "&page=" +
          page
      )
      .then((res) => {
        return res.data;
      });
    return result;
  } catch (error: any) {
    throw error;
  }
};

export { fetchPublications, fetchFilteredPublications };
