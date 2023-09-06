import axios, { AxiosError, AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetchCategoryProducts = async (slug: String): Promise<any> => {
  try {
    const result = await axiosInstance.get(BASE_URL + `category/${slug}`);

    return result.data.categoryProducts;
  } catch (error: any) {
    throw error;
  }
};

export { fetchCategoryProducts };
