import axios from "axios";
import { handleApiError } from "./error-handler";

export abstract class BaseService {
  private axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(endpoint);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  }
  protected async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(endpoint, data);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  }
}
