import axios, { AxiosError, AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetchProducts = async (): Promise<any> => {
  try {
    const result = await axiosInstance.get(BASE_URL + "products");

    return result.data.data;
  } catch (error: any) {
    throw error;
  }
};

export { fetchProducts };
